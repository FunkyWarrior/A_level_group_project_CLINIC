import React from "react";

import {Link} from 'react-router-dom';
import {connect} from "react-redux";

export class Services extends React.Component {
<<<<<<< HEAD
  render() {
    const { categories } = this.props;
    const servArray = Object.keys(categories).map(key => {
      return [key, categories[key]];
    });

    // console.log ("data:", data);
    // console.log ("categories:", Object.values (categories))
    // console.log ("servArray:", servArray)
    // console.log ("this.props:", this.props.app)
    console.log ("state.app.services", this.props.app.services.category)

    return (
      <div className="main">
        <div className="wrapper">
          <div className="doctors-wrap  services">
            <div className="categories" id="accordion">
              {servArray.map((el, index) => (
                <div className="service-type" key={index} id={`item${index}`}>
                  <a   href={`#item${index}`} className="categories-link icon-angle-down"   key={index}>
                    {el[0]}
                  </a>
                  {el[1].map((item, index) => (
                    <div className="servise-name" key={index}>
                      <p>{item.name}</p>
                      {/* <p>Длительность: {item.duration} ч.</p>  */}
                      <p>Стоимость: {item.price} грн.</p>
                      <div>
                        <Link to = {`/appointment/${el._id}`}  className="btn service-btn">  Записаться  </Link>
                      </div>
=======
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
>>>>>>> ffc22fefa05d985c41e67b265e33a56a26cd6bfe
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
<<<<<<< HEAD
  return {
        app:state.app,
        // data:state.app.services.category,
        categories:state.app.servicesArray
  };
=======
    return {
        categories: state.services.categories
    };
>>>>>>> ffc22fefa05d985c41e67b265e33a56a26cd6bfe
};

const mapDispatchToProps = {
  
};

export default connect(mapStateToProps, mapDispatchToProps)(Services);
