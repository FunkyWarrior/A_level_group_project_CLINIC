import React from 'react';
import {connect} from 'react-redux'
import {Switch, Route} from "react-router-dom";
// import axios from "axios";

import {getDoctors,getServices,getDoctorsRequest} from "./store/app/actions";

import Header from "./components/header/index"
import Footer from "./components/Footer";
import Main from "./components/main/Main";
import Doctors from "./components/specialists/doctors";
import Service from "./components/Service";
import Appointment from "./components/Appointment";


export class App extends React.Component {

    componentDidMount() {
        this.props.getDoctors();
        this.props.getServices( )
     
        fetch("https://api-clinics.herokuapp.com/api/v1/doctors", {
            method: "GET",
            credentials: "include"
        })
            .then(res => res.json())
            .then(res => console.log (res))
}


    render() {

        return (
            <div className="App">
                <Header/>
                    <Switch>
                        <Route exact path="/" component={Main} />
                        <Route exact path="/doctors" render={() => <Doctors data={this.props.app.doctors} flag={'doctors'}/> } />
                        <Route exact path="/services" render={() => <Doctors data={Array.from(Object.values(this.props.app.services))} flag={'services'}/>} />
                        <Route exact path="/services/:service" render={(props) => <Service his={props} data={this.props.app.services}/>} />
                        <Route  path="/appointment/:doctor" render={(props) => <Appointment his={props} dataDoctors={this.props.app.doctors} dataServices={this.props.app.services}/>} />
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
    getDoctors,
    getServices,
    getDoctorsRequest

};

export default connect (mapStateToProps,mapDispatchToProps)(App)
