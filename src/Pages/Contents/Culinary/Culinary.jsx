import contentsStyles from "../Contents.module.css";
import culinaryStyles from "./Culinary.module.css";

const Culinary = () => {
	return (
		<div>
			<section className={`${contentsStyles.content} ${culinaryStyles.papeda}`}>
				<div className={contentsStyles.hero}>
					<div className={contentsStyles.heroTitle}>
						<h2>Papeda</h2>
					</div>
					<div className={contentsStyles.heroContent}>
						<p>
							Brrr
						</p>
					</div>
				</div>
			</section>
			<section className={`${contentsStyles.content} ${culinaryStyles.caterpillar}`}>
				<div className={contentsStyles.hero}>
					<div className={contentsStyles.heroTitle}>
						<h2>Sagoo Caterpillar</h2>
					</div>
					<div className={contentsStyles.heroContent}>
						<p>
							Brr
						</p>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Culinary;
