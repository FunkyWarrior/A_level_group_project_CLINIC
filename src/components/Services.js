import React from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

export class Services extends React.Component {
    render() {
        const {data} = this.props;
        // console.log ("data:", {data})

        return (
            <div className="main">
                <div className="wrapper">
                    <div className = "doctors-wrap">
                        {
                            data.map ( el => (
                                <div key={el._id} className = "item">
                                    <p>{el.name}</p>
                                    <p>Длительность: {el.duration} ч.</p> 
                                    <p>{el.description}</p>
                                    <p>Цена: {el.price} грн.</p>
                                    <div>
                                        <Link to= {`/services/${el._id}`} className = "btn more "> Подробнее ... </Link>
                                        <button className = "btn link"> Записаться на приём </button>
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

};

export default connect (mapStateToProps,mapDispatchToProps)(Services)



