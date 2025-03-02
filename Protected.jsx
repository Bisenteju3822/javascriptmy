import { Navigate } from "react-router-dom";

const Protected = ({ children, setAuthorization }) => {
  return setAuthorization ? children : <Navigate to="/login" />;
};

export default Protected;
