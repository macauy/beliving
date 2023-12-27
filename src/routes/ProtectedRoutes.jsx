import { Outlet, Navigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";

const ProtectedRoutes = () => {
	const { isAuth } = useContext(UserContext);
	console.log(isAuth);
	return <main>{isAuth ? <Outlet /> : <Navigate to="/login" />}</main>;
};

export default ProtectedRoutes;
