import React from 'react';
import {Link} from "react-router-dom";


export default class Service extends React.Component {


    render() {
        const {his,data} = this.props;
        const service = data.find(el => el._id === his.match.params.service)
        console.log(this.props)
        return (
            <div style={{display:'flex',flexDirection:'column', width:'200px', margin:'100px 20px'}}>
                {service.name}
                <p>Duration:{service.duration}h</p>
                <p>{service.description}</p>
                <p>Price:{service.price}$</p>
                <Link to={`/appointment/${service}`}>Make an appointment</Link>
            </div>
        );
    }
}