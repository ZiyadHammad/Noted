import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getOneEvent } from '../../services/event';
import { Link } from 'react-router-dom';
import "./EventDetail.css" 


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
    <div className="event-wrapper">
      {eventItem.title}
      {eventItem.content}
      <Link to="/events">
      <button className="delete" onClick={() => handleDelete(events.id)}>Delete</button>
      </Link>
    </div>
  );
}