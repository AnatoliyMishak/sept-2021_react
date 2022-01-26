import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {postService} from "../../Services/Post.service";
import Comment from "../../Components/Comment/Comment";

const PostCommentsPage = () => {
    const {id} = useParams();
    const [comments, setComments] = useState([]);

    useEffect(() => {
        postService.getByComments(id).then(value => setComments([...value]))
    }, [id])


    return (
        <div>
            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export default PostCommentsPage;