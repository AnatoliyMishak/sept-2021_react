import React from 'react';


const User = ({user}) => {
    const {id, name, username, email} = user;

    return (
        <div>
            <div>
                {id}-{name}___{username}___{email}
            </div>
        </div>
    );
};

export default User;