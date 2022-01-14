import React from 'react';

const Comment = (props) => {
    const {id, name, email, body} = props;

    return (
        <div>
            <div>{id}</div>
            <div>{name}</div>
            <div>{email}</div>
            <div>Comment: {body}</div>
        </div>
    );
};

export default Comment;