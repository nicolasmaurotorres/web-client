import React from 'react';
import { Button, FormGroup } from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import TextFieldGroup from  '../../common/TextFieldGroup';
import { createEvent } from '../../actions/eventActions';


class EventForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            errors: {},
            isLoading: false
        };

        this._onSubmit = this._onSubmit.bind(this);
        this._onChange = this._onChange.bind(this);
    }

    _onSubmit(e) {
        e.preventDefault();
        this.props.createEvent(this.state)
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err)
        });
    }

    _onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        const { title, errors, isLoading } = this.state;
        return (
            <form onSubmit={this._onSubmit}>
                <h1> Create a New Game Event</h1>
                <TextFieldGroup
                    field="title"
                    label="Event Title"
                    value={title}
                    error={errors.title}
                    onChange={this._onChange} />

                <FormGroup>
                    <Button disabled={ isLoading }
                        type='submit'
                        bsStyle='primary'> Create </Button>
                </FormGroup>
            </form>
        );
    }
}

EventForm.propTypes = {
    createEvent: PropTypes.func.isRequired,
}

export default connect(null, { createEvent })(EventForm);