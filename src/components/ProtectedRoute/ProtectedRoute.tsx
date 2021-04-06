import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useAuth } from "../../hooks";

export const ProtectedRoute = ({ component: Component, ...rest }: any) => {
  const auth = useAuth();
  return (
    <Route {...rest} render={
      props => {
        if (auth.user) {
          return <Component {...rest} {...props} />
        } else {
          return <Redirect to={
            {
              pathname: '/',
              state: {
                from: props.location
              }
            }
          } />
        }
      }
    } />
  );
};

