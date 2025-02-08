import UnAuth from "./UnAuth";
import Auth from "./Auth";
import { MylogContext } from "./LoginContext";
import { useContext } from "react";
const App = () => {
  const { user } = useContext(MylogContext);
  return (
    <>
      <h1>My login page</h1>
      {user.auth ? <Auth /> : <UnAuth />}
    </>
  );
};
export default App;
