import React from 'react';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap'
import timezones from '../../data/timezones'
import map from 'lodash/map';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this._getValidationStateUsername = this._getValidationStateUsername.bind(this);
        this._handleChange = this._handleChange.bind(this);
        this._onSubmit = this._onSubmit.bind(this);

        this.state = {
            username: "",
            email: '',
            password: '',
            passwordConfirmation: '',
            timezone: '',
            options: map(timezones,(key,val) => {
                return <option key={key} value={key}> {val} </option> ;
            })
        }
    }

    _getValidationStateUsername() {
        const length = this.state.username.length;
        if (length > 4)
            return 'success';
        return 'error';
    }


    _handleChange(event) {
        event.preventDefault();
        this.setState({ [event.target.name]: event.target.value });
    }

    _onSubmit(event) {
        event.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <form onSubmit={this._onSubmit }>
                <h1>Join our Market!</h1>
                <FormGroup controlId="formUserName" validationState={this._getValidationStateUsername()}>
                    <ControlLabel> Username </ControlLabel>
                    <FormControl type="text"
                        value={this.state.username}
                        placeholder="Enter Username"
                        name="username"
                        onChange={this._handleChange} />
                </FormGroup>
                <FormGroup>
                    <ControlLabel> Email </ControlLabel>
                    <FormControl type="text"
                        name="email"
                        value={this.props.email}
                        onChange={this._handleChange} />
                </FormGroup>
                <FormGroup>
                    <ControlLabel> Password </ControlLabel>
                    <FormControl type="password"
                        onChange={this._handleChange}
                        name="password"
                        value={this.state.password} />
                </FormGroup>
                <FormGroup>
                    <ControlLabel> Password Confirmation </ControlLabel>
                    <FormControl type="passwordConfirmation"
                        onChange={this._handleChange}
                        name="passwordConfirmation"
                        value={this.state.passwordConfirmation} />
                </FormGroup>
                <FormGroup controlId="formControlsSelect">
                    <ControlLabel> Timezone </ControlLabel>
                    <FormControl componentClass="select" 
                                 placeholder="Choose your timezone" 
                                 name="timezone"
                                 value = {this.state.timezone}
                                 onChange={ this._handleChange }>
                       {this.state.options}
                    </FormControl>
                </FormGroup>
                <FormGroup>
                    <Button>Sign Up </Button>
                </FormGroup>
            </form>
        );
    }
}

export default SignupForm;