import React from 'react';
import {Link} from 'react-router-dom'

export default class Doctors extends React.Component {


    render() {
        const {data} = this.props
        return (
            <div style={{display:'flex', justifyContent:'center', flexWrap:'wrap'}}>
                {data.map(el => (
                    <div key={el.id}
                         style={{display: 'flex', flexDirection: 'column', width: '300px', margin: '10px 20px'}}>
                        <Link to={`/doctors/${el.id}`}>
                            <p>{el.photo}</p>
                            <p>{el.name}</p>
                            <p>{el.lastName}</p>
                            <p>{el.age}</p>
                            <p>{el.skillsDescription}</p>
                        </Link>
                        {el.speciality.map(el => (
                            <Link to={`/services/${el}`} key={el}>{el}</Link>
                        ))}
                        <Link to={`/appointment/${el.id}`}>Make an appointment</Link>
                    </div>
                ))
                }
            </div>
        );
    }
}