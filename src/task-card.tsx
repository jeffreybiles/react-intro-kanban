const TaskCard = ({title, id, points}) => {
  return <div className="border rounded-lg px-2 m-2 bg-gray-50">
    <div className="text-base font-semibold py-2">
      {title}!!!
    </div>
    <div className="flex gap-4 justify-between py-2 text-gray-700">
      <div>{id}</div>
      <div>{points}</div>
    </div>
  </div>
}

export default TaskCard