import React, {useEffect, useState} from 'react';
import {Link, Outlet, useParams} from "react-router-dom";
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
            <Link to={id.toString()} state={'comments'}>{<button>Comments</button>}</Link>
            <Outlet/>
        </div>
    );
};

export default PostDetailsPage;