import React from "react"
import "./css/basic.css"
export default class Hello extends React.Component{
    render(props){
        return(
            <>
            <div className="basic">
                <h1>Welcome to this page</h1>
                <p style={{backgroundColor:'Orange', width:'fit-content', alignItems:'center'}}>Contact us on above link</p>
            </div>
            </>
        )
    }
}
