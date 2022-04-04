import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { useSelector } from 'react-redux';
import { selectTodoDelegate } from '../../features/todo/todoDelegateSlice';
import { selectTodoDontDo } from '../../features/todo/todoDontDoSlice';
import { selectTodoSchedule } from '../../features/todo/todoScheduleSlice';
import { selectTodoDoFirst } from '../../features/todo/todoSlice';

const TodoList = ({ flag }) => {
    const todosDoFirst = useSelector(selectTodoDoFirst);
    const todosSchedule = useSelector(selectTodoSchedule);
    const todosDelegate = useSelector(selectTodoDelegate);
    const todosDontDo = useSelector(selectTodoDontDo);

    return (
        <div>
            <Draggable >
                {(provided, snapshot) => (
                    <div className="card-content-item">
                        {flag === "doFirst" && todosDoFirst?.map((todo, index) => (
                            <div key={index} >
                                {todo}
                            </div>
                        ))}
                        {flag === "doFirst" && todosSchedule?.map((todo, index) => (
                            <div key={index} >
                                {todo}
                            </div>
                        ))}
                        {flag === "doFirst" && todosDelegate?.map((todo, index) => (
                            <div key={index} >
                                {todo}
                            </div>
                        ))}
                        {flag === "doFirst" && todosDontDo?.map((todo, index) => (
                            <div key={index} >
                                {todo}
                            </div>
                        ))}
                    </div>
                )}
            </Draggable>
        </div>
    );
};

export default TodoList;