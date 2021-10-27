import { Component } from "react";
import './App.css';


export function FunComp() {
    return (
        <div className="mainFunComp">
            <h1 className="funcHeading">This is created using functional Component</h1>
            <p className="funcPara"> This is done using external CSS</p>
            <p className="funcPara" style={{ color: "blue" }}>This is done using inline CSS</p>
        </div>
    )
}

export class ClassComp extends Component{
    render() {
        return (
            <div className="mainClasscomp">
           <h1 className="classHeading">This is created using Class Component</h1>
            <p className="classPara"> This is done using external CSS</p>
            <p className="classPara" style={{ color: "blue" }}>This is done using inline CSS</p>
           </div>
       )
   }
}