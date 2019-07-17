import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

const liArr = [
  { path: "/", id: 1, text: "Main Page", hideWhenAuth: false },
  { path: "/doctors", id: 2, text: "doctors", hideWhenAuth: false },
  { path: "/services", id: 3, text: "services", hideWhenAuth: false },
  { path: "/reviews", id: 4, text: "reviews", hideWhenAuth: false },
  { path: "/auth", id: 5, text: "Auth", hideWhenAuth: true }

];

const header = props => {
  return (
    <header className="header" id="header">
      <div className="header__left-wrapper">
        <div className="header__logo-box">logo</div>
        <nav className="header__nav">
          <ul className="header__list">
            {liArr.map(el =>
              el.hideWhenAuth && props.user ? null : (
                <li className="header__item" key={el.id}>
                  <Link to={el.path}>{el.text}</Link>
                </li>
              )
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

const mapStateToProps = state => ({
  //   user: state.auth.user
});

export default connect(mapStateToProps)(withRouter(header));
