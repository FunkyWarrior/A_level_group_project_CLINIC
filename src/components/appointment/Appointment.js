import React from 'react';
import {connect} from "react-redux";
import moment from "moment";
import { CustomSelect } from "./select";


import {
    setAppointmentSpec,
    setAppointmentShedule,
    setAppointmentDoctor,
    clearAppointment,
    setAppointmentTime,
    setAppointmentComment,
    postOrders

} from "../../actions/actions";


import Calendar from "../Calendar";

export class Appoint extends React.Component {
    state = {
        pickedDate:null
    };

    componentDidMount() {
        this.props.setAppointmentDoctor(this.props.match.params.doctorId)
    }

    componentWillUnmount() {
        this.props.clearAppointment()
    }

    setSpec = (e) => {
        this.props.setAppointmentSpec(e)
    };

    setShedule = (e) => {
        this.setState({pickedDate:e.target.id});
        this.props.setAppointmentShedule(e.target.id)
    };

    setShedule = (e) => {
        this.setState({pickedDate:e.target.id});
        this.props.setAppointmentShedule(e.target.id)
    };

    setTime = (e) => {
        this.props.setAppointmentTime(e.target.value)
    };

    setComment = (e) => {
        this.props.setAppointmentComment(e.target.value)
    };

    postOrder = () => {
        this.props.postOrders(this.props.app.appointment)
    };


    render() {
        const {doctors, appointment, timeArray,services} = this.props.app;
        const {match} = this.props;
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

                                <CustomSelect label="Выбор услуги" options = { doctor.speciality} clickOptionEvent = {this.setSpec} />

                               
                                {appointment.spec &&
                                    <Calendar
                                        doctor={doctor}
                                        action={this.setShedule}
                                    />
                                }

                                {appointment.shedule &&
                                   <div className = "appointment-time" >
                                        <div className="btn-box"  >
                                            {
                                                timeArray.map ( (el, index) => (
                                                    <label  key={Object.keys(el)} >
                                                        <input
                                                            type ="radio"
                                                            name = "choise-time"
                                                            id = {index} onChange={this.setTime}
                                                            value =  {Object.keys(el)}
                                                        />

                                                        {Object.keys(el)}
                                                    </label>
                                                ))
                                            }
                                        </div>
                                   </div>

                                }

                            {appointment.spec &&
                                <div>
                                    <p>{spec.name}</p>
                                    <p>Длительность: {spec.duration} ч.</p>
                                    <p>Цена от {spec.price} грн.</p>
                                    {this.state.pickedDate &&
                                        <p>{moment(this.state.pickedDate).format('DD-MMMM-YYYY')}</p>
                                    }
                                    {appointment.time &&
                                        <p>{appointment.time}</p>
                                    }
                                </div>
                            }

                                {appointment.time &&
                                <div className = "comment-input" >
                                    <textarea
                                        className = "appointment comment"
                                        rows="3"
                                        placeholder = "Добавить комментарий "
                                        onChange={this.setComment}/>
                                    <button className = "btn link" onClick={this.postOrder}>Подтвердите запись</button>
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



// <select className = "appointment "  onChange={this.setSpec} defaultValue='Выбор услуги'>
//      <option disabled >Выбор услуги</option>
//         {
//             doctor.speciality.map(el=> (
//                 <option key={el._id}>{el.name}</option>
//              ))
//         }
// </select>