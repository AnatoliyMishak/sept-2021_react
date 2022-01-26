import React, {useEffect, useState} from 'react';
import {Outlet, useParams} from "react-router-dom";
import {postService} from "../../Services/Post.service";

const PostDetailsPage = () => {
    const {id} = useParams();

    const [post, setPost] = useState(null);
    const [comments, setComments] = useState([]);

    useEffect(()=>{
        postService.getById(id).then(value => setPost({...value}))
    },[id])

    const getCommentsId = (id) => {
      postService.getByComments(id).then(value => setComments([...value]))
        setComments(comments)
    }

    return (
        <div>
            {post && (
                <div>{post.body}</div>
            )}
            <button onClick={()=>getCommentsId(id)}>Comments</button>
            <Outlet/>
        </div>
    );
};

export default PostDetailsPage;