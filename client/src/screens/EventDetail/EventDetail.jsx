import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getOneEvent } from '../../services/event';
import { Link } from 'react-router-dom';


export default function EventDetail(props) {
  const [eventItem, setEventItem] = useState({});
  const { id } = useParams();
  const { events, handleDelete } = props;
  

  useEffect(() => {
    const fetchEventItem = async () => {
      const eventData = await getOneEvent(id);
      
      setEventItem(eventData);
    };
    fetchEventItem();
  }, [id]);

  
  

  return (
    <div>
      {eventItem.title}
      {eventItem.content}
      <Link to="/events">
      <button onClick={() => handleDelete(events.id)}>Delete</button>
      </Link>
    </div>
  );
}