function TaskCard({ task, onEdit, onDelete, onComplete }) {
  const description = task.description.length > 120 ? task.description.substring(0, 120) + '...' : task.description
  const completedClass = task.status === 'Completada' ? ' completed' : ''

  return (
    <article className={'task-card' + completedClass}>
      <div className="task-card-top">
        <h3>{task.title}</h3>
        <span className={'priority priority-' + task.priority.toLowerCase()}>{task.priority}</span>
      </div>

      {description && <p className="description">{description}</p>}

      <div className="task-info">
        <p><strong>Estado:</strong> {task.status}</p>
        <p><strong>Fecha límite:</strong> {task.dueDate ? task.dueDate : 'Sin fecha'}</p>
      </div>

      <div className="task-buttons">
        <button className="btn small-btn edit-btn" onClick={() => onEdit(task)}>Editar</button>
        <button className="btn small-btn delete-btn" onClick={() => onDelete(task.id)}>Eliminar</button>
        {task.status !== 'Completada' && (
          <button className="btn small-btn complete-btn" onClick={() => onComplete(task.id)}>Completar</button>
        )}
      </div>
    </article>
  )
}

export default TaskCard
