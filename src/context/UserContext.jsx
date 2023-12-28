import { createContext, useState } from "react";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
	console.log("user context");

	const [isAuth, setIsAuth] = useState();
	const [user, setUser] = useState("");

	console.log(isAuth, "is auth");
	const logIn = (user) => {
		setIsAuth(true);
		setUser(user);
	};

	const logOut = () => {
		setIsAuth(false);
		setUser("");
	};

	let data = {
		isAuth,
		user,
		logIn,
		logOut,
	};

	return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};

export default UserContextProvider;
