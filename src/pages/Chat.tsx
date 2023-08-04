import { FormEvent, useState } from "react";
import { io } from "socket.io-client";
const socket = io("ws://localhost:9000");

export default function Chat() {
	const [message, setMessage] = useState("");
	const [messageList, setMessageList] = useState<string[]>([]);
	const [message2, setMessage2] = useState("");
	const [messageList2, setMessageList2] = useState<string[]>([]);

	socket.emit("join-a-room", "12", "");
	socket.emit("join-a-room", "89", "");

	// Incoming messages from other users
	socket.on("broadcast-message", (id: string, message: string) => {
		console.log(id);
		console.log(message);
		if (id === "12") setMessageList([...messageList, message]);
		else if (id === "89") setMessageList2([...messageList2, message]);
	});

	const hanldeSendText = (e: FormEvent) => {
		e.preventDefault();
		if (message === "") return;
		socket.emit("user-message", "12", message);
		setMessage("");
	};

	const hanldeSendText2 = (e: FormEvent) => {
		e.preventDefault();
		if (message2 === "") return;
		socket.emit("user-message", "89", message2);
		setMessage2("");
	};

	const messageListItems = messageList.map((message) => {
		return <p key={message}>{message}</p>;
	});
	const messageListItems2 = messageList2.map((message) => {
		return <p key={message}>{message}</p>;
	});

	return (
		<div className="flex gap-10">
			<section className="flex flex-col border-2 border-gray-500 min-h-screen">
				<div className="grow flex flex-col gap-10 items-center justify-end">
					{messageListItems}
				</div>
				<form onSubmit={hanldeSendText} className="flex gap-4">
					<input
						type="text"
						className="border-2 border-gray-700"
						value={message}
						onChange={(e) => setMessage(e.target.value)}
					/>
					<button className="bg-gray-800 text-white px-3 py-2 rounded-2xl">
						Send
					</button>
				</form>
			</section>
			<section className="flex flex-col border-2 border-gray-500 min-h-screen">
				<div className="grow flex flex-col gap-10 items-center justify-end">
					{messageListItems2}
				</div>
				<form onSubmit={hanldeSendText2} className="flex gap-4">
					<input
						type="text"
						className="border-2 border-gray-700"
						value={message2}
						onChange={(e) => setMessage2(e.target.value)}
					/>
					<button className="bg-gray-800 text-white px-3 py-2 rounded-2xl">
						Send
					</button>
				</form>
			</section>
		</div>
	);
}
