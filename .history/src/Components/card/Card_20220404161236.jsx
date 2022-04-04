import React from 'react';
import { useSelector } from 'react-redux';
import { selectTodoDoFirst } from '../../features/todo/todoSlice';
import { selectTodoSchedule } from '../../features/todo/todoScheduleSlice';
import { selectTodoDelegate } from '../../features/todo/todoDelegateSlice';
import { selectTodoDontDo } from '../../features/todo/todoDontDoSlice';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import './Card.css';

const Card = ({ color, title, flag }) => {
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
        {`${title}- todoCount:${(flag === "doFirst" && todosDoFirstLength) || (flag === "schedule" && todosScheduleLength) || todosDelegateLength || todosDontDoLength}`}
      </div>
      <div className="card-content">
        {flag === "doFirst" && todosDoFirst?.map((todo, index) => (
          <div key={index}>
            {todo}
          </div>
        ))}
        {flag === "schedule" && todosSchedule && todosSchedule?.map((todo, index) => (
          <div key={index}>
            {todo}
          </div>
        ))}
        {flag === "delegate" && todosDelegate && todosDelegate?.map((todo, index) => (
          <div key={index}>
            {todo}
          </div>
        ))}
        {flag === "dontDo" && todosDontDo && todosDontDo?.map((todo, index) => (
          <div key={index}>
            {todo}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;