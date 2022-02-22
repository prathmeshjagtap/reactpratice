import React, { useState } from "react";

// Create a password reset form
// Put a button show password near the input element.
// Clicking should show password to the user.
// Text on show password should change to hide password when password is shown.
// Click on hide password and password goes back to hidden again.

function ShowPassword() {
	const [button, setButton] = useState(false);
	const [password, setpassword] = useState("");
	const [passwordShow, setpasswordShow] = useState(false);

	const showPassword = () => {
		setpasswordShow(!passwordShow);
		setButton(!button);
	};

	return (
		<div className="container">
			<input
				placeholder="enter Password"
				type="password"
				value={password}
				onChange={(e) => setpassword(e.target.value)}
			/>
			{passwordShow && password}
			<button onClick={showPassword}>
				{button ? "Hide Password" : "show Password"}
			</button>
		</div>
	);
}

export default ShowPassword;
