import { Task } from '../utils/data-tasks'

const TaskCard = ({task}: {
  task: Task
}) => {
  return <div className="border rounded-lg px-2 m-2 bg-gray-50 w-56">
    <div className="text-base font-base py-2">
      {task.title}
    </div>
    <div className="flex gap-4 justify-between py-2 text-gray-500 text-sm">
      <div>{task.id}</div>
      <div>{task.points}</div>
    </div>
  </div>
}

export default TaskCard