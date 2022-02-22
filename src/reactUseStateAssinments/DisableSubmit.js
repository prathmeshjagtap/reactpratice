import React, { useState } from "react";

function DisableSubmit() {
	const [password, setpassword] = useState("");
	const [disable, setDisable] = useState(" ");
	const disableButton = (confirmPassword) => {
		password === confirmPassword ? setDisable("") : setDisable(true);
	};

	return (
		<div className="container">
			<input
				placeholder="Enter Password"
				value={password}
				onChange={(e) => setpassword(e.target.value)}
			/>
			<input
				placeholder="Confirm Password"
				onChange={(e) => disableButton(e.target.value)}
			/>
			<button
				onClick={() => console.log({ password })}
				className="submitBtn"
				disabled={disable}
			>
				Submit
			</button>
		</div>
	);
}

export default DisableSubmit;
