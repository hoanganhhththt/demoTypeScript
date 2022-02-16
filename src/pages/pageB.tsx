import * as React from "react";
import { Link } from "react-router-dom";
import { SessionContext } from "../common";
import { MainComponent } from "../components";

export const PageB: React.FC = () => {
  const loginContext = React.useContext(SessionContext);

  return (
    // <div>
    //   <h2>Hello from page B</h2>
    //   <h3>User logged in: {loginContext.login}</h3>
    //   <br />
      <MainComponent />
    //   <Link to="/">Navigate to Login</Link>
    // </div>
  );
};
