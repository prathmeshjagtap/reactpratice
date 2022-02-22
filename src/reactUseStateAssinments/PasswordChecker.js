import React, { useState } from "react";

function PasswordChecker() {
	const [password, setpassword] = useState("");
	const [confirmPassword, setconfirmPassword] = useState("");
	const [error, setError] = useState(false);

	const passwordMatch = () => {
		password === confirmPassword ? setError(false) : setError(true);
	};
	return (
		<div className="container">
			<input
				placeholder="Enter Password"
				value={password}
				onChange={(e) => setpassword(e.target.value)}
			/>
			<input
				placeholder="Enter confirm Password"
				value={confirmPassword}
				onChange={(e) => setconfirmPassword(e.target.value)}
			/>
			{error && "Password does not match"}
			<button onClick={passwordMatch}>Check</button>
		</div>
	);
}

export default PasswordChecker;
