import React, {useEffect, useState} from 'react';
import './Todo.scss';

import Alert from 'react-bootstrap/Alert';

import UserTaskService from '../../../services/userTasks.service';

import PropTypes from 'prop-types';

const Todo = ({data, userList, userSelected, close}) => {
    const [tasks, setTasks] = useState([]);
    const [todosList, setTodosList] = useState(Object.entries(data));
    
    const todosUsersList = todosList.map(todo => todo[1].user_id);
    const tasksMached = [];

    // ComponentDidMount
    useEffect(() => {
        matchTasksWithUsers();
        setTasks(tasksMached);
    }, []);

    const matchTasksWithUsers = () => {
        const intersection = userList.filter(element => todosUsersList.includes(element));
        const userThatMatches = intersection.find(element => element === userSelected);
        if(userSelected === userThatMatches) {
            todosList.map(el => el[1].user_id === userThatMatches && tasksMached.push(el));
        }
    };

    const updateTask = (task) => {
        const updatedTask = {
            description: task[1].description,
            id: task[1].id,
            state: task[1].state === 'to-do' ? 'done' : 'to-do',
            user_id: task[1].user_id
        }
        UserTaskService.updateTodos(updatedTask, task[0]);
        close();
        // This is a hotfix
        setTimeout(() => { window.location.reload() }, 500);
    }
    
    return(
        <ul className="tasks-list">
            {tasks.length ? tasks.map((task, key) => {
                return <li key={task[1].id} onClick={() =>updateTask(task)}>
                    <span className="task-description">
                        {task[1].description}
                    </span>
                    <span className={task[1].state === 'to-do' ? 'task-todo' : 'task-done'}>
                        {task[1].state}
                    </span>
                </li>
            }): <Alert variant="success">No tasks for this user :)</Alert>}
        </ul>
    );
}

Todo.propTypes = {
    data: PropTypes.object,
    userList: PropTypes.array,
    userSelected: PropTypes.string,
    close: PropTypes.func,
};

export default Todo;
