import logo from './logo.svg';
import CoinGenerator from './components/CoinGenerator';
import CoinGeneratorWithAixos from './components/CoinGeneratorWithAxios';
import './App.css';

function App() {
  return (
    <div className="App container">
      <h1 className="text-warning mt-3">Crypto Coin Value</h1>
      {/* <CoinGenerator></CoinGenerator> */}
      <CoinGeneratorWithAixos></CoinGeneratorWithAixos>
    </div>
  );
}

export default App;
