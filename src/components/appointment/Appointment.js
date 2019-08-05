import React from 'react';
import {connect} from "react-redux";
// import { CustomSelect } from "./select";

import {
    setAppointmentSpec,
    setAppointmentShedule,
    setAppointmentDoctor,
    clearAppointment,
    setAppointmentTime,
    setAppointmentComment,
    postOrders

} from "../../actions/actions";


import Calendar from "./Calendar";

export class Appoint extends React.Component {

    componentDidMount() {
        this.props.setAppointmentDoctor(this.props.match.params.doctorId)
    }

    componentWillUnmount() {
        this.props.clearAppointment()
    }

    render() {
        const {doctors, appointment, timeArray,services} = this.props.app;
        const {match, setAppointmentSpec, setAppointmentShedule, setAppointmentTime, setAppointmentComment, postOrders} = this.props;
        const doctor = doctors.find(el => el._id === match.params.doctorId);
        let spec;
        if (appointment.spec){
            spec = services.find(el => el._id === appointment.spec)
        }
        return (
            <>
                <div className="main">
                    {doctor &&
                    <div className = "info-wrap">
                        <div className="card">
                            <div className="card-item">
                                <img src={`.${doctor.photo}`} alt={doctor.name}/>
                            </div>
                            <div className="card-item desc">
                                <h3>{doctor.name}</h3>
                                <p className = "highlights">{doctor.profession}</p>

                                {/* <CustomSelect label="Выбор услуги" /> */}

                                {appointment.spec &&
                                <div>
                                    <p>{spec.name}</p>
                                    <p>Длительность: {spec.duration} ч.</p>
                                    <p>Цена от {spec.price} грн.</p>
                                </div>
                                }

                                <select className = "appointment "  onChange={(e)=>setAppointmentSpec(e.target.value)} defaultValue='Выбор услуги'>
                                    <option disabled >Выбор услуги</option>
                                    {
                                        doctor.speciality.map(el=> (
                                            <option key={el._id}>{el.name}</option>
                                        ))
                                    }
                                </select>

                                {appointment.spec &&
                                <Calendar
                                    doctor={doctor}
                                    action={setAppointmentShedule}
                                />
                                }

                                {appointment.shedule &&

                             
                                   <div className = "appointment-time" >
                                        <div className="btn-box"  >
                                        {   timeArray.map ( (el, index)=> (
                                            
                                                <label  key={Object.keys(el)[0]} >
                                                    <input type ="radio" name = "choise-time"   id = {index} onChange={(e)=> setAppointmentTime(e.target.value)}
                                                  value =  {Object.keys(el)[0]}  />
                                                   {Object.keys(el)[0]}
                                                </label>
                                            ))
                                        }
                                            </div>
                                    </div>
                                }

                                {appointment.time &&
                                <div style={{display:"flex",flexDirection:"column"}}>
                                    <input className = "appointment comment" type='text' placeholder='Добавить комментарий' onChange={(e)=>setAppointmentComment(e.target.value)}/>
                                    <button className = "btn link" onClick={() => postOrders(appointment)}>Подтвердите запись</button>
                                </div>
                                }

                            </div>
                        </div>
                    </div>
                    }
                </div>

            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        app:state.app
    }
};

const mapDispatchToProps = {
    setAppointmentSpec,
    setAppointmentShedule,
    setAppointmentDoctor,
    clearAppointment,
    setAppointmentTime,
    setAppointmentComment,
    postOrders,
};

export default connect (mapStateToProps,mapDispatchToProps)(Appoint)




// <div className = "btn appointment-link" onClick={(e)=> setAppointmentTime(e.target.value)}  key={Object.keys(el)[0]} >
// {Object.keys(el)[0]} 
// </div>

// setAppointmentTime