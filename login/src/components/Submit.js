import React,{Component} from 'react';
import PropTypes from 'prop-types';
// import { Input } from 'antd';

class Submit extends Component{
    constructor(props){
        super(props);
        this.state={
            userData:[]
            
        }
    };

    addList(){
        this.setState({
            
        })
    }

    render(){
        return(
            <div>
                <button onClick={}>Submit</button>
            </div>
        )
    }
}
Submit.propTypes={
    pwd:PropTypes.string
};
export default Submit;