import React, {Component} from 'react';
import moment from "moment";
import {connect} from "react-redux";

import {
    createCalendarMonthArray,
    changeCalendarMonth,

} from "../../actions/calendar";

export class Calendar extends Component {

    componentDidMount() {
        moment.locale('ru', {
            week : {
                dow:1
            }
        });
        this.props.createCalendarMonthArray(this.props.doctor)
    }

    addMonth = () => {
        this.props.changeCalendarMonth(1);
        this.props.createCalendarMonthArray(this.props.doctor)
    };

    subMonth = () => {
        this.props.changeCalendarMonth(-1);
        this.props.createCalendarMonthArray(this.props.doctor)
    };

    action = (e) => {
        this.props.action(e.target.id)
    };

    render() {
        const {current,monthArray} = this.props;
        return (
            <div className = "calendar-container">
                <div className = "calendar-title-box" >
                    <button className= "btn angle" onClick={this.subMonth}><span className="icon-angle-left"></span></button>
                    <h4>{current.format('MMMM-YYYY')}</h4>
                    <button  className= "btn angle"  onClick={this.addMonth}><span className="icon-angle-right"></span></button>
                </div>
                <div className = "weekdays">
                    {moment.weekdaysShort(true).map(el => (
                        <p key={el}>{el}</p>
                    ))}
                </div>
                <div  className = "days">
                    {monthArray.map(el => (
                        <button
                            key={el.day}
                            id={el.day}
                            disabled={el.disabled}
                            style={{
                                width:"50px",
                                height:"50px",
                                backgroundColor:el.backgroundColor,
                                border:el.border
                            }}
                            onClick={this.action}
                        >
                            {moment(el.day).format('DD')}
                        </button>
                    ))}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        current:state.calendar.current,
        monthArray:state.calendar.monthArray
    }
};

const mapDispatchToProps = {
    createCalendarMonthArray,
    changeCalendarMonth,
};

export default connect (mapStateToProps,mapDispatchToProps)(Calendar)

