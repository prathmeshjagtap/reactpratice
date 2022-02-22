import React, { useState } from "react";

function AlphanumericPassword() {
	const [error, seterror] = useState("");

	const checkPassword = (password) => {
		var strongRegex = new RegExp("^(?=.*[0-9])");
		strongRegex.test(password)
			? seterror("password contains number")
			: seterror("password should contain number");
	};

	return (
		<div className="container">
			<input
				placeholder="Enter a Password with alleast one number"
				onChange={(e) => checkPassword(e.target.value)}
			/>

			{error}
		</div>
	);
}

export default AlphanumericPassword;
