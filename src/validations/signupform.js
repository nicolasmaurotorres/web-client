import validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default function validateInput(data){
    let errors = {};
   
    if (validator.isEmpty(data.username)){
      errors.username = 'this field is required';
    }
  
    if (validator.isEmpty(data.email)){
      errors.email = 'this field is required';
    }
  
    if (!validator.isEmail(data.email)){
      errors.email = 'email is invalid';
    }
  
    if (validator.isEmpty(data.password)){
      errors.password = 'this field is required';
    }
  
    if (validator.isEmpty(data.passwordConfirmation)){
      errors.passwordConfirmation = 'this field is required';
    }
  
    if (validator.isEmpty(data.timezone)){
      errors.timezone = 'this field is required';
    }
  
    if(!validator.equals(data.password,data.passwordConfirmation)){
      errors.passwordConfirmation = 'passwords must match';
    }
  
    return {
      errors,
      isValid: isEmpty(errors)
    }
  }