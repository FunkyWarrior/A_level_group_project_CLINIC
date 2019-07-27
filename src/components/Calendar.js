import React, {Component} from 'react';
import moment from "moment";

export default class Calendar extends Component {
    state={
        current:moment(),
    };

    render() {
        moment.locale('ru', {
            week : {
                dow:1
            }
        });
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
            <div style={{display:'flex',flexDirection:'column',margin:"0px 20px"}}>
                <div style={{display:'flex',margin:'20px'}}>
                    <button onClick={() => this.setState({current:current.subtract(1,"month")})}>{'<'}</button>
                    <h4 style={{margin:'0 20px'}}>{current.format('MMMM-YYYY')}</h4>
                    <button onClick={() => this.setState({current:current.add(1,"month")})}>{'>'}</button>
                </div>
                <div style={{display:'flex',}}>
                    {moment.weekdaysShort(true).map(el => (
                            <p key={el} style={{margin:'0 6px'}}>{el}</p>
                    ))}
                </div>
                <div  style={{display:'flex',flexWrap:'wrap',maxWidth:'350px',margin:'5px'}}>

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
                                backgroundColor:moment(el).month() === current.month() ? doctor.shedule.find(item => item.data === el) ? "lightgreen" : "coral" : "lightgrey",
                                border:moment().format('YYYY-MM-DD') ===  moment(el).format('YYYY-MM-DD') ? "3px solid black" : null
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

