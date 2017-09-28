import React from 'react';
import { FormGroup, ControlLabel, FormControl, Button, HelpBlock } from 'react-bootstrap'
import timezones from '../../data/timezones'
import map from 'lodash/map';
import PropTypes from 'prop-types';
import validateInput from '../../validations/signupform.js';
import TextFieldGroup from './TextFieldGroup';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this._handleChange = this._handleChange.bind(this);
        this._onSubmit = this._onSubmit.bind(this);

        this.state = {
            username: '',
            email: '',
            password: '',
            passwordConfirmation: '',
            timezone: '',
            errors: {},
            isLoading: false
        }

        this.options = map(timezones, (key, val) => {
            return <option key={key} value={key}> {val} </option>;
        })
    }

    _handleChange(event) {
        event.preventDefault();
        this.setState({ [event.target.name]: event.target.value });
    }

    isValid() {
        const { errors, isValid } = validateInput(this.state);

        if (!isValid) {
            this.setState({ errors });
        }

        return isValid;
    }


    _onSubmit(event) {
        event.preventDefault();
        if (this.isValid()) {
            this.setState({ errors: {}, isLoading: true });
            this.props.userSignupRequest(this.state)
                .then(response => {
                    this.setState({ isLoading: false });
                    this.props.addFlashMessage({
                        type:'success',
                        text:'you have signed up sucefully, Welcome!'
                    });
                    this.props.history.push('/'); //redireccionar hacia /
                })
                .catch(errors => {
                    this.setState({ errors: errors.response.data, isLoading: false });
                });
        }
    }

    render() {
        const { errors } = this.state;
        return (
            <form onSubmit={this._onSubmit}>
                <h1>Join our Market!</h1>
                <TextFieldGroup
                    controlId="usernameTextFieldGroup"
                    label="Username"
                    field="username"
                    onChange={this._handleChange}
                    value={this.state.username}
                    error={errors.username}
                    placeholder="Username" />

                <TextFieldGroup
                    controlId="emailTextFieldGroup"
                    label="Email"
                    field="email"
                    onChange={this._handleChange}
                    value={this.props.email}
                    error={errors.email}
                    placeholder="someemail@gmail.com" />

                <TextFieldGroup
                    controlId="passwordTextFieldGroup"
                    label="Password"
                    field="password"
                    type="password"
                    onChange={this._handleChange}
                    value={this.props.password}
                    error={errors.password}
                    placeholder="********" />

                <TextFieldGroup
                    controlId="passwordConfirmationTextFieldGroup"
                    label="Repeat password"
                    field="passwordConfirmation"
                    type="password"
                    onChange={this._handleChange}
                    value={this.props.passwordConfirmation}
                    error={errors.passwordConfirmation}
                    placeholder="********" />

                <FormGroup controlId="formSignupTimezoneSelect"
                    validationState={(errors.timezone) ? 'error' : null}>
                    <ControlLabel> Timezone </ControlLabel>
                    <FormControl componentClass="select"
                        placeholder="Choose your timezone"
                        name="timezone"
                        value={this.state.timezone}
                        onChange={this._handleChange}>
                        {this.options}
                    </FormControl>
                    {errors.timezone && <HelpBlock> {errors.timezone} </HelpBlock>}
                </FormGroup>
                <FormGroup>
                    <Button disabled={this.state.isLoading}
                        type='submit'
                        bsStyle='primary' >Sign Up </Button>
                </FormGroup>
            </form>
        );
    }
}

SignupForm.propTypes = {
    userSignupRequest: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    addFlashMessage:PropTypes.func.isRequired
}

export default SignupForm;