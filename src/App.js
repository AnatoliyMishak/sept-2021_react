// import './App.css';

import Users from './Components/Users/Users'
import UsersDetails from './Components/UsersDetails/UsersDetails'
import Posts from './Components/Posts/Posts'
import css from './App.module.css'

function App() {
  return (
<div>
  <div className={css.wrap}>
    <Users/>
    <UsersDetails/>
  </div>
  <Posts/>
</div>
  );
}

export default App;
