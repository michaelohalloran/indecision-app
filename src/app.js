import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import './styles/styles.scss';
import 'normalize.css/normalize.css';

// const User = (props)=> {
//     return (
//         <div>
//             <p>Name: {props.name}</p>
//             <p>Age: {props.age}</p>
//         </div>
//     );
// };

ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));



// //////////////////////////////////////
// class OldSyntax {
//     constructor() {
//         this.name = 'Bob';
//         this.getGreeting = this.getGreeting.bind(this);
//     }
//     getGreeting() {
//         return `Hi, I'm ${this.name}`;
//     }
// }

// const oldSyntax = new OldSyntax();
// const getGreeting = oldSyntax.getGreeting();

// console.log(getGreeting);

// //////////////////////////////////////
// class NewSyntax {
//     name = 'Jim';
//     getGreeting = ()=> {
//         return `Hi my name is ${this.name}`;
//     }
// }

// const newSyntax = new NewSyntax();
// const newGreeting = newSyntax.getGreeting;
// console.log(newGreeting());








