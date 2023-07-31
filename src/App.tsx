import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SideNavigatiopn from "./components/SideNavigation";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Chat from "./pages/Chat";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={
						<ProtectedRoute>
							<SideNavigatiopn />
						</ProtectedRoute>
					}
				>
					<Route index element={<Home />} />
					<Route path="/chat" element={<Chat />} />
					<Route path="/profile" element={<Profile />} />
				</Route>
				<Route path="/login" element={<Login />} />
				<Route path="*" element={<h3>404. Page not found</h3>} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
