import React from 'react';
import {connect} from 'react-redux'
import {Switch, Route} from "react-router-dom";

import {
    getDoctors,
    getServices,
} from "./actions/actions";

import Header from "./components/header/index"
import Footer from "./components/Footer";
import Main from "./components/main/Main";
import Doctors from "./components/specialists/doctors";
import Service from "./components/Service";
import Appointment from "./components/Appointment";
import Services from "./components/Services"
import Auth from './containers/auth'
import Admin from './components/Admin/Admin'


export class App extends React.Component {

    componentDidMount() {
        this.props.getDoctors();
        this.props.getServices();

        // fetch("https://api-clinics.herokuapp.com/api/v1/orders", {
        //     method: "GET",
        //     credentials: "include"
        // })
        //     .then(res => res.json())
        //     .then(res => console.log (res))

        // fetch("https://api-clinics.herokuapp.com/api/v1/services", {
        //     method: "GET",
        //     credentials: "include"
        // })
        //     .then(res => res.json())
        //     .then(res => console.log (res))

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
        console.log(this.props.app.servicesArray)
        return (
            <>
                    <Header/>
                    <Switch>
                        <Route exact path="/" component={Main} />
                        <Route exact path="/doctors" render={() => <Doctors data={this.props.app.doctors} /> } />
                        <Route exact path="/services" render={() => <Services data={this.props.app.services} />} />
                        <Route exact path="/reviews" render={() => <div>Reviews</div>} />
                        <Route path="/admin/" component={Admin} />
                        <Route exact path="/services/:service" render={(props) =>
                            <Service
                                his={props}
                                data={this.props.app.services}
                            />}
                        />
                        <Route  path="/appointment/:doctorId" component={Appointment}/>
                        <Route exact path="/auth" component={Auth} />
                    </Switch>
                <Footer/>
             </>
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
