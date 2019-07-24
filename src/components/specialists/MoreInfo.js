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
            <div className="main">
                {doctor &&
                    <div className = "info-wrap">
                        <div className="card">
                            <div className="card-item">
                                <img src={`.${doctor.photo}`} alt=""/>
                            </div>
                             <div className="card-item desc">
                                 <h3>{doctor.name}</h3>
                                <p className = "highlights">{doctor.profession}</p>
                                <p className = "highlights">Опыт работы более {new Date().toISOString().split('T')[0].split('-')[0] - doctor.experience.split('T')[0].split('-')[0]} лет</p>
                                {doctor.skillsDescription.split ("<br>").map ( (el, index) => (  <p key= {index}> { el } </p>)  ) }
                                <Link to={`/appointment/${doctor}`} className = "btn link">Make an appointment</Link>
                             </div>
                        </div>
                    </div>}

                {service  &&
                <div  className = "info-wrap">
                    {service.name}
                    <p>Duration:{service.duration}h</p>
                    <p>{service.description}</p>
                    <p>Price:{service.price}грн.</p>
                    <Link to={`/appointment/${service}`}>Make an appointment</Link>
                </div>}
               </div>
              
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