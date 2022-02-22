import React, { useState } from "react";

function CharacterCount() {
	const [count, setCount] = useState(0);
	return (
		<div className="container">
			<input
				type="text"
				placeholder="Enter your Tweet"
				onChange={(e) => setCount(120 - e.target.value.length)}
			/>
			{count}
		</div>
	);
}

export default CharacterCount;
