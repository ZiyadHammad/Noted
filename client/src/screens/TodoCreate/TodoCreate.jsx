import { useState } from 'react';
import './TodoCreate.css'

export default function TodoCreate(props) {
  const [formData, setFormData] = useState({
    title: '',
    content: ''
  });
  const { title, content } = formData;
  const { handleCreate } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="create-wrapper">
    <form className="create-form"
      onSubmit={(e) => {
        e.preventDefault();
        handleCreate(formData);
      }}
    >
      <h3 className="create-title">Create Todo</h3>
      <label>
        title:
        <input type='text' name='title' value={title} onChange={handleChange} />
      </label>
      <label>
        Content:
        <input type='text' name='content' value={content} onChange={handleChange} />
      </label>
      <button className="b5">Submit</button>
      </form>
      </div>
  );
}