import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {userService} from "../../Services/User.service";

const UserDetailsPage = () => {
    const {id} = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
        userService.getById(id).then(value => setUser({...value}))
    }, [id])

    return (
        <div>
            {user && (
                <div>
                    <div>{user.id}_{user.name}</div>
                    <div>Nick: {user.username}</div>
                    <div>E-mail: {user.email}</div>
                    <div>Address:
                        <li>street: {user.address.street}</li>
                        <li>suit: {user.address.suite}</li>
                        <li>city: {user.address.city}</li>
                        <li>zip-code: {user.address.zipcode}</li>
                    </div>
                    <div>Phone N: {user.phone}</div>
                    <div>Web: {user.website}</div>
                </div>
            )}
            <button>Posts</button>
        </div>
    );
};

export default UserDetailsPage;