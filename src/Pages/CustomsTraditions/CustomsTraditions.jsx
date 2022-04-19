import Hero from "../../Components/Hero/Hero";
import styles from "./CustomsTraditions.module.css";

const CustomsTraditions = () => {
	return (
		<div>
			<section className={`${styles.content} ${styles.honai}`}>
				<Hero
					title="Honai"
					content="Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Repellat aliquam animi ducimus odit, molestias
							culpa magni incidunt nulla odio impedit sequi ipsum
							a blanditiis illum voluptatum. Quam nesciunt aliquid
							alias."
				/>
			</section>
			<section className={`${styles.content} ${styles.cendrawasih}`}>
				<Hero
					title="Cendrawasih Folk Lore"
					content="Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Repellat aliquam animi ducimus odit, molestias
							culpa magni incidunt nulla odio impedit sequi ipsum
							a blanditiis illum voluptatum. Quam nesciunt aliquid
							alias."
				/>
			</section>
		</div>
	);
};

export default CustomsTraditions;
