import React from 'react';
import {Link} from 'react-router-dom'

export default class Doctors extends React.Component {


    render() {
        const {data} = this.props;
        return (
            <div className="main">
                <div className="wrapper">
                    <div className = "doctors-wrap">
                        {data.map(el => (
                            <div className="item"  key = {el._id} >
                                <div className="photo"><img src= {el.photo} alt= {el.name}/></div>
                                <h3>{el.name}</h3>
                                <div className="desc">
                                    <p className="experience">Опыт работы {new Date().toISOString().split('T')[0].split('-')[0] - el.experience.split('T')[0].split('-')[0]} лет</p>
                                    <p className="rank">{el.profession}</p>
                                </div>
                                <div className="link-box">
                                    <Link to = {`/doctors/${el._id}`} className = "btn link more">Подробнее ...</Link>
                                    <Link to={`/appointment/${el._id}`} className = "btn link ">Записаться на приём</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>                
            </div>
        );
    }
}




