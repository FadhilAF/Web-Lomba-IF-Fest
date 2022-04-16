import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

import unesco from "../../Assets/unesco.png";

const Header = () => {
	return (
		<nav className={styles.navbar}>
			<div className={styles.logo}>
				<span>e</span>Papua
			</div>
			<div className={styles["nav-links"]}>
				<div>
					<Link to="/">Home</Link>
				</div>
				<div>
					<Link to="/folklore">Folk Lore</Link>
				</div>
			</div>
			<div className={styles.unesco}>
				<img src={unesco} alt="unesco-logo" />
			</div>
		</nav>
	);
};

export default Header;
