import React from 'react';
import { useSelector } from 'react-redux';
import { selectTodoDoFirst } from '../../features/todo/todoSlice';
import { selectTodoSchedule } from '../../features/todo/todoScheduleSlice';
import { selectTodoDelegate } from '../../features/todo/todoDelegateSlice';
import { selectTodoDontDo } from '../../features/todo/todoDontDoSlice';
import './Card.css';
import { Draggable } from 'react-beautiful-dnd';
import { Droppable } from 'react-beautiful-dnd';


const Card = ({ color, title, flag }) => {
  const todosDoFirst = useSelector(selectTodoDoFirst);
  const todosSchedule = useSelector(selectTodoSchedule);
  const todosDelegate = useSelector(selectTodoDelegate);
  const todosDontDo = useSelector(selectTodoDontDo);

  let todosDoFirstLength = todosDoFirst.length;
  let todosScheduleLength = todosSchedule.length;
  let todosDelegateLength = todosDelegate.length;
  let todosDontDoLength = todosDontDo.length;
  const innerRef = React.useRef();

  const getTodosDoFirstRef = () => {
    return innerRef.current.children[0];
  };

  const getTodosScheduleRef = () => {
    return innerRef.current.children[1];
  };

  const getTodosDelegateRef = () => {
    return innerRef.current.children[2];
  };

  const getTodosDontDoRef = () => {
    return innerRef.current.children[3];
  };

  return (
    <div className='box' style={{ backgroundColor: `${color}` }}>
      <div className="card-title">
        {`${title}- todoCount:${Number((flag === "doFirst" && todosDoFirstLength) || (flag === "schedule" && todosScheduleLength) || (flag === "delegate" && todosDelegateLength) || (flag === "dontDo" && todosDontDoLength))}`}
      </div>
      <Droppable  >
        {(provided, snapshot) => {
          return (
            <div className="card-content" ref={provided.innerRef} {...provided.droppableProps} >
              <Draggable draggableId={title} index={0}>
                <div className="card-content-item">
                  {flag === "doFirst" && todosDoFirst?.map((todo, index) => (
                    <div key={index} className='item' >
                      {todo}
                    </div>
                  ))}
                </div>
              </Draggable>
              <Draggable draggableId={title} index={1}>
                <div className="card-content-item">
                  {flag === "schedule" && todosSchedule?.map((todo, index) => (
                    <div key={index} >
                      {todo}
                    </div>
                  ))}
                </div>
              </Draggable>
              <Draggable draggableId={title} index={2}>
                <div className="card-content-item">
                  {flag === "delegate" && todosDelegate?.map((todo, index) => (
                    <div key={index} >
                      {todo}
                    </div>
                  ))}
                </div>
              </Draggable>
              <Draggable draggableId={title} index={3}>
                <div className="card-content-item">
                  {flag === "dontDo" && todosDontDo?.map((todo, index) => (
                    <div key={index} >
                      {todo}
                    </div>
                  ))}
                </div>
              </Draggable>
            </div>
          );
        }}
      </Droppable>
    </div >
  );
};

export default Card;