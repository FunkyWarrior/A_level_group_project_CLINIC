import React, {Component} from 'react';
import moment from "moment";
import {connect} from 'react-redux'

export class Calendar extends Component {
    state={
        current:moment(),
    };


    setDate = (e) => {
        console.log(moment(e.target.id).format('YYYY-MM-DD'))
        // console.log(this.props.doctors[0].shedule.find(el => el.data === e.target.id) ? this.props.doctors[0].shedule.find(el => el.data === e.target.id)._id : 'No such shedule')

    };


    render() {
        moment.locale('ru', {
            week : {
                dow:1
            }
        });
        const {doctors}=this.props
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
            <div style={{display:'flex',flexDirection:'column',margin:"100px 20px"}}>
                <div style={{display:'flex',margin:'20px'}}>
                    <button onClick={() => this.setState({current:current.subtract(1,"month")})}>{'<'}</button>
                    <h3>{current.format('MMMM-YYYY')}</h3>
                    <button onClick={() => this.setState({current:current.add(1,"month")})}>{'>'}</button>
                </div>
                <div style={{display:'flex',}}>
                    {moment.weekdays(true).map(el => (
                            <p key={el} style={{margin:'0 20px'}}>{el}</p>
                    ))}
                </div>
                <div  style={{display:'flex',flexWrap:'wrap',maxWidth:'700px',margin:'5px'}}>

                    {daysArray.map(el => (
                        <button
                            key={el}
                            id={el}
                            disabled={
                                moment(el).format('YYYY-MM-DD') < moment().format('YYYY-MM-DD')
                                || (moment(el).day()===6)
                                || (moment(el).day()===0)
                            }
                            style={{
                                height:'100px',
                                width:'100px',
                                backgroundColor:doctors[0] ? doctors[0].shedule.find(item => item.data === el) ? "lightgreen" : "coral" : null,
                                border:moment().format('YYYY-MM-DD') ===  moment(el).format('YYYY-MM-DD') ? "3px solid black" : null
                            }}
                            onClick={this.setDate}
                        >
                            {moment(el).format('DD')}
                        </button>
                    ))}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        doctors:state.app.doctors,
    }
};

const mapDispatchToProps = {
};

export default connect (mapStateToProps,mapDispatchToProps)(Calendar)
