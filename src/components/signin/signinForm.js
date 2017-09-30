import React from 'react';
import PropTypes from 'prop-types';
import { Button, FormGroup, Alert } from 'react-bootstrap';
import { connect } from 'react-redux';
import { signin } from '../../actions/authActions';


import  validateInput  from '../../validations/signinform';

import TextFieldGroup from '../../common/TextFieldGroup';

class SigninForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            identifier: '',
            password: '',
            errors: {},
            isLoading: false
        }

        this._onSubmit = this._onSubmit.bind(this);
        this._onChange = this._onChange.bind(this);
    }


    _isValid(){
        const {errors , isValid} = validateInput(this.state);
        if (!isValid){
            this.setState({errors});
        }
        return isValid;
    }


    _onSubmit(e) {
        e.preventDefault();
        if (this._isValid()){
            this.setState({errors : {}, isLoading: true});
            this.props.signin(this.state)
            .then(res => this.props.history.push('/'))
            .catch(err => {
                this.setState({errors:err.response.data.errors,isLoading:false});
            }); /*this.setState({errors: err.data.errors, isLoading:false})*/
        }
    }

    _onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        const { errors, identifier, password, isLoading } = this.state;
        return (
            <form onSubmit={this._onSubmit}>
                <h1> Sign in </h1>
                { errors.form &&  <Alert bsStyle = 'danger' onDismiss= {this._handleAlertDismiss} > {errors.form } </Alert> }
                <TextFieldGroup
                    field="identifier"
                    label="Username / Email"
                    value={identifier}
                    error={errors.identifier}
                    onChange={this._onChange} />

                <TextFieldGroup
                    field="password"
                    label="Password"
                    value={password}
                    error={errors.password}
                    onChange={this._onChange}
                    type="password" />
                <FormGroup>
                    <Button disabled={isLoading }
                        type='submit'
                        bsStyle='primary' >Sign in </Button>
                </FormGroup>

            </form>
        );
    }
}

SigninForm.propTypes = {
    history: PropTypes.object.isRequired,
    signin : PropTypes.func.isRequired
}

export default connect(null, { signin }) (SigninForm);