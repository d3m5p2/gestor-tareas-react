import TaskCard from './TaskCard.jsx'

function TaskList({ tasks, totalTasks, onEdit, onDelete, onComplete }) {
  return (
    <div className="task-list">
      <div className="task-list-header">
        <h2>Lista de tareas</h2>
        <p>Total de tareas: {totalTasks}</p>
      </div>

      {tasks.length === 0 ? (
        <p className="empty-message">No hay tareas para mostrar</p>
      ) : (
        <div className="cards-container">
          {tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onEdit={onEdit}
              onDelete={onDelete}
              onComplete={onComplete}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default TaskList
