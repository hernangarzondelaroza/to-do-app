import axios from '../axios';

class UsersTasksService {
    static getTodos() {
        try {
            return axios.get('https://to-do-5ce1b-default-rtdb.firebaseio.com/user-tasks.json');;
        } catch (e) {
            console.log(e);
            throw e;
        }
    }

    static createTodos(todo) {
        try {
            return axios.post('https://to-do-5ce1b-default-rtdb.firebaseio.com/user-tasks.json', todo);;
        } catch (e) {
            console.log(e);
            throw e;
        }
    }

    static updateTodos(todo, id) {
        try {
            return axios.put(`https://to-do-5ce1b-default-rtdb.firebaseio.com/user-tasks/${id}.json`, todo);;
        } catch (e) {
            console.log(e);
            throw e;
        }
    }

    static deleteTodos(todo) {
        console.log(todo)
        try {
            return axios.delete(`https://to-do-5ce1b-default-rtdb.firebaseio.com/user-tasks/${todo.id}.json`, todo);;
        } catch (e) {
            console.log(e);
            throw e;
        }
    } 
}

export default UsersTasksService;