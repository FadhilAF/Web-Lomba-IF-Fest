import React from "react";

import styles from "./Home.module.css";
import { Link } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
	// Global settings:
	disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
	startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
	initClassName: "aos-init", // class applied after initialization
	animatedClassName: "aos-animate", // class applied on animation
	useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
	disableMutationObserver: false, // disables automatic mutations' detections (advanced)
	debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
	throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

	// Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
	offset: 120, // offset (in px) from the original trigger point
	delay: 0, // values from 0 to 3000, with step 50ms
	duration: 500, // values from 0 to 3000, with step 50ms
	easing: "ease", // default easing for AOS animations
	once: false, // whether animation should happen only once - while scrolling down
	mirror: false, // whether elements should animate out while scrolling past them
	anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});

const Home = () => {

	return (
		<div>
			<section className={styles.hero}>
				<div className={styles.title} data-aos="flip-left">
					<h1>Papua Barat</h1>
				</div>
			</section>
			<section className={styles.categories}>
				<Link to={"/customs"}>
					<div
						className={`${styles.category} ${styles.custom}`}
						data-aos="fade-right"
					>
						<div className={styles.categoryTitle}>
							<h2>Customs & Tradition</h2>
						</div>
					</div>
				</Link>
				<Link to={"/culinary"}>
					<div
						className={`${styles.category} ${styles.culinary}`}
						data-aos="fade-left"
					>
						<div className={styles.categoryTitle}>
							<h2>Culinary</h2>
						</div>
					</div>
				</Link>
			</section>
		</div>
	);
};

export default Home;
