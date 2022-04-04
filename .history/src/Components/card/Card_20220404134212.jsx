import React from 'react';
import { useSelector } from 'react-redux';
import { selectTodo } from '../../features/todo/todoSlice';
import './Card.css';

const Card = ({ color, title }) => {
  const todos = useSelector(selectTodo);

  return (
    <div className='box' style={{ backgroundColor: `${color}` }}>
      <div className="card-title">
        {title}
      </div>
      <div className="card-content">
        {todos.map((todo, index) => (
          <div key={index}>
            {todo}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;