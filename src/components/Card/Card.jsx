import './Card.css'

export function Card({ title, image, height = "medium", ...others }) {

	const heightMap = {
		big: '500px',
		medium: '422px',
	};

	let computedHeight;
	if (typeof height === 'number') {
		computedHeight = `${height}px`;
	} else {
		computedHeight = heightMap[height] || height;
	}

	const styles = {
		backgroundImage: `url(${image})`,
		height: computedHeight,
	};
	return (
		<article
			style={styles}
			className="Card-main-container"
			{...others}
		>
			<div className="Card-title-container">
				<h3>{title}</h3>
			</div>
		</article>
	)
}
