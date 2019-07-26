import React from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

// import {
//     getServices,
// } from "../actions/actions";


export class Services extends React.Component {
    render() {
        const {data} = this.props;
        console.log ("data:", {data})

            return (

            <div className="main">
                <div className="wrapper">
                    <div className = "doctors-wrap">
                           { 
                            data.map ( el => (
                                <div key={el._id} style={{display:'flex',flexDirection:'column', width:'200px', margin:'10px 20px'}}>
                                    <p>{el.name}</p>
                                    <p>Длительность: {el.duration} ч.</p> 
                                    <p>{el.description}</p>
                                    <p>Цена: {el.price} грн.</p>
                                    <div>
                                        <Link to={`/services/${el._id}`} className = "btn more ">Подробнее ...</Link>
                                        <button className = "btn link">Записаться на приём</button>
                                    </div>
                             </div>
                            ) )
                        }
                    </div>
                </div>
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        data:state.app.services
    }
};

const mapDispatchToProps = {
    // getServices 
};

export default connect (mapStateToProps,mapDispatchToProps)(Services)