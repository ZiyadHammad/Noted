import { useState, useEffect } from 'react'
import { Switch, Route, useHistory} from 'react-router-dom'
import {getAllTodos, postTodo, putTodo, deleteTodo} from '../services/todo'
import { getAllEvents } from '../services/event'
import TodoEdit from '../screens/TodoEdit/TodoEdit'
import TodoCreate from '../screens/TodoCreate/TodoCreate'
import TodoDetail from '../screens/TodoDetail/TodoDetail'
import Todos from '../screens/Todos/Todos'
import LandingPage from '../screens/LandingPage/LandingPage';
import UserProfile from '../screens/UserProfile/UserProfile'
import Events from '../screens/Events/Events'

export default function MainContainer(props) {
  const [todos, setTodos] = useState([])
  const [events, setEvents] = useState([])
  const { currentUser } = props;
  const history = useHistory()

  useEffect(() => {
    const fetchTodos = async () => {
      const todoList = await getAllTodos()
      setTodos(todoList)

      
    }
    if (currentUser) fetchTodos()
  }, [currentUser])

  useEffect(() => {
    const fetchEvents = async () => {
      const eventList = await getAllEvents()
      setEvents(eventList)
    }
    if (currentUser) fetchEvents()
  }, [currentUser])

  const handleCreate = async (formData) => {
    const todoData = await postTodo(formData);
    setTodos((prevState) => [...prevState, todoData]);
    history.push('/todos');
  };

  const handleUpdate = async (id, formData) => {
    const todoData = await putTodo(id, formData);
    setTodos((prevState) =>
      prevState.map((todo) => {
        return todo.id === Number(id) ? todoData : todo;
      })
    );
    history.push('/foods');
  };

  const handleDelete = async (id) => {
    await deleteTodo(id);
    setTodos((prevState) => prevState.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <Switch>
        <Route path="/events">
          <Events events={events} />
        </Route>
        <Route path="/todos/:id/edit">
          <TodoEdit todos={todos} handleUpdate={handleUpdate} />
        </Route>
        <Route path="/todos/new">
          <TodoCreate handleCreate={handleCreate} />
        </Route>
        <Route path="/todos/:id">
          <TodoDetail todos={todos}/>
        </Route>
        <Route path="/todos">
          <Todos todos={todos} handleDelete={handleDelete}  />
        </Route>
        <Route path="/profile">
          <UserProfile />
        </Route>
        <Route path="/">
          <LandingPage />
        </Route>
      </Switch>
      
    </div>
  )
}
