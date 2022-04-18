import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = (props) => {
	return (
		<div
			className={`${styles.container} ${
				props.path !== "/" && styles["home-container"]
			}`}
		>
			<nav className={styles.navbar}>
				<div className={styles.logo}>
					<Link to={"/"}>
						<span>Wonderful</span> Papua
					</Link>
				</div>
				<div className={styles["nav-links"]}>
					<div>
						<Link to={"/"}>Home</Link>
					</div>
					<div>
						<Link to={"/customs"}>Customs</Link>
					</div>
					<div>
						<Link to={"/culinary"}>Culinary</Link>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Header;
