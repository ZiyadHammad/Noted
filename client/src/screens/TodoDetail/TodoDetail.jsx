import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getOneTodo } from '../../services/todo';


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
    <div>
      {todoItem.title}
      {todoItem.content}
    </div>
  );
}