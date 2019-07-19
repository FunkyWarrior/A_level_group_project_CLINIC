import React from 'react';


export default class Appointment extends React.Component {
    state={
        date:{
            year:0,
            month:0,
            day:0
        },
        spec:null,
        time:null
    };


    changeDate =(e) => {
        const date = e.target.value.split('-');
        this.setState({
            date:{
                year:date[0],
                month:date[1],
                day:date[2]
            }
        })
    };

    chooseSpeciality = (e) => {
        this.setState({spec:e.target.value})
    }

    chooseTime =(e) => {
        this.setState({time:e.target.value})
    }

    render() {
        let schedule
        const {his,dataDoctors,dataServices} = this.props;
        const path = his.match.params.doctor;
        const doctor = dataDoctors.find(el => el.id === +path);
        if(doctor){
            schedule = doctor.schedule


        }


        // if (doctor){
        //     schedule = doctor.schedule[`${this.state.date.month<10 ? '0'+this.state.date.month : this.state.date.month}`][`${this.state.date.day<10 ? '0'+this.state.date.day : this.state.date.day}`]
        //     console.log(doctor.schedule[`${this.state.date.month<10 ? '0'+this.state.date.month : this.state.date.month}`][`${this.state.date.day<10 ? '0'+this.state.date.day : this.state.date.day}`])
        // }
        if (this.state.time){
        console.log(this.state.time)
        console.log(this.state.time.split(':'))
        console.log(dataServices[this.state.spec].duration)
            console.log(+this.state.time.split(':')[0] + dataServices[this.state.spec].duration)
        }

        return (
            <>
                {doctor && <div style={{display:'flex',flexDirection:'column',width:'400px'}}>
                    <p>{doctor.photo}</p>
                    <p>{doctor.name}</p>
                    <p>{doctor.lastName}</p>
                    <p>{doctor.skillsDescription}</p>
                    <select onChange={this.chooseSpeciality} defaultValue='choose spec'>
                        <option disabled >choose spec</option>
                        {doctor.speciality.map(el=> (
                            <option key={el}>{el}</option>
                        ))}

                    </select>
                    {this.state.spec && <input type="date" onChange={this.changeDate}/>}
                    {this.state.date.year !== 0 &&
                    <div>
                        {Object.values(schedule)[0][this.state.date.day] ?
                            <div>
                            <select onChange={this.chooseTime}>
                                {Object.values(schedule)[0][this.state.date.day].map(el=> (
                                    <option key={el}>{el}</option>
                                ))}
                                
                            </select>
                                <input type="time" readOnly placeholder="Time will be calculated" value={this.state.time ? +this.state.time.split(':')[0] + dataServices[this.state.spec].duration + ':00' : ''}/>
                            </div>
                            : <p>No work today</p>}
                    </div>
                    }
            </div>}
                </>
        );
    }
}

