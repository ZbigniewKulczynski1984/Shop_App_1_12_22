import React from 'react';
import './App.css';
import { Shop } from './features/cart/Shop';
import './../node_modules/bootstrap/dist/css/bootstrap.css';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Shop />
			</header>
		</div>
	);
}

export default App;
