import logo from './logo.svg';
import './App.css';
import PetForm from './components/PetForm';
import PetFormOneObjectStateWay from './components/PetFormOneObjectStateWay';

function App() {
  return (
    <div className="App container">
      <h1 className="text-primary">Pet Form</h1>
      {/* <PetForm></PetForm> */}
      <PetFormOneObjectStateWay></PetFormOneObjectStateWay>
    </div>
  );
}

export default App;
