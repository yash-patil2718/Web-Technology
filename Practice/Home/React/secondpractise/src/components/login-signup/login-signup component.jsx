import React from "react"
import './login-signup.css'



const LoginSignup=()=>{
    return(
        <div className='container'>
            <div className='header'>
                <div className="text">Sign Up</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                <div className="input">
                    <img src="secondpractise\src\components\assets\person.png" alt=""/>
                    <input type="text"/>
                </div>
                <div className="input">
                    <img src="secondpractise\src\components\assets\email.png" alt=""/>
                    <input type="email"/>
                </div>
                <div className="input">
                    <img src="secondpractise\src\components\assets\password.png" alt=""/>
                    <input type="password"/>
                </div>
            </div>
            <div className="forgot-password">Lost Password? <span>Save here</span></div>
             <div className="submit-container">
                <div className="submit">Sign Up</div>
                <div className="submit">Login</div>
             </div>
        </div>
    )
}

export default LoginSignup