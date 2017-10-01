import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { addFlashMessage } from '../actions/flashMessages';

export default function(ComposedComponent) {
    class Authenticate extends React.Component {
        componentWillMount(){
            if (!this.props.isAuthenticated){
                this.props.addFlashMessage({
                    type: 'danger',
                    text: 'you need to bee logued'
                });
                this.props.history.push('/signin');
            }
        }

        componentWillUpdate(nextProps){
            if (!nextProps.isAuthenticated){
                this.props.history.push('/');
            }
        }

        render() {
            return (
                <ComposedComponent {...this.props} />
            );
        }
    }

    Authenticate.propTypes = {
        isAuthenticated : PropTypes.bool.isRequired,
        addFlashMessage : PropTypes.func.isRequired
    }

    function mapStateToProps(state){
        return {
            isAuthenticated : state.auth.isAuthenticated
        }
    }

    return connect(mapStateToProps, { addFlashMessage })(Authenticate);
}
