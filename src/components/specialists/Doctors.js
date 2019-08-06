import React from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

export class Doctors extends React.Component {
        render() {
        const {data} = this.props;
        return (
            <div className="main">
                <div className="wrapper">
                    <div className = "doctors-wrap">
                        {
                            data.map(el => (
                                <div className="item"  key = {el._id} >
                                    <div className="photo">
                                        <img src= {el.photo} alt= {el.name}/>
                                        <div className="hover-block">
                                            <Link to = {`/doctors/${el._id}`} className = "btn link more">Подробнее ...</Link>
                                        </div>
                                    </div>
                                    
                                    <div className="desc">
                                        <h3>{el.name}</h3>
                                        <p className="rank">{el.profession}</p>
                                        <div className="link-box">
                                            <Link to={`/appointment/${el._id}`} className = "btn link ">Записаться на приём</Link>
                                        </div>     
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
        data:state.app.doctors
    }
};

const mapDispatchToProps = {
};

export default connect (mapStateToProps,mapDispatchToProps)(Doctors)



