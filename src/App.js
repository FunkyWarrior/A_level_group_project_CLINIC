import React from 'react';
import {connect} from 'react-redux'
import {Switch, Route} from "react-router-dom";

import {
    getAll,
    getDoctors,
    getServices,
    setAppointmentDate,
    setAppointmentDoctor,
    setAppointmentTime,
    setAppointmentSpec,
    setAppointmentComment,
    clearAppointment,
    putOrders,

} from "./store/app/actions";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Doctors from "./components/Doctors"
import Services from "./components/Services"
import Service from "./components/Service"
import Appointment from "./components/Appointment"
import Auth from './containers/auth'


export class App extends React.Component {

    componentDidMount() {
        // this.props.getDoctors();
        // this.props.getServices()
        this.props.getAll()
    }

    render() {
        console.log(this.props.app)
        return (
            <div className="App">
                <Header/>
                    <Switch>
                        <Route exact path="/" render={() => <div>Main</div>} />
                        <Route exact path="/doctors" render={() => <Doctors data={this.props.app.doctors} /> } />
                        <Route exact path="/services" render={() => <Services data={Array.from(Object.values(this.props.app.services))} />} />
                        <Route exact path="/reviews" render={() => <div>Reviews</div>} />
                        <Route exact path="/services/:service" render={(props) => <Service
                            his={props}
                            data={this.props.app.services}
                        />} />
                        <Route  path="/appointment/:doctor" render={(props) => <Appointment
                            his={props}
                            dataDoctors={this.props.app.doctors}
                            dataServices={this.props.app.services}
                            dataOrders={this.props.app.orders}
                            appointment={this.props.app.appointment}
                            setAppointmentDate={this.props.setAppointmentDate}
                            setAppointmentDoctor={this.props.setAppointmentDoctor}
                            setAppointmentTime={this.props.setAppointmentTime}
                            setAppointmentSpec={this.props.setAppointmentSpec}
                            setAppointmentComment={this.props.setAppointmentComment}
                            clearAppointment={this.props.clearAppointment}
                            putOrders={this.props.putOrders}
                        />} />
                        <Route exact path="/auth" component={Auth} />
                    </Switch>
                <Footer/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        app:state.app,
    }
};

const mapDispatchToProps = {
    getAll,
    getDoctors,
    getServices,
    setAppointmentDate,
    setAppointmentDoctor,
    setAppointmentTime,
    setAppointmentSpec,
    setAppointmentComment,
    clearAppointment,
    putOrders

};

export default connect (mapStateToProps,mapDispatchToProps)(App)
