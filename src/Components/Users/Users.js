import React from 'react';

import {useState, useEffect} from 'react'
import User from '../User/User'
import {userService} from '../../Services/User.service'

const Users = () => {
    let [users, setUsers] = useState([]);

    useEffect(()=>{
        userService.getAll().then(value => setUsers(value))
    },[])


    return (
        <div>
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};

export default Users;