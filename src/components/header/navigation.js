import React from "react";
// import Scrollchor from 'react-scrollchor';
import {Link} from 'react-router-dom'



const liArr = [
	{ path: "/", id: 1, text: "Главная" },
	{ path: "/doctors",  id: 2,  text: "Специалисты"  },
	{ path: "/services", id: 3,  text: "Услуги" },
	{ path: "/reviews", id: 4, text: "Отзывы"  },
	{ path: "/auth", id: 5, text: "Войти", hideWhenAuth: true }
];

export default ( props ) => (
    <nav className=" nav">
		<ul className=" list">
			{liArr.map(el => (
				<li className="item" key={el.id}> 
					<Link to={el.path}>{el.text}</Link>  
				</li>
			) ) }
		</ul>
	</nav>
);

