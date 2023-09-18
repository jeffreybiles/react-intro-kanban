export type Status = 'todo' | 'in-progress' | 'done'
export type Task = {
  title: string,
  id: string,
  status: Status,
  points?: number
}

export const statuses: Status[] = ['todo', 'in-progress', 'done']

export const tasks: Task[] = [
  {
    id: 'BUS-1',
    title: 'Market research',
    status: 'done',
    points: 5
  },
  {
    id: 'BUS-2',
    title: 'Competitor analysis',
    status: 'done',
    points: 0
  },
  {
    id: 'BUS-3',
    title: 'Develop business strategy',
    status: 'todo',
    points: 8
  },
  {
    id: 'BUS-4',
    title: 'Identify potential partners',
    status: 'todo',
    points: 5
  },
  {
    id: 'BUS-5',
    title: 'Negotiate partnerships',
    status: 'todo',
    points: 3
  },
  {
    id: 'BUS-6',
    title: 'Develop marketing plan',
    status: 'todo',
    points: 5
  },
  {
    id: 'BUS-7',
    title: 'Implement marketing plan',
    status: 'in-progress',
    points: 8
  },
  {
    id: 'BUS-8',
    title: 'Evaluate business performance',
    status: 'in-progress',
    points: 2
  }
]