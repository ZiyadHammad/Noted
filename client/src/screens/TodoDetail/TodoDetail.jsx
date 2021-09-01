import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getOneTodo } from '../../services/todo';
import './TodoDetail.css'

export default function TodoDetail(props) {
  const [todoItem, setTodoItem] = useState({});
  const { id } = useParams();
  

  useEffect(() => {
    const fetchTodoItem = async () => {
      const todoData = await getOneTodo(id);
      console.log("todo-data",todoData)
      setTodoItem(todoData);
    };
    fetchTodoItem();
  }, [id]);

  console.log(todoItem)
  

  return (
    <div className="todo-detail">

      <div className="todo-content">
      <h1>{todoItem.title}</h1>
      <h3>{todoItem.content}</h3>
        </div>
    </div>
  );
}