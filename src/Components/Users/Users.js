import React from 'react';

import {useState, useEffect} from 'react'
import User from '../User/User'
import {userService} from '../../Services/User.service'

const Users = ({getUser}) => {
    let [users, setUsers] = useState([]);

    useEffect(()=>{
        userService.getAll().then(value => setUsers(value));
    },[])


    return (
        <div>
            {users.map(user => <User key={user.id} user={user} getUser={getUser}/>)}
        </div>
    );
};

export default Users;