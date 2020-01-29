import React, { Component } from 'react';

class Login extends Component{
    constructor(props){
        super(props);
        this.state={
            Button:this.props.buttonName

        }

    };

    render(){
        return(
            <div>
    <button >login{this.state.Button}</button>
    {/* <button>SignUp</button> */}
            </div>
        )
    }
}

export default Login;