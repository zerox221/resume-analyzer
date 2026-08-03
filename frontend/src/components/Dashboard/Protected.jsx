import { useNavigate } from "react-router-dom";
import Dashboard from "./dash";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ user, children }) => {
  console.log(user);
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;