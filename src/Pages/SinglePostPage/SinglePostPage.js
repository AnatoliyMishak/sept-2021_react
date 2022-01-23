import React, {useEffect, useState} from 'react';
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {postService} from "../../Services/Post.service";

const SinglePostPage = () => {
    const {id} = useParams();
    const [post, setPost] = useState(null);
    const {state} = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (state) {
            setPost(state)
            return
        }

        postService.getById(id).then(value => setPost({...value}))
    }, [])

    const toHome = () => {
        navigate('/')
    }
    const back = () => {
        navigate(-1)
    }
    return (
        <div>
            <button onClick={toHome}>Home</button>
            <button onClick={back}>Back</button>
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

export {SinglePostPage};