import React from 'react';

const User = ({user}) => {
    let {id, name} = user;

    return (
        <div>
            {id}) {name}
        </div>
    );
};

export default User;