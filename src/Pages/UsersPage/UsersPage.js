import React, {useEffect, useState} from 'react';
import {userService} from "../../Services/User.service";
import User from "../../Components/User/User";
import {Outlet} from "react-router-dom";
import css from './UsersPage.module.css'

const UsersPage = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll().then(value => setUsers([...value]))
    }, [])

    return (
        <div className={css.userpage}>
            <div>
                <h1>Users</h1>
                {users.map(user => <User key={user.id} user={user}/>)}
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export default UsersPage;