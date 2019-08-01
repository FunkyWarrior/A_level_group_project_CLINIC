import React from "react";
import { Route, Redirect } from "react-router-dom";

export const PrivateRoute = ({ component: Component, protectedRoute, ...rest }) => {
	return (
	<Route
		{...rest}
		render={props => {
			if (protectedRoute) {
				const token = localStorage.getItem("userId");
				console.log('token', token)
				if (!token) {
					return <Redirect to="/auth" />;
				}

				return <Component {...props} />;
			}
			return <Component {...props} />;
		}}
	/>

)}