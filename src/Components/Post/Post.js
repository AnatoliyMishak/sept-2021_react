import React from 'react';

import css from './Post.module.css'

const Post = ({post:{id, title, body}}) => {
    return (
        <div className={css.wrap}>
            <div className={css.id}>Id: {id}</div>
            <div>Title: {title}</div>
            <div>Body: {body}</div>
        </div>
    );
};

export default Post;