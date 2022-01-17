// import './App.css';

import Users from './Components/Users/Users'
import UsersDetails from './Components/UsersDetails/UsersDetails'
import Posts from './Components/Posts/Posts'
import css from './App.module.css'

import {useState} from "react";
import {postService} from "./Services/Post.service";

function App() {

    const [user, setUser] = useState(null);
    let [posts, setPosts] = useState([]);

    const getUser = (user) => {
        setUser(user)
        setPosts([])
    }
    const getUserId = (Id) => {
        postService.getByUserId(Id).then(value => setPosts([...value]))
    }

    return (
        <div>
            <div className={css.wrap}>
                <Users getUser={getUser}/>
                {user && <UsersDetails user={user} getUserId={getUserId}/>}
            </div>
            {!!posts.length && <Posts posts={posts}/>}
        </div>
    );
}

export default App;
