import React, { useState } from "react";

function Todo() {
	const [input, setinput] = useState("");
	const [todos, setTodos] = useState([]);

	const addToDo = () => {
		setTodos([...todos, input]);
	};

	return (
		<div className="container">
			{/* https://codesandbox.io/s/todoapp-1pz7iz?file=/src/App.js */}
		</div>
	);
}

export default Todo;
