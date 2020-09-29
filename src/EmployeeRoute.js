import React  from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "./Context/auth";
function EmployeeRoute({ component: Component, ...rest }) {
  const { state } = useAuth();
  return (
    <Route
      {...rest}
      render={(props) => {
      
        return state.token.token && !state.token.isAdmin ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
            }}
          />
        );
      }}
    />
  );
}

export default EmployeeRoute;
