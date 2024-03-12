import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ModalWnd from '../../components/Modal/ModalWind';
import './Users.css';

export default function Users() {
    const [modalState, setModalState] = useState(false);
    const [users, setUsers] = useState([]);
    const [userIdToDelete, setUserIdToDelete] = useState(null);


    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users`)
            .then(response => response.json())
            .then(usersData => setUsers(usersData))
    }, []);

    const handleDeleteUser = () => {
        setUsers(prevUsers => prevUsers.filter(user => user.id !== userIdToDelete));
        setModalState(false);
    };
    return (
        <div className="Main">
            <h1>Users</h1>
            <ModalWnd call={modalState} onDestroy={()=>setModalState(false)} onDeleteUser={handleDeleteUser}/>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        <Link to={`/users/${user.username}`}>
                            {user.name}
                        </Link>
                        <button className='btn_del' onClick={()=>{setUserIdToDelete(user.id); setModalState(true)}}>X</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
