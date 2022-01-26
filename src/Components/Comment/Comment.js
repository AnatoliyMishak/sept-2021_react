import React from 'react';

import css from './Comment.module.css'

const Comment = ({comment: {id, name, email, body}}) => {
    return (
        <div className={css.comment}>
            <div>Id: {id}</div>
            <div>Name: {name}</div>
            <p>{email}</p>
            <p>{body}</p>
        </div>
    );
};

export default Comment;