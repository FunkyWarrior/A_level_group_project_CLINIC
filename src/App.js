import React from 'react';
import {connect} from 'react-redux';
import {Switch} from "react-router-dom";

import {getDoctors} from "./actions/actions";
import {getServices, getCategories} from "./actions/services";
import {getUser} from "./actions/auth"

import Loader from "./components/loader";
import Header from "./components/header/index";
import Footer from "./components/Footer";
import {route} from './utils/formFields'
import { PrivateRoute } from "./privateRouter";



export class App extends React.Component {

    componentDidMount() {
        this.props.getDoctors();
        this.props.getServices();
        this.props.getCategories();

       if(localStorage.getItem('userId')) this.props.getUser()

        // fetch ("https://api-clinics.herokuapp.com/api/v1/auth/login", {
        //     method : "POST",
        //     credentials: "include",
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify ({
        //         email: "test@test.com",
        //         password: "qwerty"
        //     })
        // })
        //     .then (res => res.json ())
        //     .then (res => console.log (res))
    }

    render() {
        return (
              <Loader flag={this.props.app.isFetching}>
                  <Header/>
                    <Switch>
                        {route.map(el => (
					        <PrivateRoute
                                protectedRoute={el.protected}
                                key={el.id}
                                exact={el.exact}
                                path={el.path}
                                component={el.component}
                            />
				        ))}
                    </Switch>
                <Footer />
             </Loader>
        );
    }
}

const mapStateToProps = state => {
    return {
        app:state.app
    }
};

const mapDispatchToProps = {
    getDoctors,
    getServices,
    getCategories,
    getUser
};

export default connect (mapStateToProps,mapDispatchToProps)(App)
