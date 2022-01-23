import css from './App.module.css'

import {Routes, Route, Link, Navigate} from 'react-router-dom'
import HomePage from "./Pages/HomePage/HomePage";
import UsersPage from "./Pages/UsersPage/UsersPage";
import PostsPage from "./Pages/PostsPage/PostsPage";
import AboutPage from "./Pages/AboutPage/AboutPage";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";
import Layout from "./Components/Layout/Layout";
import SinglePostPage from "./Pages/SinglePostPage/SinglePostPage";

function App() {
    return (
        <div>

            <Routes>
                <Route path={'/'} element={<Layout/>}>

                    <Route index element={<HomePage/>}/>
                    <Route path={'users'} element={<UsersPage/>}/>
                    <Route path={'posts'} element={<PostsPage/>}>
                        <Route path={':id'} element={<SinglePostPage/>}/>
                    </Route>
                    <Route path={'about'} element={<AboutPage/>}/>
                    <Route path={'about-us'} element={<Navigate to={'/about'}/>}/>
                    <Route path={'*'} element={<NotFoundPage/>}/>

                </Route>
            </Routes>
        </div>
    )
        ;
}

export default App;
