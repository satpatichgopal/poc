import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const AdminRoute = ({ component: Component, ...rest }) => (
	<Route exact {...rest} render={props => (
		localStorage.getItem('AuthToken')
			? <Component {...props} />
			: <Redirect to={{ pathname: '/', state: { from: props.location } }} />
	)} />
)

export default AdminRoute;
