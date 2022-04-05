import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import './../card/Card.css';


const SingleTodo = ({ title, todo, index }) => {
    return (
        <Draggable draggableId={title} index={index}>
            {(provided, snapshot) => {
                return (
                    <div key={index} className="card-content-item" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                        {todo}
                    </div>
                );
            }}
        </Draggable>
    );
};

export default SingleTodo;
