import { useContext } from "react";
import { UserContext } from "../context/userContext";

export default function Profile() {
	const value = useContext(UserContext)
	return <div>
		<button className="bg-black text-white p-2" onClick={() => {value?.dispatch({type: "DELETE_LOGIN_DATA"}); localStorage.removeItem("userDetails")}}>LOGOUT</button>
		<div>{value?.state.user.email}</div>
		<div>{value?.state.user.name}</div>
		<img src={`${value?.state.user.picture}`} alt="" />
	</div>;
}
