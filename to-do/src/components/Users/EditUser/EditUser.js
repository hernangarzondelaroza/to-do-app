import React, {useState} from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import UsersService from '../../../services/users.service';

const EditUser = ({show, hide, userInEdition, elementInEdition}) => {
    const [userEditValue, setUserEditValue] = useState('');

    const handleNameChange = (e) => {
        setUserEditValue(e.target.value);
    }

    const updateUser = (id) => {
        const updatedUser = {
            id: userInEdition,
            name: userEditValue
        }
        UsersService.updateUser(updatedUser, elementInEdition);
        hide();
        // This is a hotfix
        setTimeout(() => { window.location.reload() }, 500);
    }

    return(
        <Modal show={show} onHide={hide}>
            <Modal.Header closeButton>
            <Modal.Title>Edit User</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <input
                    className="edit-name"
                    placeholder="Please edit the user name for the user"
                    onChange={(e) => handleNameChange(e)} />
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={hide}>
                Close
            </Button>
            <Button variant="primary" onClick={updateUser}>
                Save Changes
            </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default EditUser;
