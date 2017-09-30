import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { userSignupRequest, isUserExists } from '../../actions/signupAction';
import SignupForm from './signupForm';
import { addFlashMessage } from '../../actions/flashMessages';

class SignupPage extends React.Component{
    render(){
        const { userSignupRequest, addFlashMessage, isUserExists } = this.props;
        return(
            <div className="row">
                <div className="col-md-4 col-md-offset-4">
                    <SignupForm userSignupRequest={ userSignupRequest } 
                                history={ this.props.history }
                                addFlashMessage={ addFlashMessage }
                                isUserExists = { isUserExists }
                                 />
                </div>    
            </div>
        );
    }
}

SignupPage.propTypes = {
    userSignupRequest: PropTypes.func.isRequired ,
    addFlashMessage: PropTypes.func.isRequired,
    isUserExists : PropTypes.func.isRequired
 }

export default connect(null, { userSignupRequest, addFlashMessage, isUserExists })(SignupPage);