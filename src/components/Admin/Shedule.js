import React from 'react';
import moment from "moment";
import { connect } from "react-redux";

import { CustomSelect } from "../hooks/select"
import Calendar from "../Calendar";

import {
    setAppointmentShedule,
    setAppointmentDoctor,
    setAppointmentTime,
    postOrders
} from "../../actions/actions";

export  class Shedule extends React.Component {
    state ={
        startDate:null,
        endDate:null,
        pickedDate: null
    };

    setShedule = e => {
        this.setState({ pickedDate: e.target.id });
        this.props.setAppointmentShedule(e.target.id);
      };
    
      setShedule = e => {
        this.setState({ pickedDate: e.target.id });
        this.props.setAppointmentShedule(e.target.id);
      };
    
      setTime = e => {
        this.props.setAppointmentTime(e.target.value);
      };

      postOrder = () => {
        this.props.postOrders(this.props.app.appointment);
      };


    post = (e) => {
        e.preventDefault()
        let current = new Date(this.state.startDate);
        let end = new Date (this.state.endDate);
        while (current.toISOString().split('T')[0] <= end.toISOString().split('T')[0]){
            if (moment(current).day()!==6 && moment(current).day()!==0){
                this.props.postShedule({
                    ...this.props.postNewShedule,
                    data:current.toISOString().split('T')[0],
                });
            }
            current = new Date(+current + 86400000)
        }
    };

    changeStart = (e) => {
        this.setState({startDate:e.target.value } )
    };
    changeEnd = (e) => {
        this.setState ( { endDate:e.target.value } )
    };
    setDoctor = (e) => {
        this.props.setSheduleDoctor(e.target.value)
    };

    render() {
        const {doctors, match, postNewShedule} = this.props;
        const doctor = doctors.find (el => el._id === postNewShedule.doctor);
        console.log (this.props.doctors)
        return (
            <div  className = "shedule-container" >
                <div className = "option" >

                {/* <CustomSelect
                    label="Выберите доктора"
                    options= {doctor ? doctor[0].name : 'Выберите доктора'}
                    clickOptionEvent={this.setDoctor}
                  /> */}

                    <select className = "appointment admin-appointment"  
                        onChange={this.setDoctor} defaultValue={doctor ? doctor.name : 'Выберите доктора'}>
                        <option disabled >Выберите доктора</option>
                        {
                            doctors.map ( el=> (
                                <option key={el._id} id={el._id}> {el.name} </option>
                            ) )
                        }
                    </select>

                    {postNewShedule.doctor &&
                        <div className = "input-box">
                            <input className = "shedule-input " type="date" onChange = {this.changeStart}/>
                            <input className = "shedule-input right" type="date" onChange = {this.changeEnd}/>
                        </div>
                    }

                    {(this.state.startDate && this.state.endDate) &&
                        <button className = "btn admin" onClick = {this.post}> Отправить </button>
                    }
                </div>

                {postNewShedule.doctor &&
                <div className="shedule-card">
                    <Calendar
                        doctor={doctor}
                        action = {console.log}
                    />
                    <div className="day-shedule">

                    </div>
                </div>

                }
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
      app: state.app
    };
  };
  
  const mapDispatchToProps = {
    setAppointmentShedule,
    setAppointmentDoctor,
    setAppointmentTime,
    postOrders
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Shedule);