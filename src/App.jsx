import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import styles from "./App.module.css";

import Header from "./Components/Header/Header";
import Border from "./Components/Border/Border";

import Home from "./Pages/Home/Home";
import Culinary from "./Pages/Culinary/Culinary";
import CustomsTradition from "./Pages/CustomsTradition/CustomsTradition";

function App() {
	const location = useLocation();
	return (
		<div className={styles.App}>
			<Header path={location.pathname} />
			<div className={styles.body}>
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="/culinary" element={<Culinary />} />
					<Route
						exact
						path="/customs"
						element={<CustomsTradition />}
					/>
				</Routes>
			</div>
			<Border />
		</div>
	);
}

export default App;
