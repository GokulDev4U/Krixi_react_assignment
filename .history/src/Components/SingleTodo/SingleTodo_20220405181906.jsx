import React from 'react';

const SingleTodo = () => {
    return (
        <div key={index} className="card-content-item" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
            {todo}
        </div>
    );
};

export default SingleTodo;
