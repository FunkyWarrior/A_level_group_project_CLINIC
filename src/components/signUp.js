import React, { Component } from 'react';

import Input from './input';
import Button from './buttons/button';

class SignUp extends Component {
    state = {
        form: {
            email: {
                id: 1,
                name: 'email',
                type: 'email',
                label: 'Email',
                validation: {
                    required: true
                },
                fail: false,
                touch: false,
                value: ''
            },
            firstName: {
                id: 2,
                name: 'firstName',
                type: 'text',
                label: 'First Name',
                validation: {
                    required: true
                },
                fail: false,
                touch: false,
                value: ''
            },
            lastName: {
                id: 3,
                name: 'lastName',
                type: 'text',
                label: 'Last Name',
                validation: {
                    required: true
                },
                fail: false,
                touch: false,
                value: ''
            },
            // phone: {
            //     id: 4,
            //     name: 'phone',
            //     type: 'phone',
            //     label: 'Phone',
            //     validation: {
            //         required: true
            //     },
            //     fail: false,
            //     touch: false,
            //     value: ''
            // },
            password: {
                id: 5,
                name: 'password',
                type: 'password',
                label: 'Password',
                validation: {
                    required: true,
                    minL: 6
                },
                fail: false,
                touch: false,
                value: ''
            },
            confirmPassword: {
                id: 6,
                name: 'confirmPassword',
                type: 'password',
                label: 'Confirm Password',
                validation: {
                    required: true,
                    minL: 6,
                    match: 'password'
                },
                fail: false,
                touch: false,
                value: ''
            }
        },
        validForm: false 
    }

    validator = (rules,value) => {
        const { required, minL } = rules;

        let valid = true;
        if(required){
            valid = value.trim() === '' && valid;
        }

        if(minL){
            valid = value.trim().length < minL && valid;
        }

        return valid
    };

    submit = e => {
        e.preventDefault();

        const values = Object.keys(this.state.form).reduce((prev,elem) => {
            return {...prev, [elem]: this.state.form[elem].value };
        }, {});

        this.props.submitHandler(values);
    };

    onChangeHandler = e => {
        const { name, value } = e.target;

        this.setState(prevState => {
            const values = Object.keys(prevState.form).reduce((prev, elem) => {
                if (elem === name) return prev.concat(value);
                return prev.concat(prevState.form[elem].value);
            },[]);

            return {
                ...prevState,
                form: {
                    ...prevState.form,
                    [name]: {
                        ...prevState.form[name],
                        value,
                        touch: true,
                        fail: this.validator(prevState.form[name].validation, value)
                    }
                },
                validForm: values.some(value => value)
            };
        });
    };

    render() { 
        const { form, validForm } = this.state;
        const { error, successRegister } = this.props;

        return ( 
            <div>
                <form onSubmit={this.submit} className="auth__auth-form">
                        {Object.keys(form).map(input_name => {
                            return (
                                <Input 
                                    key={form[input_name].id}
                                    id={form[input_name].id}
                                    value={form[input_name].value}
                                    name={form[input_name].name}
                                    type={form[input_name].type}
                                    fail={form[input_name].fail}
                                    touch={form[input_name].touch}
                                    label={form[input_name].label}
                                    onChange={this.onChangeHandler}
                                />
                          );
                     })}
                    {successRegister && <p className="auth_success-auth-text">{successRegister}</p>}
                    {error && <p className='auth__error-auth-text'>{error}</p>}
                     <div className="auth__control-box">
                         <Button className='auth__submit-btn'
                            disabled={!validForm}
                            type='submit'
                            text='Sign Up'/>
                    </div>
                 </form>
            </div> );
    }
}
 
export default SignUp;