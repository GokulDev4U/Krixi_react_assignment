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

  return (
    <div className='box' style={{ backgroundColor: `${color}` }}>
      <div className="card-title">
        {`${title}- todoCount:${Number((flag === "doFirst" && todosDoFirstLength) || (flag === "schedule" && todosScheduleLength) || (flag === "delegate" && todosDelegateLength) || (flag === "dontDo" && todosDontDoLength))}`}
      </div>
      <Droppable droppableId={flag} >
        {(provided, snapshot) => {
          return (
            <div className="card-content" ref={provided.innerRef} {...provided.droppableProps} >
              <Draggable draggableId={title} index={0}>
                {(provided, snapshot) => {
                  return (
                    <div >
                      {flag === "doFirst" && todosDoFirst?.map((todo, index) => (
                        <div key={index} className="card-content-item" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                          {todo}
                        </div>
                      ))}
                    </div>
                  );
                }}
              </Draggable>

              <Draggable draggableId={title} index={1}>
                {(provided, snapshot) => {
                  return (
                    <div >
                      {flag === "schedule" && todosSchedule?.map((todo, index) => (
                        <div key={index} className="card-content-item" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                          {todo}
                        </div>
                      ))}
                    </div>
                  );
                }}
              </Draggable>

              <Draggable draggableId={title} index={2}>
                {(provided, snapshot) => {
                  return (
                    <div >
                      {flag === "delegate" && todosDelegate?.map((todo, index) => (
                        <div key={index} className="card-content-item" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                          {todo}
                        </div>
                      ))}
                    </div>
                  );
                }}
              </Draggable>

              <Draggable draggableId={title} index={3}>
                {(provided, snapshot) => {
                  return (
                    <div >
                      {flag === "dontDo" && todosDontDo?.map((todo, index) => (
                        <div key={index} className="card-content-item" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                          {todo}
                        </div>
                      ))}
                    </div>
                  );
                }}
              </Draggable>
              {provided.placeholder}
            </div>
          );
        }}
      </Droppable>
    </div >
  );
};

export default Card;