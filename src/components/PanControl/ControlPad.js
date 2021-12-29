import ArrowButton from "./ArrowButton";

const ControlPad = () => {
	return (
		<div className="ControlPadContainer">
			<div className="ControlPadRow">
				<ArrowButton className="UpLeft" />
				<ArrowButton className="Up" />
				<ArrowButton className="UpRight" />
			</div>
			<div className="ControlPadMiddle">
				<ArrowButton className="Left" />
				<div className="PadDivider"></div>
				<ArrowButton className="Right" />
			</div>
			<div className="ControlPadRow">
				<ArrowButton className="DownLeft" />
				<ArrowButton className="Down" />
				<ArrowButton className="DownRight" />
			</div>
		</div>
	);
};

export default ControlPad;