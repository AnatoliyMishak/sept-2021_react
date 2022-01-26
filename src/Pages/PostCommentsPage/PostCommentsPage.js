import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {postService} from "../../Services/Post.service";

const PostCommentsPage = () => {
    const {id} = useParams();
    const [comments, setComments] = useState([]);

    useEffect(()=>{
        postService.getByComments(id).then(value => setComments([...value]))
    },[id])

    return (
        <div>
            {comments.map(comment=> <PostCommentsPage key={comments.id}/>)}
        </div>
    );
};

export default PostCommentsPage;