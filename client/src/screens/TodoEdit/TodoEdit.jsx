import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

export default function TodoEdit(props) {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
  })
  const {todos} = props
  const { id } = useParams()
  
  useEffect(() => {
    const prefillFormData = () => {
      const todoItem = todos.find((todo) => todo.id === Number(id))
      setFormData({title: todoItem.title, content: todoItem.content})
    }
    if (todos.length) {
      prefillFormData()
    }
  }, [todos, id])

  const handleChange = (e) => {
   
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }
  
  return (
    <div className="todo-edit">
      <form>
        <label>
          Title:
          <input type="text" name="title" value={formDara.title} onChange={handleChange} />
        </label>
        <label>
          Content:
          <input type="text" name="content" value={formDara.content} onChange={handleChange} />
        </label>
        <button>Submit Changes</button>
      </form>
    </div>
  )
}
