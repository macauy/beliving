import { createContext, useState } from "react";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
	const [isAuth, setIsAuth] = useState(false);
	const [user, setUser] = useState("");

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
