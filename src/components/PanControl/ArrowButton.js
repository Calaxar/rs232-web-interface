const ArrowButton = props => {
	return (
		<div className="ArrowButton">
			<img className={props.className} draggable="false" src="arrow_forward.svg" onMouseDown={() => { }} onMouseUp={() => { }} />
		</div>
	);
};

export default ArrowButton;