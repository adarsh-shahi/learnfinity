import { NavLink, Outlet } from "react-router-dom";

export default function SideNavigatiopn() {
	return (
		<div className="flex gap-5">
			<aside className="bg-black sticky top-0 text-white h-screen flex flex-col px-10 py-5 gap-5">
				<NavLink to="/">Home</NavLink>
				<NavLink to="/chat">Chat</NavLink>
				<NavLink to="/profile">Profile</NavLink>
			</aside>
			<Outlet />
		</div>
	);
}
