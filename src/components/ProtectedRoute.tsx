import { ReactElement, useContext } from "react";
import { UserContext } from "../context/userContext";
import { Navigate, useLocation } from "react-router-dom";

export default function ProtectedRoute({
	children,
}: {
	children: ReactElement;
}) {
	const data = useContext(UserContext);

	const location = useLocation();
	const queryParams = new URLSearchParams(location.search);
	const userInfo = queryParams.get("jsonData");
	if (userInfo) {
		console.log("userInfo", userInfo)
		localStorage.setItem("userDetails", userInfo);
		data?.dispatch({
			type: "ADD_LOGIN_DATA",
			payload: JSON.parse(userInfo),
		});
		return <Navigate to="/"/>
	}
	if(data?.state.user.email === "" || data?.state.user.name === "" || data?.state.user.picture === ""){
		return <Navigate to="/login"/>
	}
	return children;
}
