import './App.css';
// import My from './Components/My'
//
// function App() {
//
//     let user = {name: 'Vasya', age: 18}
//     return (
//         <div>
// <My>
//     {user}
//     text
// </My>
//         </div>
//     );
// }
//
// export default App;

// import React from 'react';
// import {useState, useEffect} from 'react';
//
// const App = () => {
//
//     let [greeting, setGreeting] = useState('Hello');
//     const adder = () => {
//         setGreeting(greeting +'!')
//     }
//     return (
//         <div>
//             <button onClick={adder}>Click me</button>
//             {greeting}
//         </div>
//     );
// };
//
// export default App;

// import React from 'react';
// import Users from './Components/Users'
//
// const App = () => {
//     return (
//         <div>
//             <Users/>
//         </div>
//     );
// };
//
// export default App;

// import React from 'react';
// import Users from './Components/Users'
//
// const App = () => {
//     return (
//         <div>
//             <Users/>
//         </div>
//     );
// };
//
// export default App;

// import React from 'react';
//
// import {useState} from 'react'
//
// const App = () => {
// // let [name, setName] = useState('default');
// // let [age, setAge] = useState(1);
//
//     const [form, setForm] = useState({name:'', age:1})
//     const send = (e) =>{
//         e.preventDefault()
//         console.log(form);
//         }
//     //     const nameHandler =(e)=>{
//     //         e.preventDefault()
//     //         setName(e.target.value)
//     //         console.log(e.target.value);
//     //
//     // }
//     // const ageHandler =(e)=>{
//     //         e.preventDefault()
//     //     setAge(e.target.value)
//     //         console.log(e.target.value);
//     //
//     // }
//
//     const formHandler =(e)=>{
//         e.preventDefault()
//         console.log(e.target.value);
//         setForm({...form, [e.target.name]:e.target.value})
//     }
//     return (
//         <div>
//             <form onSubmit={send}>
//                 <div><label>Name: <input type="text" name={'name'} value={form.name} onChange={formHandler}/></label></div>
//                 <div><label>Age: <input type="number" name={'age'} value={form.age} onChange={formHandler}/></label></div>
//                 <button>Send</button>
//             </form>
//         </div>
//     );
// };
//
// export default App;

import React from 'react';

import {useState} from 'react'
import {createRef} from 'react'

const App = () => {

    const name = createRef()
    const age = createRef()

    const send = (e) =>{
        e.preventDefault()
        // console.log(name);
        console.log(name.current.value);
        console.log(age.current.value);
    }

    return (
        <div>
            <form onSubmit={send}>
                <div><label>Name: <input type="text" name={'name'} ref={name}/></label></div>
                <div><label>Age: <input type="number" name={'age'} ref={age}/></label></div>
                <button>Send</button>
            </form>
        </div>
    );
};

export default App;