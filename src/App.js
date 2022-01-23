import css from './App.module.css'

import {Routes, Route, Link} from 'react-router-dom'
import HomePage from "./Pages/HomePage/HomePage";
import UsersPage from "./Pages/UsersPage/UsersPage";
import PostsPage from "./Pages/PostsPage/PostsPage";
import AboutPage from "./Pages/AboutPage/AboutPage";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";
import Layout from "./Components/Layout/Layout";

function App() {
    return (
        <div>

            <Routes>
                <Route path={'/'} element={<Layout/>}>

                    <Route path={'/'} element={<HomePage/>}/>
                    <Route path={'/users'} element={<UsersPage/>}/>
                    <Route path={'/posts'} element={<PostsPage/>}/>
                    <Route path={'/about'} element={<AboutPage/>}/>
                    <Route path={'*'} element={<NotFoundPage/>}/>

                </Route>
            </Routes>
        </div>
    )
        ;
}

export default App;
