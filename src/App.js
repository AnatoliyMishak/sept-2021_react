import css from './App.module.css'

import {Routes, Route, Link} from 'react-router-dom'
import UsersPage from "./Pages/UsersPage/UsersPage";
import PostsPage from "./Pages/PostsPage/PostsPage";
import Layout from "./Components/Layout/Layout";
import UserDetailsPage from "./Pages/UserDetailsPage/UserDetailsPage";
import UserPostsPage from "./Pages/UserPostsPage/UserPostsPage";
import PostDetailsPage from "./Pages/PostDetailsPage/PostDetailsPage";
import PostCommentsPage from "./Pages/PostCommentsPage/PostCommentsPage";

function App() {
    return (
        <div>

            <Routes>
                <Route path={'/'} element={<Layout/>}>

                    <Route path={'users'} element={<UsersPage/>}>
                        <Route path={':id'} element={<UserDetailsPage/>}>
                            <Route path={'posts'} element={<UserPostsPage/>}/>
                        </Route>
                    </Route>
                    <Route path={'posts'} element={<PostsPage/>}>
                        <Route path={':id'} element={<PostDetailsPage/>}>
                            <Route path={'comments'} element={<PostCommentsPage/>}/>
                        </Route>
                    </Route>
                </Route>

            </Routes>
        </div>
)
;
}

export default App;
