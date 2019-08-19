import React from 'react';
import {CustomSelect} from "../hooks/select";
import Calendar from "../Calendar";

class ChangeOrder extends React.Component {
    state = {
        order: {
            spec: '',
            doctor: '',
            time: '',
            comment: '',
            orderNumber: null,
            user: '',
        },
        flag: false,
    };

    componentDidMount() {
        this.setState({
            order: {
                spec: this.props.order.spec,
                doctor: this.props.order.doctor,
                time: this.props.order.time,
                comment: this.props.order.comment,
                orderNumber: this.props.order.orderNumber,
                date: this.props.order.date.split('T')[0],
                user: this.props.order.user,
            }
        });
    }

    changeOrder = () => {
        this.setState({flag: !this.state.flag})
    };

    setDoctor = (e) => {
        this.props.setAppointmentDoctor(this.props.doctors.find(el => el.name === e)._id)
    };

    setSpec = (e) => {
        this.props.setAppointmentSpec({services: this.props.services, data: e})
    };

    setShedule = (e) => {
        this.props.setAppointmentShedule({
            data: e.target.id,
            services: this.props.services,
            doctors: this.props.doctors
        })
    };

    setTime = (e) => {
        this.props.setAppointmentTime(e.target.value)
    };

    setComment = (e) => {
        this.props.setAppointmentComment(e.target.value)
    };

    deleteAndPostNewOrder = () => {
        this.props.deleteOrder({
            id: this.props.order._id,
            newOrder: {
                spec: this.props.appointment.specId,
                doctor: this.props.appointment.doctorId,
                shedule: this.props.appointment.sheduleId,
                time: this.props.appointment.time,
                comment: this.props.appointment.comment,
                orderNumber: this.state.order.orderNumber,
                user:this.state.order.user._id
            }
        })
    };

    render() {
        const {
            doctors,
            appointment,
            timeArray
        } = this.props;
        console.log(this.props, this.state, appointment);
        return (
            <>
                <div style={{
                    position: 'absolute',
                    right: '0',
                    left: '0',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    backgroundColor: 'black',
                    margin: '5% auto',
                    width: '80%',
                    fontSize: '12px',
                    zIndex: '2'
                }}>

                    <input readOnly={true} id={this.state.order.orderNumber}
                           defaultValue={this.state.order.orderNumber}
                    />
                    <input readOnly={true} id={this.state.order.spec._id}
                           defaultValue={this.state.order.spec.name}
                    />
                    <input readOnly={true} id={this.state.order.doctor._id}
                           defaultValue={this.state.order.doctor.name}
                    />
                    <input readOnly={true} id={this.state.order.user._id}
                           defaultValue={this.state.order.user.email}
                    />
                    <input readOnly={true} id={this.state.order.date}
                           defaultValue={this.state.order.date}
                    />
                    <input readOnly={true} id={this.state.order.time}
                           defaultValue={this.state.order.time}
                    />
                    <input readOnly={true} id={this.state.order.comment}
                           defaultValue={this.state.order.comment}
                    />
                    <button onClick={this.changeOrder}>Change Order</button>
                    {this.state.flag &&
                    <div>
                        <input readOnly={true} id={this.state.order.orderNumber}
                               defaultValue={this.state.order.orderNumber}
                        />
                        <CustomSelect
                            label="Выбор врача"
                            emptyLine={false}
                            options={doctors}
                            clickOptionEvent={this.setDoctor}
                        />
                        {appointment.doctorId &&
                            <CustomSelect
                                label="Выбор услуги"
                                emptyLine={false}
                                options={appointment.doctorId ? doctors.find(el => el._id === appointment.doctorId).speciality : []}
                                clickOptionEvent={this.setSpec}
                            />
                        }
                        {appointment.specId &&
                        <Calendar
                            doctor={doctors.find(el => el._id === appointment.doctorId)}
                            action={this.setShedule}
                        />
                        }
                        {appointment.sheduleId && (
                            <div className="appointment-time">
                                <div className="btn-box">
                                    {timeArray.map((el, index) => (
                                        <div className="radio-btn" key={Object.keys(el)}>
                                            <input
                                                type="radio"
                                                className="radio"
                                                name="choise-time"
                                                id={index}
                                                onChange={this.setTime}
                                                value={Object.keys(el)}
                                            />
                                            <label htmlFor={index}>{Object.keys(el)}</label>
                                        </div>
                                    ))}
                                </div>
                                {appointment.time && (
                                    <textarea
                                        className="appointment comment"
                                        rows="2"
                                        placeholder="Добавить комментарий "
                                        onChange={this.setComment}
                                    />
                                )}
                            </div>
                        )}
                        {appointment.time &&
                        <button className="btn link" onClick={this.deleteAndPostNewOrder}>Подтвердите запись
                        </button>
                        }
                    </div>
                    }
                </div>

                <div className="wrap-check-off" onClick={this.props.clearOrder}></div>
            </>
        )
    }
}

export default ChangeOrder;