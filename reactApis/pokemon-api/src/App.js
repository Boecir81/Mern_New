import logo from './logo.svg';
import './App.css';
import PokemonGenerator from './components/PokemonGenerator';
import PokemonGeneratorWithAixos from './components/PokemonGeneratorWithAixos';



function App() {
  return (
    <div className="App container">
      <h1 className="text-warning">PokeMon</h1>
      {/* <PokemonGenerator></PokemonGenerator> */}
      <PokemonGeneratorWithAixos></PokemonGeneratorWithAixos>
    </div>
  );
}

export default App;
