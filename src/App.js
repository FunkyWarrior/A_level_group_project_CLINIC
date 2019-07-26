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
import Doctors from "./components/specialists/Doctors";
import Services from "./components/Services"
import MoreInfo from "./components/specialists/MoreInfo"
import Appointment from "./components/Appointment";
// import Reviews from "./components/Reviews"
import Admin from './components/Admin/Admin'
import Auth from './containers/auth'
import Footer from "./components/Footer";
import Calendar from "./components/Calendar"

export class App extends React.Component {

    componentDidMount() {
        this.props.getDoctors();
        this.props.getServices();
        
        // console.log (this.props.app)
        
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
                        <Route exact path="/" component={Main} />
                        <Route exact path="/doctors" component={Doctors} />
                        <Route exact path="/services" component={Services} />
                        <Route exact path="/doctors/:doctor" component={MoreInfo} />
                        <Route exact path="/services/:service" component={MoreInfo} />
                        <Route exact path="/reviews" component={Calendar}/>
                        <Route path="/admin/" component={Admin} />
                        <Route exact path="/appointment/:doctorId" component={Appointment}/>
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
