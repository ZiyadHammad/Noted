import { Link } from 'react-router-dom';

export default function Todos(props) {
  const { todos, handleDelete } = props;

  return (
    <div>
      <h3>Todos</h3>
      {todos.map((todo) => (
        <div key={todo.id}>
          <Link to={`/todos/${todo.id}`}>
            <p>{todo.title}</p>
          </Link>
          
              <Link to={`/todos/${todo.id}/edit`}>
                <button>Edit</button>
          </Link>
          <Link to="/todos">
              <button onClick={() => handleDelete(todo.id)}>Delete</button>
              </Link>
            </div>
        
      ))}
      <Link to='/todos/new'>
        <button>Create</button>
      </Link>
    </div>
  );
}
