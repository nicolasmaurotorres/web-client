import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'react-bootstrap';

class FlashMessage extends React.Component {
    constructor(props){
        super(props);
        this._handleAlertDismiss = this._handleAlertDismiss.bind(this);
    }

    _handleAlertDismiss(){
        this.props.deleteFlashMessage(this.props.message.id);
    }

    render() {
        const {  type, text } = this.props.message;
        return (
            <Alert bsStyle = {(type === 'success')? 'success' : 'danger'}
            onDismiss={this._handleAlertDismiss} > {text} </Alert>
        );
    }
}


FlashMessage.propTypes = {
    message : PropTypes.object.isRequired,
    deleteFlashMessage: PropTypes.func.isRequired
}

export default FlashMessage;