import React, { useState } from "react";
import About from "./About";
import Home from "./Home";
import Profile from "./Profile";

// Make three components: Home, About, Profile.
// Put some text in the components
// Now, create three buttons with same name
// Clicking on the button should show that component
// UNDERSTANDING : this is kind of your own router, unless we get into router implementation.

function SwitchTabs() {
	const [tabs, settabs] = useState("");

	return (
		<div className="container">
			<button onClick={() => settabs(<Home />)}>Home</button>
			<button onClick={() => settabs(<About />)}>About</button>
			<button onClick={() => settabs(<Profile />)}>Profile</button>
			{tabs}
		</div>
	);
}

export default SwitchTabs;
