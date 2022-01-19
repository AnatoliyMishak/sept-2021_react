import React, {useEffect, useState} from 'react';

import Form from "./Components/Form/Form";
import Users from "./Components/Users/Users";
import {userService} from "./Services/User.service";

const App = () => {
    let [users, setUsers] = useState([]);
    let [filtUsers, setFiltUsers] = useState([]);

    useEffect(() => {
        userService.getAll().then(value => {
            setUsers([...value])
            setFiltUsers([...value])})
        }, [])

        const getFilter = (data) => {

        let filtArr = [...users]

            if (data.name){
                filtArr=filtArr.filter(user => user.name.toLowerCase().includes(data.name.toLowerCase()))
            }
            if (data.username){
                filtArr=filtArr.filter(user => user.username.toLowerCase().includes(data.username.toLowerCase()))
            }
            if (data.email){
                filtArr=filtArr.filter(user => user.email.toLowerCase().includes(data.email.toLowerCase()))
            }
            setFiltUsers(filtArr)

        }

        return (

            <div>
                <Form getFilter={getFilter}/>
                <Users users={filtUsers}/>

            </div>
        );
    };

    export default App;