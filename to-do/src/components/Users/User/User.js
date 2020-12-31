import React, {useEffect, useState} from 'react';

import './User.scss';

import Todos from '../../Todos/Todos';
import EditUsers from '../EditUser/EditUser';

import Button from 'react-bootstrap/Button';
import UsersService from '../../../services/users.service';

const User = (props) => {
    const [showTodos, setShowTodos] = useState(false);
    const [userSelected, setUserSelected] = useState('');
    const [usersData, setUsersData] = useState(Object.entries(props.data));

    const [showEditUser, setShowEditUser] = useState(false);
    const [userInEdition, setUserInEdition] = useState('');
    const [elementInEdition, setElementInEdition] = useState('');

    // const usersData = Object.entries(props.data);
    const userList = usersData.map(r => r[1].name);

    // Todos Handlers
    const handleCloseTodos = () => {
        setShowTodos(false);
    }
    const handleShowTodos = (e) => {
        setShowTodos(true);
        setUserSelected(e.target.firstChild.nodeValue);
    }

    // Edit Users Handlers
    const handleShowCloseUserModal = () => {
        setShowEditUser(false);
    }
    const handleShowEditUserModal = (e) => {
        setUserInEdition(e.target.nextSibling.innerHTML);
        setElementInEdition(e.target.nextSibling.nextSibling.innerHTML);
        setShowEditUser(true);
    }

    useEffect(() => {
        console.log('usersData', usersData);
    }, usersData);

    const deleteUser = (id) => {
        UsersService.removeUser(id)
            .then((res) => {
                UsersService.getUsers()
                    .then(users => {
                        const newData = Object.entries(users.data);
                        setUsersData(newData);
                    });

            });
    }

    return (
        <>
            <ul className="users-list">
                {
                    usersData.map((el, key) => 
                        <li key={el[1].id}>
                            <div className="user-name" onClick={(e) => handleShowTodos(e)}>
                                { el[1].name }
                            </div>
                            <div className="user-actions">
                                <Button variant="primary" onClick={(e) => handleShowEditUserModal(e)}>
                                    Edit User
                                </Button>
                                <span className="user-id">{ el[1].id }</span>
                                <span className="element-id">{ el[0] }</span>
                                <Button variant="link" onClick={(e) => deleteUser(el[0])}>
                                    Delete User
                                </Button>
                            </div>
                        </li>
                    )}
            </ul>

            <EditUsers
                show={showEditUser}
                hide={handleShowCloseUserModal}
                userInEdition={userInEdition}
                elementInEdition={elementInEdition}
            />

            <Todos
                show={showTodos}
                close={handleCloseTodos}
                userList={userList}
                userSelected={userSelected} />
        </>
    );
}

export default User;
