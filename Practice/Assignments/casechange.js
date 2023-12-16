import React from "react"

export default class CaseChange extends React.Component{

    constructor(){
        super();
        this.state={ori:"", rev:"",str:""}
    }
    revHandler=(event)=>{
        let isChecked = event.target.checked;
        if(isChecked){
            let s = this.state.ori;
            let rev = "";
            for(let i= s.length-1;i>=0;i--){
                rev+=s.charAt(i);
            }
            this.setState({str:rev,rev:rev})
        }
        else{
            this.setState({rev:this.state.ori})
        }
    }

    radioHandler=(event)=>{
        switch(event.target.id){
            case "radio1":{
                let s = this.state.str;
                let s1 = s.toUpperCase();
                this.setState({str:s1});
                break;
            }

            case "radio2":{
                let s = this.state.str;
                let s1 = s.toLowerCase();
                this.setState({str:s1});
                break;
            }

            case "radio3":{
                let s = this.state.str;
                let s1 = s.charAt(0).toUpperCase() + s.substring(1,s.length).toLowerCase();
                this.setState({str:s1});
                break;
            }
            default:
                break;
        }
    }
    render(){
        return(
            <div>
            <input type="text"
            onBlur={(event)=>{
                this.setState({ori:event.target.value, str:event.target.value})
                }}/><br></br>
            reverse<input type="checkbox" name="check" onClick={this.revHandler}/><br></br>
            UpperCase<input type="radio" name="radio" id="radio1" onClick={this.radioHandler}/><br></br>
            LowerCase<input type="radio" name="radio" id="radio2" onClick={this.radioHandler}/><br></br>
            TitleCase<input type="radio" name="radio" id="radio3" onClick={this.radioHandler}/><br></br>
            <p>Output : {this.state.str}</p>;
            </div>
        )
    }
}