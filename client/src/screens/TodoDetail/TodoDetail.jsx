import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getOneTodo } from '../../services/todo';


export default function TodoDetail(props) {
  const [todoItem, setTodoItem] = useState(null);
  const { id } = useParams();
  

  useEffect(() => {
    const fetchTodoItem = async () => {
      const foodData = await getOneTodo(id);
      setTodoItem(foodData);
    };
    fetchTodoItem();
  }, [id]);

  

  

  return (
    <div>
      TodoDetail
    </div>
  );
}