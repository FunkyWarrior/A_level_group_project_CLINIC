import React from 'react';

import {Link} from 'react-router-dom';
import {connect} from 'react-redux';



export class Services extends React.Component {
    
    render() {
        const { categories} = this.props;
        const servArray =  Object.keys(categories).map(key => {
            return [key, categories[key]];
        })

        // console.log ("data:", data);
        // console.log ("categories:", Object.values (categories))
        // console.log ("servArray:", servArray)
        // console.log ("this.props:", this.props.app)

        return (
            <div className="main">
                <div className="wrapper">
                    <div className = "doctors-wrap  services">
                        <div className = "categories" >
      
                            { servArray.map ( (el, index )=> (
                                <div className="service-type" key = {index}>                           
                                        <Link to = {`/services/${el[0]}`} className = "categories-link" key = {index}>
                                            <p>{el[0]}</p>
                                        </Link>
                                </div>
                            ) ) 
                            }
                      
                        </div> 
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        app:state.app,
        // data:state.app.services,
        categories:state.app.servicesArray
    }
};

const mapDispatchToProps = {

};

export default connect (mapStateToProps,mapDispatchToProps)(Services)


