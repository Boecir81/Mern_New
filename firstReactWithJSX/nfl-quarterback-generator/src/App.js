import logo from './logo.svg';
import './App.css';
import QuarterbackForm from './components/QuarterbackForm';

function App() {
  return (
    <div className="App container ">
      <h1 className="text-success">Quarterbacks in the NFL</h1>
      <QuarterbackForm></QuarterbackForm>
    </div>
  );
}

export default App;
