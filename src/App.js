import css from './App.module.css'

import {Routes, Route, Link, Navigate} from 'react-router-dom'
import Layout from "./Components/Layout/Layout";
import RequireAuth from "./Hoc/RequireAuth";
import AuthProvider from "./Hoc/AuthProvider";

import {AboutPage, HomePage, LoginPage, NotFoundPage, PostsPage, SinglePostPage, UsersPage} from "./Pages";

function App() {
    return (
        <AuthProvider>

            <Routes>
                <Route path={'/'} element={<Layout/>}>

                    <Route index element={<HomePage/>}/>
                    <Route path={'users'} element={
                        <RequireAuth>
                            <UsersPage/>
                        </RequireAuth>
                    }/>
                    <Route path={'posts'} element={<PostsPage/>}>
                        <Route path={':id'} element={<SinglePostPage/>}/>
                    </Route>
                    <Route path={'about'} element={<AboutPage/>}/>
                    <Route path={'about-us'} element={<Navigate to={'/about'}/>}/>
                    <Route path={'login'} element={<LoginPage/>}/>
                    <Route path={'*'} element={<NotFoundPage/>}/>

                </Route>
            </Routes>
        </AuthProvider>
    )
        ;
}

export default App;
