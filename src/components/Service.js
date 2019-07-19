import React from 'react';
import {Link} from "react-router-dom";


export default class Service extends React.Component {


    render() {
        const {his,data} = this.props;
        const path = his.match.params.service;
        return (
            <div style={{display:'flex',flexDirection:'column', width:'200px', margin:'10px 20px'}}>
                {data[path].name}
                <p>Duration:{data[path].duration}h</p>
                <p>{data[path].description}</p>
                <p>Price:{data[path].price}$</p>
                <Link to={`/appointment/${path}`}>Make an appointment</Link>
            </div>
        );
    }
}