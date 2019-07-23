import React from 'react';
import {Link} from 'react-router-dom'

export default class MoreInfo extends React.Component {


    render() {
        const {his,data} = this.props;
        const doctor = data.find(el => el._id === his.match.params.doctor);
        const service = data.find(el => el._id === his.match.params.service);

        console.log (this.props, doctor)
        return (
            <>
           {doctor && <div >
               <h3>{doctor.name}</h3> 
                <p>Duration:{doctor.profession}</p>
                <p>{doctor.description}</p>
                <p>Price:{doctor.experience}грн.</p>
                <Link to={`/doctors/${doctor}`}>Make an appointment</Link>
            </div>} 
            {
                service  &&             <div style={{display:'flex',flexDirection:'column', width:'200px', margin:'100px 20px'}}>
                {service.name}
                <p>Duration:{service.duration}h</p>
                <p>{service.description}</p>
                <p>Price:{service.price}грн.</p>
                <Link to={`/appointment/${service}`}>Make an appointment</Link>
            </div>
            }
            </>
        );
    }
}