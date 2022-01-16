import React from 'react';

const UsersDetails = ({user}) => {

    const {id, name, username, email} = user;

    return (
        <div>
            <div>{id}</div>
            <div>{name}</div>
            <div>{username}</div>
            <div>{email}</div>
            <button>Posts</button>
        </div>
    );
};

export default UsersDetails;