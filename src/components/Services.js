import React from 'react';
import {Link} from 'react-router-dom'

export default class Services extends React.Component {


    render() {
        const {data} = this.props;

        return (
            <div style={{display:'flex', justifyContent:'center', flexWrap:'wrap'}}>
                {
                    data.map(el => (
                        <div key={el._id} style={{display:'flex',flexDirection:'column', width:'200px', margin:'100px 20px'}}>
                            <p>{el.name}</p>
                            <p>Duration:{el.duration}h</p>
                            <p>{el.description}</p>
                            <p>Price:{el.price}$</p>
                            <div>
                                <Link to={`/services/${el._id}`}>More Info</Link>
                                <button>Make appointment</button>
                            </div>
                        </div>
                    ))
                }

            </div>
        );
    }
}