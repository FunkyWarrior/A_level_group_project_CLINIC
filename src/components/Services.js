import React from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

export class Services extends React.Component {
    render() {
        const {data} = this.props;
        return (
            <div className="main">
                <div className="wrapper">
                    <div className = "doctors-wrap">
                        {
                            data.map(el => (
                                <div key={el._id} style={{display:'flex',flexDirection:'column', width:'200px', margin:'100px 20px'}}>
                                    <p>{el.name}</p>
                                    <p>Duration:{el.duration}h</p>
                                    <p>{el.description}</p>
                                    <p>Price:{el.price}грн.</p>
                                    <div>
                                        <Link to={`/services/${el._id}`}>More Info</Link>
                                        <button>Make appointment</button>
                                    </div>
                                </div>
                            ))
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