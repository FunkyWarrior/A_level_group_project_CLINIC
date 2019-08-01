import React from "react";
// import Scrollchor from 'react-scrollchor';
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import Button from "../button";





const header =  props  => {
	const liArr = [
		{ path: "/", id: 1, text: "Главная", hideWhenAuth:false},
		{ path: "/doctors",  id: 2,  text: "Специалисты", hideWhenAuth:false },
		{ path: "/services", id: 3,  text: "Услуги", hideWhenAuth:false},
		{ path: "/reviews", id: 4, text: "Отзывы", hideWhenAuth:false },
		{ path: "/auth", id: 5, text: "Войти", hideWhenAuth:true
		// Object.keys(props.user).length > 0 ? 
		// 	props.user.role === "Admin" ? "Admin"
		// 		: props.user.role === "Doctor" 
		// 		? "Doctor" 		
		// 				: "Logout" 
		// 					: "Войти" 
		}
	];

	return <nav className=" nav icon-dehaze" 
		// onClick = { ( ) => { document.querySelector('.list').style.display = " block"    }  }
	>
		<ul className=" list ">
		{liArr.map(el =>
			el.hideWhenAuth && props.user.role ? null :
							(
								<li className="item" key={el.id}>
									<Link to={el.path}>{el.text}</Link>
								</li>
							)
						)}
		{Object.keys(props.user).length > 0 ? 
			props.user.role === "Admin" ? (
				<li className="item" key={6}>
					<Link to={ "/admin"}>{"Admin"}</Link>
					<Button text="Logout" />
				</li>
					
			) : props.user.role === "Doctor" ? 
			(<li className="item" key={6}>
					<Link to={ "/admin"}>{"Doctor"}</Link>
					<Button text="Logout" />
				</li>) : (<li className="item" key={6}>
					<Link to={ "/user"}>{"User"}</Link>
					<Button text="Logout" />
				</li>)
						: null 
		}
		</ul>
	</nav>
};

const mapStateToProps = state => ({
	user: state.auth.user
});

export default connect(mapStateToProps)(withRouter(header));

