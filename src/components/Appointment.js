import React from 'react';


export default class Appointment extends React.Component {

    componentDidMount() {
        this.props.setAppointmentDoctor(+this.props.his.match.params.doctor)
    }

    componentWillUnmount() {
        this.props.clearAppointment()
    }

    render() {
        const {his,dataDoctors,dataServices,dataOrders,appointment,
            setAppointmentDate,
            setAppointmentTime,
            setAppointmentSpec,
            setAppointmentComment,
            putOrders
        } = this.props;
        const timeArray = [];
        const doctor = dataDoctors.find(el => el.id === +his.match.params.doctor);
        if (appointment.date.year){
            for (let index in doctor.schedule[appointment.date.month][appointment.date.day]){
                timeArray.push({[`${index}`]:doctor.schedule[appointment.date.month][appointment.date.day][`${index}`]})
            }
        }
        return (
            <>
                {doctor &&
                <div style={{display:'flex',flexDirection:'column',width:'400px'}}>
                    <p>{doctor.photo}</p>
                    <p>{doctor.name}</p>
                    <p>{doctor.lastName}</p>
                    <p>{doctor.skillsDescription}</p>
                    <select onChange={(e)=>setAppointmentSpec(e.target.value)} defaultValue='choose spec'>
                        <option disabled >choose spec</option>
                        {
                            doctor.speciality.map(el=> (
                                <option key={el}>{el}</option>
                            ))
                        }

                    </select>

                    {appointment.spec && <input type="date" onChange={(e)=>setAppointmentDate(e.target.value)}/>}

                    {appointment.date.year !== 0 &&
                    <div>
                        {
                            ( +appointment.date.month >= new Date().getMonth()+1 && +appointment.date.day >= new Date().getDate() ) ?
                                doctor.schedule[appointment.date.month][appointment.date.day] ?
                                    <div>
                                        <select onChange={(e)=>setAppointmentTime(e.target.value)} defaultValue='choose time'>
                                            <option disabled >choose time</option>
                                            {
                                                timeArray.map(el=> (
                                                    <option key={Object.keys(el)[0]}>{Object.values(el)[0] ? Object.keys(el)[0] : null}</option>
                                                ))
                                            }

                                        </select>
                                        <input type="time" readOnly placeholder="Time will be calculated" value={appointment.time ? +appointment.time.split(':')[0] + dataServices[appointment.spec].duration + ':00' : ''}/>
                                    </div>
                                    : <p>No work today</p>
                                : <p>Please choose current or future date</p>
                        }
                    </div>
                    }

                    {appointment.time &&
                    <div style={{display:"flex",flexDirection:"column"}}>
                        <input type='text' placeholder='Add comments here' onChange={(e)=>setAppointmentComment(e.target.value)}/>
                        <button onClick={()=>putOrders([...dataOrders,appointment])}>Confirm Appointment</button>
                    </div>
                    }

                </div>
                }
            </>
        );
    }
}
