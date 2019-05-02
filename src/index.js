// Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

// Create a react function based component
const App = () => {
	const buttonText = { text: "Click me!" };
	const style = { backgroundColor: "blue", color: "white" };
	const enterName = "Enter name: ";

	// JSX
	return (
		<div>
			<label className="label" htmlFor="name">
				{enterName}
			</label>
			<input id="name" type="text" />
			<button style={style}>{buttonText.text}</button>
		</div>
	);
};

// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
