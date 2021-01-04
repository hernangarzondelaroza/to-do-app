import axios from '../axios';

class UsersService {
    static getUsers() {
        try {
            return axios.get('https://to-do-5ce1b-default-rtdb.firebaseio.com/users.json');;
        } catch (e) {
            console.log(e);
            throw e;
        }
    } 
    
    static removeUser(id) {
        try {
            return axios.delete(`https://to-do-5ce1b-default-rtdb.firebaseio.com/users/${id}.json`);
        } catch (e) {
            console.log(e);
            throw e;
        }
    }

    static updateUser(user, id) {
        try {
            return axios.put(`https://to-do-5ce1b-default-rtdb.firebaseio.com/users/${id}.json`, user);
        } catch (e) {
            console.log(e);
            throw e;
        }
    }
}

export default UsersService;