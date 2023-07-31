import { FormEvent } from "react";

export default function Login() {
	const handleLogin = (e: FormEvent) => {
		e.preventDefault();
	};
	return (
		<>
			<form onSubmit={handleLogin}>
				<input type="email" />
				<input type="password" />
				<button>LOGIN</button>
			</form>
		</>
	);
}
