import logo from './logo.svg';
import './App.css';
import AppBar from './components/AppBar';
import PanControl from './components/PanControl';

function App() {
	return (
		<div className="App">
			<AppBar />
			<div className='Container'>
				<PanControl/>
			</div>
		</div>
	);
}

export default App;
