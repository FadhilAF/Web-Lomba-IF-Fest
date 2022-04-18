import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import styles from "./App.module.css";
import Header from "./Components/Header/Header";
import Culinary from "./Pages/Culinary/Culinary";
import Home from "./Pages/Home/Home";
import Border from "./Components/Border/Border"

function App() {

	return (
		<div className={styles.App}>
			<Header />
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/culinary" element={<Culinary />} />
			</Routes>
			<Border />
		</div>
	);
}

export default App;
