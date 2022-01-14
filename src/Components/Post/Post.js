import React from 'react';

const Post = (props) => {
    const {id, title, body} = props;

    return (
        <div>
            <div>{id}</div>
            <div>Title: {title}</div>
            <div>Post: {body}</div>
        </div>
    );
};

export default Post;