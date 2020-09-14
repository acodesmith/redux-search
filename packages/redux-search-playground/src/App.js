import React from "react";
import { useDispatch } from "react-redux";

export const App = () => {
	const dispatch = useDispatch();

	return (
		<section>
			<p>This is a basic app.</p>
			<button
				onClick={() => {
					dispatch({ type: "Test", payload: "Anything" });
				}}
			>
				Dispatch Action
			</button>
			<button
				onClick={() => {
					window.postMessage(
						{ type: "FROM_PAGE", text: "Hello from the webpage!" },
						"*"
					);
				}}
			>
				Send Message
			</button>
		</section>
	);
};
