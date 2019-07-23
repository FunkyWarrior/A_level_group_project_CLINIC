import React from 'react';
import {connect} from 'react-redux'
import {Switch, Route} from "react-router-dom";
// import { BrowserHistory } from 'react-history'

import {
    getDoctors,
    getServices,
} from "./actions/actions";

import Loader from "./components/loader"
import Header from "./components/header/index"
import Main from "./components/main/Main";
import Doctors from "./components/specialists/doctors";
import MoreInfo from "./components/specialists/MoreInfo"
// import Service from "./components/Service";
import Services from "./components/Services"
import Appointment from "./components/Appointment";
import Auth from './containers/auth'
import Footer from "./components/Footer";
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

    //     fetch("https://api-clinics.herokuapp.com/api/v1/doctors",{
    //         method: "GET",
    //         credentials:"include"
    //     })
    //     .then(res => res.json())
    //     .then(res => console.log (res))
    // }

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
        // console.log(this.props.app)
        return (
              <Loader flag={this.props.isFetching}>
                    <Header/>
                    <Switch>
                        <Route exact path="/" component={Main} />
                        <Route exact path="/doctors" render={() => <Doctors data={this.props.app.doctors} /> } />
                        <Route exact path="/doctors/:doctor" render={(props) =>
                            <MoreInfo
                                his={props}
                                data={this.props.app.doctors}
                            />}
                        />
                        <Route exact path="/services" render={() => <Services data={this.props.app.services} />} />
                        <Route exact path="/reviews" render={() => <div>Reviews</div>} />
                        <Route path="/admin/" component={Admin} />
                        <Route exact path="/services/:service" render={(props) =>
                            <MoreInfo
                                his={props}
                                data={this.props.app.services}
                            />}
                        />
                        <Route  path="/appointment/:doctorId" component={Appointment}/>
                        <Route exact path="/auth" component={Auth} />
                    </Switch>
                <Footer/>
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
