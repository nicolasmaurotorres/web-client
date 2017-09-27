import React from 'react';
import { FormGroup, ControlLabel, FormControl, Button, HelpBlock } from 'react-bootstrap'
import timezones from '../../data/timezones'
import map from 'lodash/map';
import PropTypes from 'prop-types';

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

    _onSubmit(event) {
        event.preventDefault();
        this.setState({ errors: {}, isLoading:true });
        this.props.userSignupRequest(this.state)
            .then(response => { this.setState({isLoading:false}) })
            .catch(errors => { this.setState({ errors: errors.response.data , isLoading : false}); });
    }

    render() {
        const { errors } = this.state;
        return (
            <form onSubmit={this._onSubmit}>
                <h1>Join our Market!</h1>
                <FormGroup controlId="formSignupUsername"
                    validationState={(errors.username) ? 'error' : null}>
                    <ControlLabel> Username </ControlLabel>
                    <FormControl type="text"
                        value={this.state.username}
                        placeholder="Enter Username"
                        name="username"
                        onChange={this._handleChange} />
                    {errors.username && <HelpBlock> {errors.username} </HelpBlock>}
                </FormGroup>
                <FormGroup controlId="formSignupEmail"
                    validationState={(errors.email) ? 'error' : null}>
                    <ControlLabel> Email </ControlLabel>
                    <FormControl type="text"
                        name="email"
                        value={this.props.email}
                        onChange={this._handleChange} />
                    {errors.email && <HelpBlock> {errors.email} </HelpBlock>}
                </FormGroup>
                <FormGroup controlId="formSignupPassword"
                    validationState={(errors.password) ? 'error' : null}>
                    <ControlLabel> Password </ControlLabel>
                    <FormControl type="password"
                        onChange={this._handleChange}
                        name="password"
                        value={this.state.password} />
                    {errors.password && <HelpBlock> {errors.password} </HelpBlock>}
                </FormGroup>
                <FormGroup controlId="formSignupPasswordConfirmation"
                     validationState={ (errors.password)? 'error': null}>
                    <ControlLabel> Password Confirmation </ControlLabel>
                    <FormControl type="password"
                        onChange={this._handleChange}
                        name="passwordConfirmation"
                        value={this.state.passwordConfirmation} />
                    {errors.passwordConfirmation && <HelpBlock> {errors.passwordConfirmation} </HelpBlock>}
                </FormGroup>
                <FormGroup controlId="formSignupTimezoneSelect"
                           validationState={ (errors.timezone)? 'error': null}>
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
    userSignupRequest: PropTypes.func.isRequired
}

export default SignupForm;