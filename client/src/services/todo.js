import api from './api-config'

export const getAllTodos = async () => {
  const resp = await api.get('/todos')
  return resp.data
}

export const getOneTodo = async (id) => {
  const resp = await api.get(`/todos/${id}`)
  return resp.data
}

export const postTodo = async (todoData) => {
  const resp = await api.post('todos', {todo: todoData})
  return resp.data
}

export const putTodo = async (id, todoData) => {
  const resp = await api.put(`/todos/${id}`, { todo: todoData })
  return resp.data
}

export const deleteTodo = async (id) => {
  const resp = await api.delete(`/todos/${id}`)
  return resp
}
