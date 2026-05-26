import { useEffect, useState } from 'react'
import Header from './components/Header.jsx'
import TaskForm from './components/TaskForm.jsx'
import TaskList from './components/TaskList.jsx'
import FilterBar from './components/FilterBar.jsx'

const initialForm = {
  title: '',
  description: '',
  priority: 'Media',
  status: 'Pendiente',
  dueDate: ''
}

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks')
    return savedTasks ? JSON.parse(savedTasks) : []
  })

  const [formData, setFormData] = useState(initialForm)
  const [editingId, setEditingId] = useState(null)
  const [message, setMessage] = useState('')
  const [statusFilter, setStatusFilter] = useState('Todas')
  const [priorityFilter, setPriorityFilter] = useState('Todas')
  const [sortBy, setSortBy] = useState('createdDesc')

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  function showMessage(text) {
    setMessage(text)
    setTimeout(() => {
      setMessage('')
    }, 2500)
  }

  function handleInputChange(event) {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }

  function handleSubmit(event) {
    event.preventDefault()

    const cleanTitle = formData.title.trim()
    const cleanDescription = formData.description.trim()

    if (cleanTitle === '') {
      showMessage('El título es obligatorio')
      return
    }

    if (cleanTitle.length > 100) {
      showMessage('El título no puede tener más de 100 caracteres')
      return
    }

    if (cleanDescription.length > 500) {
      showMessage('La descripción no puede tener más de 500 caracteres')
      return
    }

    if (editingId) {
      const updatedTasks = tasks.map((task) => {
        if (task.id === editingId) {
          return {
            ...task,
            title: cleanTitle,
            description: cleanDescription,
            priority: formData.priority,
            status: formData.status,
            dueDate: formData.dueDate
          }
        }
        
        return task
      })

      setTasks(updatedTasks)
      setEditingId(null)
      setFormData(initialForm)
      showMessage('Tarea actualizada correctamente')
    } else {
      const newTask = {
        id: Date.now(),
        title: cleanTitle,
        description: cleanDescription,
        priority: formData.priority,
        status: formData.status,
        dueDate: formData.dueDate,
        createdAt: new Date().toISOString()
      }

      setTasks([newTask, ...tasks])
      setFormData(initialForm)
      showMessage('Tarea creada correctamente')
    }
  }

  function handleEdit(task) {
    setFormData({
      title: task.title,
      description: task.description,
      priority: task.priority,
      status: task.status,
      dueDate: task.dueDate
    })
    setEditingId(task.id)
  }

  function handleCancelEdit() {
    setEditingId(null)
    setFormData(initialForm)
  }

  function handleDelete(id) {
    const confirmDelete = confirm('¿Seguro que quieres eliminar esta tarea?')

    if (confirmDelete) {
      setTasks(tasks.filter((task) => task.id !== id))
      showMessage('Tarea eliminada correctamente')

      if (editingId === id) {
        handleCancelEdit()
      }
    }
  }

  function handleComplete(id) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, status: 'Completada' }
      }

      return task
    })

    setTasks(updatedTasks)
    showMessage('Tarea marcada como completada')
  }

  function getVisibleTasks() {
    let visibleTasks = [...tasks]

    if (statusFilter !== 'Todas') {
      visibleTasks = visibleTasks.filter((task) => task.status === statusFilter)
    }

    if (priorityFilter !== 'Todas') {
      visibleTasks = visibleTasks.filter((task) => task.priority === priorityFilter)
    }

    visibleTasks.sort((a, b) => {
      if (sortBy === 'createdDesc') {
        return new Date(b.createdAt) - new Date(a.createdAt)
      }

      if (sortBy === 'createdAsc') {
        return new Date(a.createdAt) - new Date(b.createdAt)
      }

      if (sortBy === 'dueDate') {
        if (!a.dueDate) return 1
        if (!b.dueDate) return -1
        return new Date(a.dueDate) - new Date(b.dueDate)
      }

      if (sortBy === 'priorityHigh') {
        const values = { Alta: 3, Media: 2, Baja: 1 }
        return values[b.priority] - values[a.priority]
      }

      if (sortBy === 'priorityLow') {
        const values = { Alta: 3, Media: 2, Baja: 1 }
        return values[a.priority] - values[b.priority]
      }

      if (sortBy === 'titleAsc') {
        return a.title.localeCompare(b.title)
      }

      if (sortBy === 'titleDesc') {
        return b.title.localeCompare(a.title)
      }

      return 0
    })

    return visibleTasks
  }

  const visibleTasks = getVisibleTasks()

  return (
    <div className="app">
      <Header />

      <main className="main-container">
        <section className="panel">
          <TaskForm
            formData={formData}
            editingId={editingId}
            onInputChange={handleInputChange}
            onSubmit={handleSubmit}
            onCancelEdit={handleCancelEdit}
          />

          {message && <p className="message">{message}</p>}
        </section>

        <section className="panel">
          <FilterBar
            statusFilter={statusFilter}
            priorityFilter={priorityFilter}
            sortBy={sortBy}
            onStatusFilterChange={setStatusFilter}
            onPriorityFilterChange={setPriorityFilter}
            onSortChange={setSortBy}
          />

          <TaskList
            tasks={visibleTasks}
            totalTasks={tasks.length}
            onEdit={handleEdit}
            onDelete={handleDelete}
            onComplete={handleComplete}
          />
        </section>
      </main>
    </div>
  )
}

export default App
