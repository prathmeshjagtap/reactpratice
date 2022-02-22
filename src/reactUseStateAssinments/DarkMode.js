import React, { useState } from "react";

// Create a toggle dark mode button
// Clicking on the button should change background and text color and toggle between dark and light mode

function DarkMode() {
	const [toggle, settoggle] = useState(true);

	const changemode = () => {
		settoggle((toggle) => !toggle);
		toggle
			? document.body.classList.add("dark__mode")
			: document.body.classList.remove("dark__mode");
	};

	return (
		<div className="container">
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
				officiis sed reprehenderit quam repudiandae quis similique voluptatibus
				sapiente quibusdam maxime esse dignissimos pariatur rem fugiat.
			</p>
			<button onClick={changemode}>Dark Mode</button>
		</div>
	);
}

export default DarkMode;
