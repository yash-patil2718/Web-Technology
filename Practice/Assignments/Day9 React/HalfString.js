import React from "react";

export default class HalfString extends React.Component{
    constructor(){
        super();
        this.state={half:"not yet compiled"}
    }

    handler=(event)=>{
        console.log(event);
        console.log(event.target)
        console.log(event.target.value)
        let s = event.target.value;
        let shalf = s.substring(0,s.length/2).toUpperCase();
        this.setState({half:shalf});
        
    }
    render(){
        return(
            <>
            <input type="text"
            onBlur={this.handler}/>
            <p>Half String : {this.state.half}</p>
            </>
        )
    }
}