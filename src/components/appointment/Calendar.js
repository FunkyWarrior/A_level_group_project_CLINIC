import React, {Component} from 'react';
import moment from "moment";

export default class Calendar extends Component {
    state={
        current:moment(),
    };

    componentDidMount() {
        moment.locale('ru', {
            week : {
                dow:1
            }
        });
    }

    render() {
        const {doctor,setAppointmentShedule} = this.props
        const {current} = this.state
        const daysArray = []
        for (let x=1; x <= current.daysInMonth();x++){
            daysArray.push(current.date(x).format('YYYY-MM-DD'))
        }
        const prevMonth = moment(current).subtract(1,'months')
        const startDay = current.startOf('month').day() === 0 ? 7 : current.startOf('month').day()
        for (let x=1; x < startDay ;x++){
            daysArray.unshift(prevMonth.endOf('month').subtract(x-1,'days').format('YYYY-MM-DD'))
        }
        return (
            <div className = "calendar-container">
                <div className = "calendar-title-box" >
                    <button className= "btn angle" onClick={() => this.setState({current:current.subtract(1,"month")})}><span className="icon-angle-left"></span></button>
                    <h4>{current.format('MMMM-YYYY')}</h4>
                    <button  className= "btn angle"  onClick={() => this.setState({current:current.add(1,"month")})}><span className="icon-angle-right"></span></button>
                </div>
                <div className = "weekdays">
                    {moment.weekdaysShort(true).map(el => (
                            <p key={el} >{el}</p>
                    ))}
                </div>
                <div  className = "days">

                    {daysArray.map(el => (
                        <button
                            key={el}
                            id={el}
                            disabled={
                                moment(el).format('YYYY-MM-DD') < moment().format('YYYY-MM-DD')
                                || (moment(el).day()===6)
                                || (moment(el).day()===0)
                                || moment(el).month() !== current.month()
                                || !doctor.shedule.find(item => item.data === el)
                            }
                            style={{
                                height:'50px',
                                width:'50px',
                                backgroundColor:moment(el).month() === current.month() ? doctor.shedule.find(item => item.data === el) ? "#b1e8ca" : "#ff9774" : "lightgrey",
                                border:moment().format('YYYY-MM-DD') ===  moment(el).format('YYYY-MM-DD') ? "2px solid rgba(17,17,17,0.8)" : null
                            }}
                            onClick={(e) => setAppointmentShedule(e.target.id)}
                        >
                            {moment(el).format('DD')}
                        </button>
                    ))}
                </div>
            </div>
        );
    }
}

