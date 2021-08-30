import { useState, useEffect } from 'react'
import { Switch, Route} from 'react-router-dom'
import {getAllTodos} from '../services/todo'
import { getAllEvents } from '../services/event'
import TodoEdit from '../screens/TodoEdit/TodoEdit'

export default function MainContainer() {
  const [todos, setTodos] = useState([])
  const [events, setEvents] = useState([])

  useEffect(() => {
    const fetchTodos = async () => {
      const todoList = await getAllTodos()
      setTodos(todoList)

      
    }
  }, [])

  useEffect(() => {
    const fetchEvents = async () => {
      const eventList = await getAllEvents()
      setEvents(eventList)
    }
    fetchEvents()
  }, [])

  return (
    <div>
      <Switch>
        <Route path="/events">
          <h1>Flavors List</h1>
        </Route>
        <Route path="/todos/:id/edit">
          <TodoEdit todos={todos} />
        </Route>
        <Route path="/todos/new">
          <h1>Events List</h1>
        </Route>
        <Route path="/todos/:id">
          <h1>Events List</h1>
        </Route>
        <Route path="/todos">
          <h1>Events List</h1>
        </Route>
      </Switch>
      
    </div>
  )
}
