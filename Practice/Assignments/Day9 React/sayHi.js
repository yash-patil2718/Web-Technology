import { useState } from "react"
import './css/basic.css'


export default function SayHii(){

    let[msg,setmsg] = useState("")
    
    function handler(){
        setmsg("You are in Safe Hands")
    }

    function handler2(){
        setmsg("You are in Danger")
    }
    return(
        <div className="basic">
        <input type="button"
        value="fdg"
        onClick={handler}
        />&nbsp;&nbsp;
        <input type="button"
        value="jhg"
        onClick={handler2}
        />
        <p className="para">{msg}</p>
        </div>
    )
}