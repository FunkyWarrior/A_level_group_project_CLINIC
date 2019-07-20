import React from 'react';

export default class Shedule extends React.Component {
    state ={
        startDate:null,
        endDate:null,
    };

    post = () => {
        let current = new Date(this.state.startDate);
        let end = new Date (this.state.endDate);
        while (current.toISOString().split('T')[0] <= end.toISOString().split('T')[0]){
            this.props.postShedule({
                ...this.props.postNewShedule,
                data:current.toISOString().split('T')[0],
            });
            current =new Date(+current + 86400000)
        }
    };

    render() {
        const {doctors,postNewShedule,sheduleMonthArray,setSheduleDoctor} = this.props;
        return (
            <div style={{display:'flex',flexDirection:'column', width:'200px', margin:'10px 20px'}}>


                <select  onChange={(e) => setSheduleDoctor(e.target.value)} defaultValue='choose doctor'>
                    <option disabled >choose doctor</option>
                    {
                        doctors.map(el=> (
                            <option key={el._id} id={el._id}>{el.name}</option>
                        ))
                    }
                </select>


                {postNewShedule.doctor &&
                    <>
                        <input type="date" onChange={(e) => this.setState({startDate:e.target.value})}/>
                        <input type="date" onChange={(e) => this.setState({endDate:e.target.value})}/>
                    </>
                }


                {(this.state.startDate && this.state.endDate) && <button onClick={this.post}>Post</button>}


                {postNewShedule.doctor &&
                    <div style={{display:'flex', margin:'10px 20px'}}>
                        <p>{new Date().toLocaleString('ru',{month:'long'})}</p>
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
                }


            </div>
        );
    }
}
