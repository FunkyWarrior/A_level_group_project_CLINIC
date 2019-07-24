import React from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

export class MoreInfo extends React.Component {
    render() {
        const {match,doctors,services} = this.props;
        const doctor = doctors.find(el => el._id === match.params.doctor);
        const service = services.find(el => el._id === match.params.service);
        return (
            <>
               {doctor &&
               <div style={{display:'flex',flexDirection:'column', width:'200px', margin:'100px 20px'}}>
                   <h3>{doctor.name}</h3>
                   <img src={`.${doctor.photo}`} alt=""/>
                   <p>{doctor.profession}</p>
                   <p>Опыт работы более {new Date().toISOString().split('T')[0].split('-')[0] - doctor.experience.split('T')[0].split('-')[0]} лет</p>
                   <Link to={`/appointment/${doctor}`}>Make an appointment</Link>
               </div>}

                {service  &&
                <div style={{display:'flex',flexDirection:'column', width:'200px', margin:'100px 20px'}}>
                    {service.name}
                    <p>Duration:{service.duration}h</p>
                    <p>{service.description}</p>
                    <p>Price:{service.price}грн.</p>
                    <Link to={`/appointment/${service}`}>Make an appointment</Link>
                </div>}
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        doctors:state.app.doctors,
        services:state.app.services
    }
};

const mapDispatchToProps = {
};

export default connect (mapStateToProps,mapDispatchToProps)(MoreInfo)