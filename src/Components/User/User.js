import React from 'react';

import css from './User.module.css'

const User = ({user, getUser}) => {
    const {id, name} = user;

    return (
        <div className={css.wrap}>
            <div>
                {id}_{name}
            </div>
            <button onClick={() => getUser(user)}>User Details</button>
        </div>
    );
};

export default User;