import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App2 from './App2';
//import Learning from './learning.js'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// function Person(props){
//     return(
//     <div className='person'>
//      <h1>{props.name}</h1>
//      <h2>{props.age}</h2>
//      </div>
//     );
//     }
//     var Details=(
// <div>
// <Person name='Joely' age='22'/>
// <Person name='Raghul' age='21'/>
// </div>
//     );
//     ReactDOM.render(Details,document.getElementById('root'));
//     ReactDOM.render(,document.getElementById('root1'));
ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
