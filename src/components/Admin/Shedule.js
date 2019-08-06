import React from 'react';
import moment from "moment";

import Calendar from "../Calendar";

export default class Shedule extends React.Component {
    state ={
        startDate:null,
        endDate:null,
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
        const {doctors, postNewShedule} = this.props;
        const doctor = doctors.find(el => el._id === postNewShedule.doctor);

        return (
            <div  className = "shedule-container" >
                <div className = "option" >
                    <select className = "appointment admin-appointment"  onChange={this.setDoctor} defaultValue={doctor ? doctor.name : 'Выберите доктора'}>
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
                    <Calendar
                        doctor={doctor}
                        action = {console.log}
                    />
                }
            </div>
        );
    }
}