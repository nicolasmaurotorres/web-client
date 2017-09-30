import React from 'react';
import SigninForm from './signinForm';

class SigninPage extends React.Component{
    render(){
        return(
            <div className="row">
                <div className="col-md-4 col-md-offset-4">
                    <SigninForm history={ this.props.history } />
                </div>    
            </div>
        );
    }
}

export default  SigninPage;