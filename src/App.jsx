import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import styles from "./App.module.css";
import Header from "./Components/Header/Header";
import About from "./Pages/FolkLore/FolkLore";
import Home from "./Pages/Home/Home";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className={styles.App}>
			<Header />
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/folklore" element={<About />} />
			</Routes>
		</div>
	);
}

export default App;
