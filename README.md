# Gestor de Tareas con React

Aplicación web sencilla para gestionar tareas usando React y Vite.

## Objetivo

El objetivo del proyecto es crear un gestor de tareas donde se puedan crear, visualizar, editar, eliminar, completar, filtrar y ordenar tareas.

## Funcionalidades

- Crear tareas nuevas.
- Mostrar todas las tareas en tarjetas.
- Editar tareas existentes.
- Eliminar tareas con confirmación.
- Marcar tareas como completadas.
- Filtrar por estado.
- Filtrar por prioridad.
- Ordenar por fecha de creación, fecha límite, prioridad y título.
- Guardar las tareas en localStorage.
- Cargar las tareas guardadas al abrir la aplicación.
- Diseño responsive para ordenador, tablet y móvil.

## Tecnologías usadas

- React
- Vite
- JavaScript
- CSS
- localStorage
- useState
- useEffect

## Estructura del proyecto

```txt
src/
├─ components/
│  ├─ Header.jsx
│  ├─ TaskForm.jsx
│  ├─ TaskList.jsx
│  ├─ TaskCard.jsx
│  └─ FilterBar.jsx
├─ App.jsx
├─ main.jsx
└─ index.css
```

## Cómo ejecutar el proyecto

Primero hay que instalar las dependencias:

```bash
npm install
```

Después se inicia el servidor de desarrollo:

```bash
npm run dev
```

La aplicación se abrirá desde la dirección que muestre la terminal.

## Cómo generar la versión final

```bash
npm run build
```
