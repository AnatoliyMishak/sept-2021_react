import './App.css';
import Users from './Components/Users/Users'
import Posts from './Components/Posts/Posts'
import Comments from './Components/Comments/Comments'

function App() {
    return (
        <div>
            <div className={'posts'}>
                <div className={'target'}>
                    <Users/>
                </div>
                <div className={'target'}>
                    <Posts/>
                </div>

            </div>
            <div className={'comments'}>
                <Comments/>
            </div>

        </div>

    );
}

export default App;
