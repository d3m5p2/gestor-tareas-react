function TaskForm({ formData, editingId, onInputChange, onSubmit, onCancelEdit }) {
  return (
    <form className="task-form" onSubmit={onSubmit}>
      <h2>{editingId ? 'Editar tarea' : 'Crear tarea'}</h2>

      <div className="form-group">
        <label htmlFor="title">Título</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={onInputChange}
          maxLength="100"
          placeholder="Ejemplo: Estudiar React"
        />
      </div>

      <div className="form-group">
        <label htmlFor="description">Descripción</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={onInputChange}
          maxLength="500"
          placeholder="Describe la tarea"
        ></textarea>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="priority">Prioridad</label>
          <select id="priority" name="priority" value={formData.priority} onChange={onInputChange}>
            <option value="Alta">Alta</option>
            <option value="Media">Media</option>
            <option value="Baja">Baja</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="status">Estado</label>
          <select id="status" name="status" value={formData.status} onChange={onInputChange}>
            <option value="Pendiente">Pendiente</option>
            <option value="En Progreso">En Progreso</option>
            <option value="Completada">Completada</option>
          </select>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="dueDate">Fecha límite</label>
        <input
          type="date"
          id="dueDate"
          name="dueDate"
          value={formData.dueDate}
          onChange={onInputChange}
        />
      </div>

      <div className="form-buttons">
        <button type="submit" className="btn primary-btn">
          {editingId ? 'Guardar cambios' : 'Crear tarea'}
        </button>

        {editingId && (
          <button type="button" className="btn secondary-btn" onClick={onCancelEdit}>
            Cancelar
          </button>
        )}
      </div>
    </form>
  )
}

export default TaskForm
