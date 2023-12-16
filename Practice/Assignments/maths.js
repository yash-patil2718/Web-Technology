import React from "react";

export default class Myshuu extends React.Component{
    render(){
        let n1 = this.props.abj.num1;
        let n2 = this.props.abj.num2;
        let op = this.props.abj.operation;
        // console.log(n1)
        let result
        switch(op){
            case '+' : result=n1+n2; break;
            case '-' : result=n1-n2; break;
            case '*' : result=n1*n2; break;
            case '/' : result=n1/n2; break;
            default : result = NaN; break;
        }
        return(
           <p>{n1}{op}{n2} = {result}</p>
        )
    }
} 