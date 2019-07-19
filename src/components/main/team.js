import React from 'react';
import {Link} from 'react-router-dom';
// import Button from "../buttons/button";



export default class Team extends React.Component {
    render( ) {
        const {doctorsArr } = this.props
        return (
            <>
                <h2>Наши врачи</h2>
                <div className = "team-container">
                    {doctorsArr.map  ( el => 
                         <div className="item"  key = {el.id} >
                             <div className="photo"><img src= {el.photo} alt= {el.name}/></div>
                            <h3>{el.name}</h3>
                            <div className="desc">
                                <p className="experience">Опыт работы {el.experience} лет</p>
                                <p className="rank">{el.rank}</p>
                            </div>
                             <div className="link-box">
                                <Link to = "/doctors" className = "btn link more">Подробнее ...</Link>
                                <Link to = "/doctors" className = "btn link ">Записаться на приём</Link>
                            </div>
                        </div>
                    )}
                 </div>
            </>
        ) 
    }
}        