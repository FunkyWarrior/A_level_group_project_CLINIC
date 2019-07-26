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
        console.log(this.props)
        this.props.setAppointmentDoctor(this.props.match.params.doctorId)
    }

    componentWillUnmount() {
        this.props.clearAppointment()
    }

    render() {
        const {doctors, appointment, timeArray, wrongDate,services} = this.props.app;
        const {match, setAppointmentSpec, setAppointmentShedule, setAppointmentTime, setAppointmentComment, postOrders} = this.props;
        const doctor = doctors.find(el => el._id === match.params.doctorId);
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
                                    {appointment.spec &&
                                    <div>
                                        <p>{spec.name}</p>
                                        <p>Длительность: {spec.duration} ч.</p>
                                        {/* <p>{spec.description}</p> */}
                                        <p>Цена от {spec.price} грн.</p>
                                    </div>
                                     }
                                    <select  onChange={(e)=>setAppointmentSpec(e.target.value)} defaultValue='Выбор услуги'>
                                        <option disabled >Выбор услуги</option>
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
                                        <p>На эту дату нет свободного времени для выбора</p>
                                        : null
                                    : <div>
                                        { choosedData >= currentDate ?
                                            <div>
                                                <select onChange={(e)=>setAppointmentTime(e.target.value)} defaultValue='choose time'>
                                                    <option disabled >Выбор даты</option>
                                                    {
                                                        timeArray.map(el=> (
                                                            Object.values(el)[0]
                                                                ? <option key={Object.keys(el)[0]} style={{color:'green'}} > {Object.keys(el)[0]} </option>
                                                                : <option key={Object.keys(el)[0]} style={{color:'red'}} disabled > {Object.keys(el)[0]} </option>
                                                        ))
                                                    }
                                                </select>
                                            </div>
                                            : <p>Выберите текущую или будущую дату</p>
                                        }
                                        </div>
                                }

                                {appointment.time &&
                                    <div style={{display:"flex",flexDirection:"column"}}>
                                        <input type='text' placeholder='Добавить комментарий' onChange={(e)=>setAppointmentComment(e.target.value)}/>
                                        <button onClick={() => postOrders(appointment)}>Подтвердите запись</button>
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
