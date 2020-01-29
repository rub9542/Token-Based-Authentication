import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Password extends Component{
    constructor(props){
        super(props);
        this.state={
            password:''

        }
    };
    render(){
        return(
            <div>
                <input type='password' onChange={(event) => this.setState({password:event.target.value})} placeholder={this.props.pwd}/>

            </div>
        )
    }
}
Password.propTypes={
    pwd:PropTypes.string
};
export default Password;