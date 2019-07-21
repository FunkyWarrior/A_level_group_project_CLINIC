import React from 'react';
import {connect} from "react-redux";

import {

    setAppointmentSpec,
    setAppointmentShedule,
    setAppointmentDoctor,
    clearAppointment,
    setAppointmentTime,
    setAppointmentComment,
    postOrders

} from "../actions/actions";

export class Appoint extends React.Component {

    componentDidMount() {
        this.props.setAppointmentDoctor(this.props.his.match.params.doctorId)
    }

    componentWillUnmount() {
        this.props.clearAppointment()
    }

    render() {
        const {doctors, appointment, timeArray, wrongDate,services} = this.props.app;
        const {his, setAppointmentSpec, setAppointmentShedule, setAppointmentTime, setAppointmentComment, postOrders} = this.props;
        const doctor = doctors.find(el => el._id === his.match.params.doctorId);
        let spec;
        if (appointment.spec){
            spec = services.find(el => el._id === appointment.spec)
        }
        let currentDate;
        let choosedData;
        if (doctor) {
            if (doctor.shedule && appointment.shedule) {
                currentDate = new Date().toISOString().split('T')[0];
                choosedData = doctor.shedule.find(el => el._id === appointment.shedule).data.split('T')[0];
            }
        }
        return (
            <>
                {doctor &&
                    <div style={{display:'flex',flexDirection:'column',width:'400px',margin:'100px 0'}}>
                        <img src={doctor.photo} alt=""/>
                        <p>{doctor.name}</p>
                        <p>{doctor.profession}</p>
                        <p>Опыт работы {new Date().toISOString().split('T')[0].split('-')[0] - doctor.experience.split('T')[0].split('-')[0]} лет</p>
                        <p>{doctor.skillsDescription}</p>

                        {appointment.spec &&
                            <div>
                                <p>{spec.name}</p>
                                <p>Duration:{spec.duration}h</p>
                                <p>{spec.description}</p>
                                <p>Price:{spec.price}$</p>
                            </div>
                        }
                        <select  onChange={(e)=>setAppointmentSpec(e.target.value)} defaultValue='choose spec'>
                            <option disabled >choose spec</option>
                            {
                                doctor.speciality.map(el=> (
                                    <option key={el._id}>{el.name}</option>
                                ))
                            }
                        </select>

                        {appointment.spec &&
                            <input
                                type="date"
                                onChange={(e) => setAppointmentShedule(doctor.shedule.find(el => new Date(el.data).toISOString().split('T')[0] === new Date(e.target.value).toISOString().split('T')[0])
                                    ? doctor.shedule.find(el => new Date(el.data).toISOString().split('T')[0] === new Date(e.target.value).toISOString().split('T')[0])._id
                                    : null
                                )}
                            />
                        }

                        {!appointment.shedule ?
                            !wrongDate ?
                                <p>There is no available time to choose on this date</p>
                                : null
                            : <div>
                                { choosedData >= currentDate ?
                                    <div>
                                        <select onChange={(e)=>setAppointmentTime(e.target.value)} defaultValue='choose time'>
                                            <option disabled >choose time</option>
                                            {
                                                timeArray.map(el=> (
                                                    Object.values(el)[0]
                                                        ? <option key={Object.keys(el)[0]} style={{color:'green'}} > {Object.keys(el)[0]} </option>
                                                        : <option key={Object.keys(el)[0]} style={{color:'red'}} disabled > {Object.keys(el)[0]} </option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                    : <p>Choose current or future date</p>
                                }
                                </div>
                        }

                        {appointment.time &&
                            <div style={{display:"flex",flexDirection:"column"}}>
                                <input type='text' placeholder='Add comments here' onChange={(e)=>setAppointmentComment(e.target.value)}/>
                                <button onClick={() => postOrders(appointment)}>Confirm Appointment</button>
                            </div>
                        }
                    </div>
                }
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
    setAppointmentSpec,
    setAppointmentShedule,
    setAppointmentDoctor,
    clearAppointment,
    setAppointmentTime,
    setAppointmentComment,
    postOrders
};

export default connect (mapStateToProps,mapDispatchToProps)(Appoint)
