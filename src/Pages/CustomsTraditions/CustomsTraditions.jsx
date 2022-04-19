import styles from "./CustomsTraditions.module.css";

const CustomsTraditions = () => {
	return (
		<div>
			<section className={`${styles.content} ${styles.honai}`}>
				<div className={styles.hero}>
					<div className={styles.heroTitle}>
						<h2>Honai House</h2>
					</div>
					<div className={styles.heroContent}>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Repellat aliquam animi ducimus odit, molestias
							culpa magni incidunt nulla odio impedit sequi ipsum
							a blanditiis illum voluptatum. Quam nesciunt aliquid
							alias.
						</p>
					</div>
				</div>
			</section>
			<section className={`${styles.content} ${styles.cendrawasih}`}>
				<div className={styles.hero}>
					<div className={styles.heroTitle}>
						<h2>Cendrawasih Folklore</h2>
					</div>
					<div className={styles.heroContent}>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Repellat aliquam animi ducimus odit, molestias
							culpa magni incidunt nulla odio impedit sequi ipsum
							a blanditiis illum voluptatum. Quam nesciunt aliquid
							alias.
						</p>
					</div>
				</div>
			</section>
		</div>
	);
};

export default CustomsTraditions;
