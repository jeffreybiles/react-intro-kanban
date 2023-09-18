import { useState } from 'react'
import './App.css'
import TaskCard from './components/TaskCard'
import { tasks as initialTasks, Status, statuses, Task } from './utils/data-tasks'

function App() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks)
  const columns = statuses.map((status) => {
    const tasksInColumn = tasks.filter((task) => task.status === status)
    return {
      title: status,
      tasks: tasksInColumn
    }
  })

  const updateTask = (task: Task) => {
    const updatedTasks = tasks.map((t) => {
      return t.id === task.id ? task : t
    })
    setTasks(updatedTasks)
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, status: Status) => {
    e.preventDefault()
    const id = e.dataTransfer.getData("id")
    const task = tasks.find((task) => task.id === id)
    if(task) {
      updateTask({...task, status})
    }
  }

  return (
    <div className="flex divide-x">
      {columns.map((column) => (
        <div onDrop={(e) => handleDrop(e, column.title)} onDragOver={(e) => e.preventDefault()}>
          <div className="flex justify-between text-3xl p-2 font-bold text-gray-500">
            <h2 className="capitalize">{column.title}</h2>
            {column.tasks.reduce((total, task) => total + (task?.points || 0), 0)}
          </div>
          {column.tasks.map((task) => (
            <TaskCard
              task={task}
              updateTask={updateTask}
            />
          ))}
        </div>
      ))}
    </div>
  )
}

export default App
