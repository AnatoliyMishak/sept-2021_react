import React, {useEffect, useState} from 'react';
import {Outlet, useParams} from "react-router-dom";
import {postService} from "../../Services/Post.service";

const PostDetailsPage = () => {
    const {id} = useParams();

    const [post, setPost] = useState(null);

    useEffect(()=>{
        postService.getById(id).then(value => setPost({...value}))
    },[id])

    return (
        <div>
            {post && (
                <div>{post.body}</div>
            )}
            <button>Comments</button>
            <Outlet/>
        </div>
    );
};

export default PostDetailsPage;