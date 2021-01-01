import React, {useEffect, useState} from 'react';

import './Todos.scss';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Todo from './Todo/Todo';

import UserTasksService from '../../services/userTasks.service';
import { v4 as uuidv4 } from 'uuid';

import PropTypes from 'prop-types';

const Todos = ({show, close, userList, userSelected}) => {
    const [todos, setTodos] = useState([]);
    const [todoDescription, setTodoDescription] = useState('');
    const [createTodos, setCreateTodos] = useState(false);

    // ComponentDidMount
    useEffect(() => {
        UserTasksService.getTodos()
            .then(todos => {
                setTodos(todos);
            });
    }, [])

    const handleCreateTodos = () => setCreateTodos(true);
    const handleSaveTodos = () => {
        createTodo();
        setCreateTodos(false)
    }

    const handleNewTask = (e) => {
        setTodoDescription(e.target.value)
        // BUG: not taking the last character
    }

    const createTodo = () => {
        const todo = {
            description: todoDescription,
            id: uuidv4(),
            state: 'to-do',
            user_id: userSelected
        }
        UserTasksService.createTodos(todo);
        close();
        // This is a hotfix
        setTimeout(() => { window.location.reload() }, 500);
    }

    return(
        <Modal show={show} onHide={close}>
            <Modal.Header closeButton>
                <Modal.Title>Tasks list:</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {todos.data ? <Todo data={todos.data} userList={userList} userSelected={userSelected} close={close} /> : ''}
                {createTodos ? <input
                    className="new-task"
                    onChange={(e) => handleNewTask(e)}
                    placeholder="Add new task"
                    maxLength="50" />: '' }
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={close}>
                    Close
                </Button>
                <Button variant="primary" onClick={createTodos ? handleSaveTodos : handleCreateTodos}>
                {createTodos ? 'Save New Task' : 'Create Task'}
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

Todos.propTypes = {
    show: PropTypes.bool,
    close: PropTypes.func,
    userList: PropTypes.array,
    userSelected: PropTypes.string
};


export default Todos;
