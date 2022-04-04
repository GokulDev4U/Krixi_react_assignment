import React from 'react';
import { useSelector } from 'react-redux';
import { selectTodoDelegate } from '../../features/todo/todoDelegateSlice';
import { selectTodoDontDo } from '../../features/todo/todoDontDoSlice';
import { selectTodoSchedule } from '../../features/todo/todoScheduleSlice';
import { selectTodoDoFirst } from '../../features/todo/todoSlice';

const TodoList = () => {
    const todosDoFirst = useSelector(selectTodoDoFirst);
    const todosSchedule = useSelector(selectTodoSchedule);
    const todosDelegate = useSelector(selectTodoDelegate);
    const todosDontDo = useSelector(selectTodoDontDo);
    return (
        <div>TodoList</div>
    );
};

export default TodoList;