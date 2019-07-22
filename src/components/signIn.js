import React, { Component } from 'react';

import Input from './input';
import Button from './buttons/button';

class SignIn extends Component {
    state = { 
        form: {
            email: {
                id: 1,
                name: 'email',
                type: 'email',
                label: 'Email',
                validation: {
                    requred: {
                        cb: v => v.trim() === ""
                    }
                },
                fail: false,
                touch: false,
                value: ''
            },
            password: {
                id: 2,
                name: 'password',
                type: 'password',
                label: 'Password',
                validation: {
                    requred: {
                        cb: v => v.trim() === ""
                    },
                    minL: {
                        cb: v => v.trim().length < 6
                    }
                },
                fail: false,
                touch: false,
                value: ''
            }
        },
        validForm: false
     };

     componentDidMount(){
        this.loadJS("https://apis.google.com/js/platform.js?onload=init");
     }

     loadJS = src => {
		const body = window.document.getElementsByTagName("body")[0];
		const ref = body.getElementsByTagName("script")[0];

		const script = window.document.createElement("script");
		script.src = src;
		script.async = true;
		script.defer = true;
		script.onload = () => {
			window.gapi.load("auth2", () => {
				console.log("success");
			});
		};
		ref.parentNode.insertBefore(script, ref);
    };
    
    googleAuth = () => {
		const ga = window.gapi.auth2.init({
			client_id: '1018884941403-cd6ilegbhitova86k4i7k89eqldpatfj.apps.googleusercontent.com'
		});

		ga.signIn().then(info => {
			const { Zi } = info;
			fetch("http://subdomain.entony.fs.a-level.com.ua/api/auth/google", {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({ access_token: Zi.access_token })
			})
				.then(res => res.json())
				.then(res => console.log("res", res))
				.catch(err => console.log(err.response));
		});
    };
    
    instaAuth = () => {
        
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
        const { error } = this.props;
        
        return (
         <div className="auth__auth-box">
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
                    {error && <p className='auth__error-auth-text'>{error}</p>}
                     <div className="auth__control-box">
                         <Button className='auth__submit-btn'
                            disabled={!validForm}
                            type='submit'
                            text='Sign In'/>
                    </div>
                 </form>
                 <div className="auth__google-auth">
                    <Button 
                        type="button" 
                        text='Sign in with Google' 
                        onClick={this.googleAuth}/>
                </div>
             </div> 
         );
    }
}
 
export default SignIn;