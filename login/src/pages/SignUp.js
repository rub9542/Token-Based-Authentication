import React, { Component } from 'react';




class SignUp extends Component{

    render(){
        return(
            <div>
                <div> name: <Input name={50}/></div>
                <div>password: <Password pwd={'abc'}/></div>
                <Button/>
                
            </div>
            
        )

    }
}
export default SignUp;