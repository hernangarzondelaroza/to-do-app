import React, {useEffect, useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import User from './User/User';
import UsersService from '../../services/users.service';

import axios from '../../axios';

const Users = (props) => {
    const [users, setUsers] = useState([]);

    // ComponentDidMount
    useEffect(() => {

    /* CODE TO CREATE USERS */
/*         const user = {
            id: uuidv4(),
            name: 'Burns'
        }
        axios.post('/users.json', user)
            .then(res => console.log(res))
            .catch(err => console.log(err)); */

    /* CODE TO CREATE TODOS */
/*         const todo = {
            id: uuidv4(),
            description: 'Pickup Bart',
            state: 'to-do',
            user_id: 'Homer Simpson'
        }
        axios.post('/user-tasks.json', todo)
            .then(res => console.log(res))
            .catch(err => console.log(err)); */
        UsersService.getUsers()
            .then(users => {
                setUsers(users);
            })
    }, []);



    return (
        <>
            {users.data ? <User data={users.data} /> : ''}
        </>
    );
}

export default Users;