import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {userService} from "../../Services/User.service";

const UserDetailsPage = () => {
    const {id} = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
        userService.getById(id).then(value => setUser({...value}))
    }, [])

    return (
        <div>
            {user && (
                <div>{user.id}_{user.name} username:{user.username}</div>
            )}
            <button>Posts</button>
        </div>
    );
};

export default UserDetailsPage;