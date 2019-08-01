import React from 'react';
import {connect} from 'react-redux';
import {Switch, Route} from "react-router-dom";
// import { BrowserHistory } from 'react-history'

import {
    getDoctors,
    getServices,
} from "./actions/actions";

import Loader from "./components/loader";
import Header from "./components/header/index";
import Main from "./components/main/Main";
import Doctors from "./components/specialists/Doctors";
import Services from "./components/services/Services";
import Categories from "./components/services/categories"
import MoreInfo from "./components/specialists/MoreInfo";
import Appointment from "./components/appointment/Appointment";
import Reviews from "./components/Reviews";
import Admin from './components/Admin/Admin';
import Auth from './containers/auth';
import Footer from "./components/Footer";
// import Calendar from "./components/Calendar"
import User from './components/user'

import { PrivateRoute } from "./privateRouter";

const PAGENOTFOUND = () => <div>PAGE 404 NOT FOUND</div>;

const route = [
	{
		id: 1,
		exact: true,
		path: "/",
		protected: false,
		// hasAccess: [],
		component: Main
	},
	{
		id: 2,
		exact: true,
		path: "/doctors",
		protected: false,
		component: Doctors
	},
	{
		id: 3,
		exact: true,
		path: "/services",
		protected: false,
		component: Services
	},
	{
		id: 3,
		exact: true,
		path: "/doctors/:doctor",
		protected: false,
		component: MoreInfo
	},
	{
        id: 4,
        exact: true,
		path: "/services/:service",
		protected: false,
		component: MoreInfo
    },
    {
        id: 5,
        exact: true,
		path: "/reviews",
		protected: false,
		component: Reviews
    },
    {
        id: 6,
        exact: true,
		path: "/admin",
		protected: true,
		component: Admin
    },
    {
        id: 7,
        exact: true,
		path: "/appointment/:doctorId",
		protected: false,
		component: Appointment
    },
    {
        id: 8,
        exact: true,
		path: "/auth",
		protected: false,
		component: Auth
    },
    {
        id: 9,
        exact: true,
		path: "/user",
		protected: false,
		component: User
    },
    {
		id: 10,
		component: PAGENOTFOUND
    },
    
];

export class App extends React.Component {

    componentDidMount() {
        this.props.getDoctors();
        this.props.getServices();

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
        app:state.app,
    }
};

const mapDispatchToProps = {
    getDoctors,
    getServices,
};

export default connect (mapStateToProps,mapDispatchToProps)(App)
