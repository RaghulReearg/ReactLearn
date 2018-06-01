import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Learn from './learning';

class App extends Component {
  state={
    person:[
      {name:"joe",
    age:"34"},
    {name:"thio",
    age:"32"},
    {name:"john",
    age:"33"},
    ]
  }
  switchstateHandler=()=>{
   this.setState({
    person:[
      {name:"joeSnow",
    age:"34"},
    {name:"thio john",
    age:"33"},
    {name:"john",
    age:"33"},
    ]
   })

   
  }
  render() {
    return(
   <div className='App'>
   <button onClick={this.switchstateHandler}>Swittch </button>
   <h1>Hi iam a React App {Math.floor(Math.random()*30)}</h1>
   <Learn name={this.state.person[1].name} age={this.state.person[1].age}/>
   <Learn name="smith" age="43">This is for children </Learn>
   <Learn name="joe" age="25"/>
   
   </div>
    )
  }
}

export default App;
