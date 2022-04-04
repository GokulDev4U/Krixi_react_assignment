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

  let todosDoFirstLength = todosDoFirst.length;
  let todosScheduleLength = todosSchedule.length;
  let todosDelegateLength = todosDelegate.length;
  let todosDontDoLength = todosDontDo.length;

  return (
    <div className='box' style={{ backgroundColor: `${color}` }}>
      <div className="card-title">
        {`${title}- todoCount:${todosDoFirstLength || todosScheduleLength || todosDelegateLength || todosDontDoLength}`}
      </div>
      <div className="card-content">
        {/* {todos.map((todo, index) => (
          <div key={index}>
            {todo}
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default Card;