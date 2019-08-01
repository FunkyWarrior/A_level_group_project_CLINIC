import React, { Component } from "react";
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { auth, register } from '../actions/auth';

import {SignUpForm} from '../components/signUp';
import {SignInForm} from '../components/signIn';
import Loader from '../components/loader';

class Auth extends Component {
  state = { auth: true };

  toggleAuth = () => this.setState(prevState => ({ auth: !prevState.auth}));

  render() {
    const { auth } = this.state;
    const { user } = this.props
    console.log('userProps',this.props.user)
    
    if(Object.keys(user).length !== 0 && user.role === "User") {
      return <Redirect to="/user" />
      }

      if(Object.keys(user).length !== 0 && user.role === "Doctor") {
        return <Redirect to="/admin" />
      }
      
      if(Object.keys(user).length !== 0 && user.role === "Admin") {
        return <Redirect to="/admin" />
      }

    return (
      <div className="main">
        <div className="auth-wrapper">
        <Loader flag={this.props.isFetching}>
            <div className="auth">
              <div className="auth__content">
                { auth ? (
                    // <Loader flag={this.props.isFetching}>
                      <SignInForm error={this.props.errorFromAuth} submitHandler={this.props.auth} />
                    // {/* </Loader> */}
                ) : (
                    // <Loader flag={this.props.isFetching}>
                      <SignUpForm 
                        error={this.props.errorFromAuth}
                        submitHandler={this.props.register}
                        successRegister={this.props.successRegister}
                      />
                    // {/* </Loader> */}
                )}

                <div className="auth__additional-content">
                  {auth ? (
                    <p className="auth__text">
                      Do you have account ? {" "}
                      <span className="auth__toggle-span" onClick={this.toggleAuth}>
                        Sing Up
                      </span>
                    </p>
                  ) : (
                    <p className="auth__text">
                      I have account{" "}
                      <span className="auth__toggle-span" onClick={this.toggleAuth}>
                        Sign In
                      </span>
                    </p>
                  )}
                </div>
            </div>
          </div>        
          </Loader>
        </div>
     </div>

    );
  }
}

const mapStateToProps = state => ({
  user: state.auth.user,
  isFetching: state.auth.isFetching,
  errorFromAuth: state.auth.error,
  successRegister: state.auth.successRegister
})

export default connect(
  mapStateToProps,
  { auth,register }
)(Auth);
