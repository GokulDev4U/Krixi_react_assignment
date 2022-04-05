import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import './Card.css';


const SingleTodo = ({ title, todo, index }) => {
    return (
        <Draggable draggableId={title} index={0}>
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
