import React from 'react';
import moment from "moment";

export default class Shedule extends React.Component {
    state ={
        startDate:null,
        endDate:null,
    };

    post = () => {
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

    render() {
        const {doctors,postNewShedule,sheduleMonthArray,setSheduleDoctor} = this.props;
        return (
            <div  className = "shedule-container" >
                <div className="option">
                    <select className = "appointment admin-appointment"  onChange={(e) => setSheduleDoctor(e.target.value)} defaultValue='Выберите доктора'>
                    <option disabled >Выберите доктора</option>
                        {
                            doctors.map(el=> (
                                <option key={el._id} id={el._id}>{el.name}</option>
                            ))
                        }
                    </select>

                    {postNewShedule.doctor &&
                        <div className = "input-box">
                            <input className = "shedule-input " type="date" onChange={(e) => this.setState({startDate:e.target.value})}/>
                            <input className = "shedule-input right" type="date" onChange={(e) => this.setState({endDate:e.target.value})}/>
                        </div>
                    }


                {(this.state.startDate && this.state.endDate) && <button className = "btn admin" onClick={this.post}>Post</button>}

                </div>
                

                {postNewShedule.doctor &&
                <>
                    <p className = "month">{new Date().toLocaleString('ru',{month:'long'})}</p>
                    <div className = "shedule">
                        {
                            sheduleMonthArray[new Date().getMonth()].map(el => (
                                <div key={el._id} style={{margin:'10px 20px'}}>
                                    <p>{new Date(el.data).toISOString().split('T')[0].split('-')[2]}</p>
                                    {
                                        Object.keys(el).map(key=> {
                                            return [key,el[key]]
                                        }).map(el => ((typeof el[1]=== 'boolean') ? <p key={el[0]}>{el[0]}-{`${el[1]}`}</p> : null))
                                    }
                                </div>
                            ))
                        }
                    </div>
                </>
                }
            </div>
        );
    }
}
