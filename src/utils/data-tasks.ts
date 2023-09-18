export type Status = 'todo' | 'in-progress' | 'done'
export type Priority = 'low' | 'medium' | 'high'
export type Task = {
  title: string,
  id: string,
  status: Status,
  priority: Priority,
  points?: number
}

export const statuses: Status[] = ['todo', 'in-progress', 'done']
export const priorities: Priority[] = ['low', 'medium', 'high']

export const tasks: Task[] = [
  {
    id: 'BUS-1',
    title: 'Market research',
    status: 'done',
    priority: 'high',
    points: 5
  },
  {
    id: 'BUS-2',
    title: 'Competitor analysis',
    status: 'done',
    priority: 'medium',
    points: 0
  },
  {
    id: 'BUS-3',
    title: 'Develop business strategy',
    status: 'todo',
    priority: 'high',
    points: 8
  },
  {
    id: 'BUS-4',
    title: 'Identify potential partners',
    status: 'todo',
    priority: 'medium',
    points: 5
  },
  {
    id: 'BUS-5',
    title: 'Negotiate partnerships',
    status: 'todo',
    priority: 'low',
    points: 3
  },
  {
    id: 'BUS-6',
    title: 'Develop marketing plan',
    status: 'todo',
    priority: 'high',
    points: 5
  },
  {
    id: 'BUS-7',
    title: 'Implement marketing plan',
    status: 'in-progress',
    priority: 'high',
    points: 8
  },
  {
    id: 'BUS-8',
    title: 'Evaluate business performance',
    status: 'in-progress',
    priority: 'medium',
    points: 2
  }
]