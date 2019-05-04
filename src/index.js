// Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";

import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

// Create a react function based component
const App = () => {
	return (
		<div className="ui container comments">
			<ApprovalCard>
				{" "}
				<div>
					<h4>Warning</h4>Are you sure you want to do this?
				</div>{" "}
			</ApprovalCard>

			<ApprovalCard>
				<CommentDetail
					author={faker.name.firstName()}
					timeAgo={"Today at 4:04"}
					text={faker.random.words()}
					avatar={faker.image.avatar()}
				/>{" "}
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail
					author={faker.name.firstName()}
					timeAgo="Today at 5:34"
					text={faker.random.words()}
					avatar={faker.image.avatar()}
				/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail
					author={faker.name.firstName()}
					timeAgo="Today at 10:23"
					text={faker.random.words()}
					avatar={faker.image.avatar()}
				/>
			</ApprovalCard>
		</div>
	);
};

// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
