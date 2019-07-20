import React from 'react';
import {Link} from 'react-router-dom'

export default class Doctors extends React.Component {


    render() {
        const {data} = this.props;
        return (
            <div style={{display:'flex', justifyContent:'center', flexWrap:'wrap'}}>
                {data.map(el => (
                    <div
                        key={el._id}
                        style={{display: 'flex', flexDirection: 'column', width: '300px', margin: '100px 20px'}}
                    >
                        <Link to={`/doctors/${el._id}`}>
                            <p>{el.photo}</p>
                            <p>{el.name}</p>
                            <p>{el.lastName}</p>
                            <p>{el.age}</p>
                            <p>{el.skillsDescription}</p>
                        </Link>
                        {el.speciality.map(el => (
                            <Link to={`/services/${el._id}`} key={el._id}>{el.name}</Link>
                        ))}
                        <Link to={`/appointment/${el._id}`}>Make an appointment</Link>
                    </div>
                ))}
            </div>
        );
    }
}