import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";
import {postService} from "../../Services/Post.service";

const SinglePostPage = () => {
    const {id} = useParams();
    const [post, setPost] = useState(null);
    const {state} = useLocation();

    useEffect(()=>{
        if (state){
            setPost(state)
            return
        }

        postService.getById(id).then(value=>setPost({...value}))
    },[])

    return (
        <div>
            {post && (
                <div>
                    <div>Id:{post.id}</div>
                    <div>{post.title}</div>
                    <div>{post.body}</div>
                </div>
            )}
        </div>
    );
};

export default SinglePostPage;