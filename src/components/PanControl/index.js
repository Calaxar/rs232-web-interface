import ControlPad from './ControlPad';
import './PanControl.css';

const PanControl = () => {
	return (
		<div className='PanControl'>
			<h2>Pan</h2>
			<ControlPad/>
			<div className='SpeedSlider'>
				<h3>Speed: </h3>
				<input type="range" min="1" max="100"class="slider"></input>
			</div>
		</div>
	);
};

export default PanControl;