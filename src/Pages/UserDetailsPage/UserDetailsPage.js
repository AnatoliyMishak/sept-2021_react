import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {userService} from "../../Services/User.service";

const UserDetailsPage = () => {
    const {id} = useParams();
    const [user, setUser] = useState(null);

    useEffect(()=>{
        userService.getById(id).then(value => setUser({...value}))
    },[])
    return (
        <div>
            {user && (
                <div>{user.id}</div>
                // <div>{user.name}</div>
                // <div>{user.username}</div>
                // <div>{user.email}</div>
            )}
        </div>
    );
};

export default UserDetailsPage;