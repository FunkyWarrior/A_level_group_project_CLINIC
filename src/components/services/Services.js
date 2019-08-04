import React from "react";

import {Link} from 'react-router-dom';
import { connect } from "react-redux";

export class Services extends React.Component {
  render() {
    const { categories } = this.props;
    const servArray = Object.keys(categories).map(key => {
      return [key, categories[key]];
    });

    // console.log ("data:", data);
    // console.log ("categories:", Object.values (categories))
    // console.log ("servArray:", servArray)
    // console.log ("this.props:", this.props.app)

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
    app: state.app,
    // data:state.app.services,
    categories: state.app.servicesArray
  };
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Services);
