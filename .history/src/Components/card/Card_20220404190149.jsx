import React from 'react';
import { useSelector } from 'react-redux';
import { selectTodoDoFirst } from '../../features/todo/todoSlice';
import { selectTodoSchedule } from '../../features/todo/todoScheduleSlice';
import { selectTodoDelegate } from '../../features/todo/todoDelegateSlice';
import { selectTodoDontDo } from '../../features/todo/todoDontDoSlice';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDrag } from "react-dnd";
import './Card.css';
import { Draggable } from 'react-beautiful-dnd';

const Card = ({ color, title, flag }) => {
  const todosDoFirst = useSelector(selectTodoDoFirst);
  const todosSchedule = useSelector(selectTodoSchedule);
  const todosDelegate = useSelector(selectTodoDelegate);
  const todosDontDo = useSelector(selectTodoDontDo);

  let todosDoFirstLength = todosDoFirst.length;
  let todosScheduleLength = todosSchedule.length;
  let todosDelegateLength = todosDelegate.length;
  let todosDontDoLength = todosDontDo.length;

  // const [{ isDragging }, drag] = useDrag({
  //   item: { type: "CARD", title, color, flag },
  //   collect: monitor => ({
  //     isDragging: !!monitor.isDragging(),
  //   }),
  // });
  // ref={drag}
  // ref={drag}
  // ref={drag}
  // ref={drag}
  return (
    <div className='box' style={{ backgroundColor: `${color}` }}>
      <div className="card-title">
        {`${title}- todoCount:${Number((flag === "doFirst" && todosDoFirstLength) || (flag === "schedule" && todosScheduleLength) || (flag === "delegate" && todosDelegateLength) || (flag === "dontDo" && todosDontDoLength))}`}
      </div>
      <div className="card-content">
        <Draggable draggableId={todo.id.toString()} index={index}>
          {(provided, snapshot) => (
            <div className="card-content-item">
              {flag === "doFirst" && todosDoFirst?.map((todo, index) => (
                <div key={index} >
                  {todo}
                </div>
              ))}
            </div>
          )}
        </Draggable>
        <div className="card-content-item">
          {flag === "schedule" && todosSchedule?.map((todo, index) => (
            <div key={index} >
              {todo}
            </div>
          ))}
        </div>
        <div className="card-content-item">
          {flag === "delegate" && todosDelegate?.map((todo, index) => (
            <div key={index} >
              {todo}
            </div>
          ))}
        </div>
        <div className="card-content-item">
          {flag === "dontDo" && todosDontDo?.map((todo, index) => (
            <div key={index} >
              {todo}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;