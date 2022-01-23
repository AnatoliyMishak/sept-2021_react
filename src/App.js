import Users from "./Components/Users/Users";
import UserDetails from "./Components/UserDetails/UserDetails";
import Posts from "./Components/Posts/Posts";

import css from './App.module.css'
import {useState} from "react";

function App() {
    const [user, setUser] = useState('');

    const getUser = (user) => {
        setUser(user)
    }

    return (
        <div>
            <div className={css.wrap}>
                <Users getUser={getUser}/>
                <UserDetails user={user}/>
            </div>
            <Posts/>
        </div>
    );
}

export default App;
