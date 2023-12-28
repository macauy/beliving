import { Outlet, Navigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";
import Login from "../components/login/Login";

const ProtectedRoutes = () => {
	const { isAuth } = useContext(UserContext);
	console.log(isAuth);
	return <>{isAuth ? <Outlet /> : <Navigate to={"/login"} />}</>;
};

export default ProtectedRoutes;
