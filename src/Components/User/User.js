import React from 'react';

const User = (props) => {
    const {id, name, username, email, city, phone} = props;

    return (
        <div>
            <div>{id}: {name}</div>
            <div>Nick: {username} -- {email}</div>
            <div>City: {city} -- Phone: {phone}</div>
        </div>
    );
};

export default User;