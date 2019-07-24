import React, {Component} from 'react';
import moment from "moment";
import {connect} from 'react-redux'

export class Calendar extends Component {
    state={
        current:moment(),
    };


    setDate = (e) => {
        console.log(moment().format('YYYY-MM-DD') === moment(24).format('YYYY-MM-DD'))
        console.log(moment().format('YYYY-MM-DD'))
        console.log(moment(e.target.id).format('YYYY-MM-DD'))
        // console.log(this.props.doctors[0].shedule.find(el => el.data === e.target.id) ? this.props.doctors[0].shedule.find(el => el.data === e.target.id)._id : 'No such shedule')

    };


    render() {
        const {doctors}=this.props
        const {current} = this.state
        const daysArray = []
        for (let x=1; x <= current.daysInMonth();x++){
            daysArray.push(x)
        }
        for (let x=1; x < current.startOf('month').weekday();x++){
            console.log(current.add(x,"days").format('dddd'))
        }
        console.log(current.startOf('month').weekday())
        return (
            <div style={{margin:"100px 20px"}}>
                <div style={{display:'flex',margin:'20px'}}>
                    <button onClick={() => this.setState({current:current.add(-1,"month")})}>{'<'}</button>
                    <h3>{moment(current).format('MMMM-YYYY')}</h3>
                    <button onClick={() => this.setState({current:current.add(1,"month")})}>{'>'}</button>
                </div>
                <div  style={{display:'flex',flexWrap:'wrap',maxWidth:'700px',margin:'5px'}}>
                    {daysArray.map(el => (
                        <button
                            key={el}
                            id={current.date(el).format('YYYY-MM-DD')}
                            style={{
                                height:'100px',
                                width:'100px',
                                backgroundColor:doctors[0] ? doctors[0].shedule.find(el => el.data === current.date(el).format('YYYY-MM-DD')) ? "lightgreen" : "coral" : null,
                                border:moment().format('YYYY-MM-DD') ===  current.date(el).format('YYYY-MM-DD') ? "3px solid black" : null
                            }}
                            onClick={this.setDate}
                        >
                            {current.date(el).format('DD')}
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
