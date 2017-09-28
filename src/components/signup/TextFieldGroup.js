import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';

class TextFieldGroup extends React.Component {
    render(){
        return(
            <FormGroup controlId={this.props.controlId}
                       validationState={(this.props.error) ? 'error' : null}>
                <ControlLabel> {this.props.label} </ControlLabel>
                <FormControl type={this.props.type}
                             value={this.props.value}
                             placeholder={this.props.placeholder}
                             name={this.props.field}
                             onChange={this.props.onChange} 
                             />
                {this.props.error && <HelpBlock> {this.props.error} </HelpBlock>}
        </FormGroup>
        );
    }
}

TextFieldGroup.PropTypes = {
    controlId: PropTypes.string.isRequired,
    error: PropTypes.string,
    label:PropTypes.string.isRequired,
    type:PropTypes.string.isRequired,
    placeholder:PropTypes.string.isRequired,
    field: PropTypes.string.isRequired,
    onChange:PropTypes.func.isRequired
}

TextFieldGroup.defaultProps ={
    type : 'text'
}



export default TextFieldGroup;