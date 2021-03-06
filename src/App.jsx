import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import styles from "./App.module.css";

import Header from "./Components/Header/Header";
import Border from "./Components/Border/Border";

import Home from "./Pages/Home/Home";
import Culinary from "./Pages/Contents/Culinary/Culinary";
import CustomsTradition from "./Pages/Contents/CustomsTraditions/CustomsTraditions";

import ScrollToTop from "./Components/CustomHooks/ScrollToTop";

function App() {
	const location = useLocation();
	return (
		<div id={styles.App}> 
			<Header path={location.pathname} />
			<div className={styles.body}>
				<ScrollToTop />
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
