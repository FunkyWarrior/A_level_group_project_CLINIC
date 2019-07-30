import React from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

export class Services extends React.Component {
    render() {
        const {data, categories} = this.props;

        console.log ("data:", data);
        console.log ("categories:", Object.values (categories))
        // console.log ("this.props:", this.props.app)

        return (
            <div className="main">
                <div className="wrapper">
                    <div className = "doctors-wrap">
                        { categories[0] &&
                           categories.map ( el => 
                                // el.map ( item => (
                                //     <div key={item._id} className = "item">
                                //         <p>{item.name}</p>
                                //         <p>Длительность: {item.duration} ч.</p> 
                                //         <p>{item.description}</p>
                                //         <p>Цена: {item.price} грн.</p>
                                //         <div>
                                //         <Link to= {`/services/${item._id}`} className = "btn more "> Подробнее ... </Link>
                                //         <button className = "btn link"> Записаться на приём </button>
                                //     </div>
                                // </div>
                                // ))
                                <p>{el}</p>
                            )  
                        }
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        app:state.app,
        data:state.app.services,
        categories:Object.keys (state.app.servicesArray)
    }
};

const mapDispatchToProps = {

};

export default connect (mapStateToProps,mapDispatchToProps)(Services)



