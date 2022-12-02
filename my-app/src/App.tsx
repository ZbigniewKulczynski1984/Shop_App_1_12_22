import './App.css';
import { Shop } from './features/cart/Shop';
import './../node_modules/bootstrap/dist/css/bootstrap.css';
import { Navbar } from './Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Shop />
    </div>
  );
}

export default App;
