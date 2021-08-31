import { useState } from 'react';

export default function TodoCreate(props) {
  const [formData, setFormData] = useState({
    title: '',
    content: ''
  });
  const { title, content } = formData;
  const { handleCreateEvent } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleCreateEvent(formData);
      }}
    >
      <h3>Create Event</h3>
      <label>
        title:
        <input type='text' name='title' value={title} onChange={handleChange} />
      </label>
      <label>
        Content:
        <input type='text' name='content' value={content} onChange={handleChange} />
      </label>
      <button>Submit</button>
    </form>
  );
}