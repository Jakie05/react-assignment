
import { Component } from 'react'
import './App.css';
import {FunComp,ClassComp} from './new'

 
class App extends Component {
  state = {
    funcState: false,
    classState: false,
  }
  render() {
    return (
      <div className="App" >
        <h1 class="mainHeading">Styling Using function and Class Component </h1>
        <button className='btn1' onClick={()=>{if(this.state.funcState){this.setState({funcState : false})}else{this.setState({funcState : true})}}}>To see styling in Function component</button>
        <button className='btn2' onClick={()=>{if(this.state.classState){this.setState({classState : false})}else{this.setState({classState : true})}}}> To see styling in Class Function</button>
        <div className="cfComp">
         <div style={{visibility:this.state.funcState ? "visible":"hidden"}}>
            <FunComp />
          </div>
           <div style={{visibility:this.state.classState ? "visible":"hidden"}}>
            <ClassComp/>
        </div>
        </div>
        </div>
        )
        
  }
}


export default App;
