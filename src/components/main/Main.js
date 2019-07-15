import React from 'react';
// import {Link} from 'react-router-dom';
import {postDoctors} from "../../store/app/actions"

import Button from "../buttons/button";
import About from "./aboutUs";
import Team from "./team"

import {connect} from 'react-redux'

    const doctor = {
        name: "Грегори Хаус",
        photo: "./images/doctors/gregoryhaus.jpg",
        experience: "1990-02-13",
        profession: "Стоматолог-хирург",
        speciality: [   ],
        skillsDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, magnam. Maxime nisi dolorum consectetur dolor impedit veniam placeat nobis repudiandae quibusdam aperiam!",
    }

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
                                        onClick = { ( ) => { this.props.postDoctors (doctor) } } />
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
                    <Team doctorsArr = {this.props.app}/>
                 </div>

            </main>
        )
    }
}

    const mapStateToProps = state => {
        return {
            app:state.app.doctors,
            
        }
    };
    
    const mapDispatchToProps = {
        postDoctors
    };
    
    export default connect (mapStateToProps,mapDispatchToProps)(Main)


