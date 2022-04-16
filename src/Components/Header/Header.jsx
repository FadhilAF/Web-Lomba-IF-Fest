import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<nav>
			<div>
				<span>e</span>Papua
			</div>
			<div>
				<Link to="/">Home</Link>
				<Link to="/folklore">Folk Lore</Link>
			</div>
			<div></div>
		</nav>
	);
};

export default Header;
