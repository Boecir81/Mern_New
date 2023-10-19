import logo from './logo.svg';
import './App.css';
import MenuItem from './components/MenuItem'

function App() {
  return (
    <div className="App">
      <h1>Brian Rice Is I and I am Him!!!</h1>
      <h2>Time to take the next step fuckstick!!!!</h2>
      <MenuItem
        dishName={"Spagetti"}
        dishPrice={10.99}
        dishLikes={10}
        dishDescription={"Awesome"}>
      </MenuItem>
      <MenuItem
        dishName={"Hambuger"}
        dishPrice={7.99}
        dishLikes={5}
        dishDescription={"Hambuger"}>
      </MenuItem>
      <MenuItem
        dishName={"Chicken"}
        dishPrice={9.99}
        dishLikes={12}
        dishDescription={"Chicken"}>
      </MenuItem>
      <MenuItem
        dishName={"Tacos"}
        dishPrice={3.99}
        dishLikes={15}
        dishDescription={"Awesome Tacos"}>
      </MenuItem>
    </div>
  );
}

export default App;
