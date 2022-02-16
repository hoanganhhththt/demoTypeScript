import * as React from "react";
import { SessionContext } from "../common";
import { ItemComponent } from "../components/itemComponent";

export const ItemPage: React.FC = () => {
  const loginContext = React.useContext(SessionContext);

  return (
    // <div>
    //   <h2>Hello from page B</h2>
    //   <h3>User logged in: {loginContext.login}</h3>
    //   <br />
      <ItemComponent />
    //   <Link to="/">Navigate to Login</Link>
    // </div>
  );
};
