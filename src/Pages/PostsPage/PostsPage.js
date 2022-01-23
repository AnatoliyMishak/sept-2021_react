import React, {useEffect, useState} from 'react';
import {postService} from "../../Services/Post.service";
import Post from "../../Components/Post/Post";
import {Outlet} from "react-router-dom";
import css from './PostsPage.module.css'

const PostsPage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postService.getAll().then(value => setPosts([...value]))
    }, [])

    return (
        <div>
            <h1>Posts</h1>
            <div className={css.target}>
                <div className={css.post}>
                    {posts.map(post => <Post key={post.id} post={post}/>)}
                </div>
                <div className={css.outlet}>
                    <Outlet/>
                </div>
            </div>
        </div>
    );
};

export default PostsPage;