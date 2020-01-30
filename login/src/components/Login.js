import React, { Component } from "react";
import {connect} from 'react-redux';
import * as action from '../store/actions/action';




class Login extends Component{
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:''
        }
    }
    render(){
        return(
            <div className='Login'>
            <div className='Login-content'>
                Username: <br></br><input type='text' onChange={(event)=> this.setState({username:event.target.value})} /><br></br>
                password:<br></br> <input type='password'onChange={(event)=> this.setState({password:event.target.value})}/><br></br>  
                <button className='button' onClick={()=>this.props.onAuth(this.state.username,this.state.password)}>Login</button>
                 <p>{this.props.token}</p>
            </div></div>
        )
    }
}

const mapToState =state=>{
    return{
        token:state.token,
        error:state.error
        
    }
}

const mapToDispatch =dispatch =>
{
    return {
        onAuth:(username,password) => dispatch (action.authLogin(username,password))

       }
}

export default connect(mapToState,mapToDispatch)(Login) ;