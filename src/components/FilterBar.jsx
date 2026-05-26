function FilterBar({ statusFilter, priorityFilter, sortBy, onStatusFilterChange, onPriorityFilterChange, onSortChange }) {
  return (
    <div className="filter-bar">
      <div className="filter-group">
        <label htmlFor="statusFilter">Estado</label>
        <select id="statusFilter" value={statusFilter} onChange={(event) => onStatusFilterChange(event.target.value)}>
          <option value="Todas">Todas</option>
          <option value="Pendiente">Pendientes</option>
          <option value="En Progreso">En progreso</option>
          <option value="Completada">Completadas</option>
        </select>
      </div>

      <div className="filter-group">
        <label htmlFor="priorityFilter">Prioridad</label>
        <select id="priorityFilter" value={priorityFilter} onChange={(event) => onPriorityFilterChange(event.target.value)}>
          <option value="Todas">Todas</option>
          <option value="Alta">Alta</option>
          <option value="Media">Media</option>
          <option value="Baja">Baja</option>
        </select>
      </div>

      <div className="filter-group">
        <label htmlFor="sortBy">Ordenar</label>
        <select id="sortBy" value={sortBy} onChange={(event) => onSortChange(event.target.value)}>
          <option value="createdDesc">Fecha creación: recientes primero</option>
          <option value="createdAsc">Fecha creación: antiguas primero</option>
          <option value="dueDate">Fecha límite: próximas primero</option>
          <option value="priorityHigh">Prioridad: alta a baja</option>
          <option value="priorityLow">Prioridad: baja a alta</option>
          <option value="titleAsc">Título: A-Z</option>
          <option value="titleDesc">Título: Z-A</option>
        </select>
      </div>
    </div>
  )
}

export default FilterBar
