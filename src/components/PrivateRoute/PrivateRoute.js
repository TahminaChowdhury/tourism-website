import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const {user,isLoading} =useAuth();
    if (isLoading) {
      return <div text-center><Spinner animation="border" variant="danger" /></div>
  }
    return (
        <div>
            <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
        </div>
    );
};

export default PrivateRoute;