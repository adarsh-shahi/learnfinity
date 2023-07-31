import { FormEvent } from "react";

export default function Login() {
	const handleGoogleSignIn = () => {};

	const handleLogin = (e: FormEvent) => {
		e.preventDefault();
	};
	return (
		<div className="w-min mx-auto mt-60 flex flex-col gap-5">
			<button
				onClick={handleGoogleSignIn}
				className="text-gray-800 flex justify-center text-2xl font-semibold border-2 border-black"
			>
				Continue with Google
			</button>
			<form
				onSubmit={handleLogin}
				className="flex flex-col bg-gray-800 p-10  gap-3 items-center"
			>
				<div className="flex flex-col gap-5 ">
					<input type="email" placeholder="email" className="px-3 py-2" />

					<input type="password" placeholder="password" className="px-3 py-2" />
				</div>
				<button className="text-black bg-red-50 py-2 px-3 rounded-full">
					LOGIN
				</button>
			</form>
		</div>
	);
}
