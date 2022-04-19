import styles from "./Hero.module.css";

const Hero = (props) => {
	return (
		<div className={styles.hero}>
			<div className={styles.heroTitle}>
				<h2>{props.title}</h2>
			</div>
			<div className={styles.heroContent}>
				<p>{props.content}</p>
			</div>
		</div>
	);
};

export default Hero;
