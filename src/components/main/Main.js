import React from 'react';
// import {Link} from 'react-router-dom';


import {postDoctors, postServices} from "../../actions/actions";

import Button from "../buttons/button";
import About from "./aboutUs";
import Team from "./team";
import MyMap from "./myMap";
import Reviews from "./reviews";

import {connect} from 'react-redux'

    
export class Main extends React.Component {
 render() {

        return (
            <main className = "main">
                <div className="container">
                    <div className="wrapper">
                                <div className="title-box">
                                    <img className = "logotype" src="./images/logo.png" alt=""/>
                                    <h1>Стоматология для всей семьи</h1>
                                    <Button className = "btn" text = "Записаться на приём" 
                                        onClick = { ( ) => {  } } 
                                        />
                                </div>
                        </div>
                </div>
                 <div className="wrapper">
                    <About/>
                 </div>
                <div className=" case">
                        <img className = "banner" src="./images/medical.jpeg" alt="medical"/>
                        <div className="button-box">
                            <Button className = "btn" text = "Записаться на приём" onClick = { ( ) => { } }/>
                        </div>     
                 </div>
                 <div className="wrapper">
                    <Team doctorsArr = {this.props.app.doctors}/>
                 </div>
                <div className="case">
                  <MyMap />
                </div>
                <div className="wrapper">
                    {/* <Reviews services = {this.props.app.doctors} postDoctors = {this.props.postDoctors}/> */}
                </div>
            </main> 
        )
    }
}

    const mapStateToProps = state => {
        return {
            app:state.app
        }
    };
    
    const mapDispatchToProps = {
        postDoctors,
        postServices
    };
    
    export default connect (mapStateToProps,mapDispatchToProps)(Main)


