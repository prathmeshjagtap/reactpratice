import React, { useState, useEffect } from "react";

function CounterButton() {
	const [counter, setcounter] = useState(0);

	useEffect(() => {
		console.log(counter);
	});
	return (
		<div className="container">
			{counter}
			<button onClick={() => setcounter((counter) => counter + 1)}>
				Increment
			</button>
			<button onClick={() => setcounter((counter) => counter - 1)}>
				Decrement
			</button>
		</div>
	);
}

export default CounterButton;

//Create a button and increment a counter every time that button is clicked. Using the syntax shown above, log the counter on console after every render.
