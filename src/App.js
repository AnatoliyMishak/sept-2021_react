import Users from "./Components/Users/Users";
import UserDetails from "./Components/UserDetails/UserDetails";
import Posts from "./Components/Posts/Posts";

import css from './App.module.css'

function App() {
    return (
        <div>
            <div className={css.wrap}>
                <Users/>
                <UserDetails/>
            </div>
            <Posts/>
        </div>
    );
}

export default App;
