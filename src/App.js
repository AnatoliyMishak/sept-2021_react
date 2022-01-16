// import './App.css';

import Users from './Components/Users/Users'
import UsersDetails from './Components/UsersDetails/UsersDetails'
import Posts from './Components/Posts/Posts'
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
                <UsersDetails user={user}/>
            </div>
            <Posts/>
        </div>
    );
}

export default App;
