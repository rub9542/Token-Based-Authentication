import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as action from '../store/actions/action';

class Signup extends Component{
    constructor(props){
        super(props);
        this.state={
            username:'',
            email:'',
            password1:'',
            password2:''
        }
    }
    render(){
        return(
            <div className='signup'>
                <div className='signup-content'>
                    UserName: <br></br><input type="text" onChange={(event)=>this.setState({username:event.target.value})}/><br></br>
                    Email:<br></br> <input type="text" onChange={(event)=>this.setState({email:event.target.value})}/><br></br>
                    Password :<br></br> <input type="password" onChange={(event)=>this.setState({password1:event.target.value})}/><br></br>
                    Confirm Password:<br></br> <input type="password" onChange={(event)=>this.setState({password2:event.target.value})}/><br></br>
                    <button onClick={()=> this.props.onAuth(this.state.username,this.state.email,this.state.password1,this.state.password2,)}>Submit</button>
                    <p>{this.props.token}</p>
                </div>
            </div>
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
        onAuth:(username,email,password1,password2) => dispatch (action.authSignup(username,email,password1,password2))

       }
}

export default connect(mapToState,mapToDispatch)(Signup) ;

