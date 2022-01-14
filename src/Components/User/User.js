import React from 'react';

const User = (props) => {
    const {id, name, email} = props;
    return (
        <div>
            {id} -- {name} -- {email}
        </div>
    );
};

export default User;