import { FormEvent } from "react";

export default function Login() {


	const handleGoogleSignIn = () => {
		const ROOT_URL = "https://accounts.google.com/o/oauth2/v2/auth";
		const options = {
			redirect_uri: process.env.REACT_APP_GOOGLE_REDIRECT_URI as string,
			client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID as string,
			access_type: "offline",
			response_type: "code",
			prompt: "consent",
			scope: [
				"https://www.googleapis.com/auth/userinfo.profile",
				"https://www.googleapis.com/auth/userinfo.email",
			].join(" "),
		};

		const queryString = new URLSearchParams(options);
		const finalSearch = `${ROOT_URL}?${queryString.toString()}`;
		console.log(finalSearch);
		return finalSearch;
	};

	const handleLogin = (e: FormEvent) => {
		e.preventDefault();
	};
	return (
		<div className="w-min mx-auto mt-60 flex flex-col gap-5">
			<a
				href={handleGoogleSignIn()}
				className="text-gray-800 flex justify-center text-2xl font-semibold border-2 border-black"
			>
				Continue with Google
			</a>
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
