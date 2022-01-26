import React, {useEffect, useState} from 'react';
import {postService} from "../../Services/Post.service";
import Post from "../../Components/Post/Post";
import {Outlet} from "react-router-dom";
import css from './PostPage.module.css'

const PostsPage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postService.getAll().then(value => setPosts([...value]))
    }, [])

    return (
        <div className={css.postpage}>
            <div>
                <h1>Posts</h1>
                {posts.map(post => <Post key={post.id} post={post}/>)}
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export default PostsPage;