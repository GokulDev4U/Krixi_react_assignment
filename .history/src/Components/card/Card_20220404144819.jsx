import React from 'react';
import { useSelector } from 'react-redux';
import { selectTodoDoFirst, selectTodoSchedule, selectTodoDelegate, selectTodoDontDo } from '../../features/todo/todoSlice';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import './Card.css';

const Card = ({ color, title }) => {
  const todosDoFirst = useSelector(selectTodoDoFirst);
  const todosSchedule = useSelector(selectTodoSchedule);
  const todosDelegate = useSelector(selectTodoDelegate);
  const todosDontDo = useSelector(selectTodoDontDo);

  return (
    <div className='box' style={{ backgroundColor: `${color}` }}>
      <div className="card-title">
        {`${title}- todoCount:${2}`}
      </div>
      <div className="card-content">
        {todos.map((todo, index) => (
          <div key={index}>
            {todo}
            {/* <EditIcon />
            <DeleteIcon /> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;