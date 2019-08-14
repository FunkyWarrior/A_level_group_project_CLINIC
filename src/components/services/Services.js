import React from "react";

import {Link} from 'react-router-dom';
import {connect} from "react-redux";

export class Services extends React.Component {
    render() {
        const {categories} = this.props;
        return (
            <div className="main">
                <div className="wrapper">
                    <div className="doctors-wrap  services">
                        <div className="categories" id="accordion">
                            {categories.map(el => (
                                <div className="service-type" key={el._id} id={`item${el._id}`}>
                                    <a href={`#item${el._id}`} className="categories-link icon-angle-down" key={el._id}>
                                        {el.name}
                                    </a>
                                    {el.services.map(item => (
                                        <div className="servise-name" key={item._id}>
                                            <p>{item.name}</p>
                                            {/* <p>Длительность: {item.duration} ч.</p>  */}
                                            <p>Стоимость: {item.price} грн.</p>
                                            <div>
                                                <Link to={`/appointment/${item._id}`}
                                                      className="btn service-btn"> Записаться </Link>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        categories: state.services.categories
    };
};

const mapDispatchToProps = {
  
};

export default connect(mapStateToProps, mapDispatchToProps)(Services);
