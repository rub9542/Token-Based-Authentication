import React, { Component } from 'react';
import Input from '../Components/Input.js';
import Password from '../Components/Password.js';
import Login from '../Components/Login.js/index.js';


class SignIn extends Component{

    render(){
        return(
            <div>
                <div> user: <Input name={50}/></div>
                <div>password: <Password pwd={'abc'}/></div>
                <Login/>
                <SignUP/>
            </div>
            
        )

    }
}
export default SignIn;