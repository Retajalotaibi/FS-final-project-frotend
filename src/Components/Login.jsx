import React from 'react';
import { NavLink } from "react-router-dom";
import axios from "axios"
import {setCookie} from "../helper"
class Login extends React.Component{
   
        constructor(props){
            super(props)
            this.state={
               
                email:'',
                password:'',
               
            }
    
        }
       handleChange = (event)=> {
           this.setState({
          [event.target.name]: event.target.value
           })  
       }
    render(){
        return (
            <>
            <section>
<form  method="POST" id="REGform">
<legend>
   
    <div className="container"> 
    <div className="sign-up">
        <h1>Log in</h1>
    </div>
   
    <div  className="input__div">
        <h2>Email</h2>
        <input type="email" placeholder="Enter your Email"   id="email"name="email" onChange={this.handleChange}></input>
    </div>
    <div  className="input__div">
        <h2>Password</h2>
        <input type="password" placeholder="Enter your Password"
        
        id="password" name="password" onChange={this.handleChange}></input>
       <NavLink exact to="/register">
        <p>Don't have an Account?</p>
        </NavLink>
    </div>
    <div onClick={this.LogingIn} className="submit-btn">log in <div className="submit-cube-login"></div></div>
    </div>
    <div className="pink-cube"></div>
</legend>

</form>

</section>

            </>
        )

       
    } 
      LogingIn = (e)  => {
let request ={
email: this.state.email,
password: this.state.password
}
axios.post("http://localhost:4000/login", {body:request}  ).then(resp => resp.data.message)
.then( response => 
    setCookie('access_token', response.token, 14)
 ).catch(err => console.log(err))
console.log(JSON.stringify(request))

}

}



export default Login