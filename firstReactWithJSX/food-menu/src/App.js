import logo from './logo.svg';
import './App.css';
import MenuItem from './components/MenuItem';

function App() {
  return (
    <div className="App">
      <h1>Dojo Diner Menu</h1>
      <hr />
      <MenuItem
        dishName={"Hamburgers"}
        dishPrice={10.00}
        dishLikes={5}
        dishDescription={"The Best Burgers in town"}>
      </MenuItem>
      <MenuItem
        dishName={"Spaggetti"}
        dishPrice={12.55}
        dishLikes={8}
        dishDescription={"100 Year old sauce recipe, Best Spaggetti"}>
      </MenuItem>
      <MenuItem
        dishName={"Chicken Tenders & Friends"}
        dishPrice={8.89}
        dishlikes={9}
        dishDescription={"Best Tenders and fries in 20 mile circle"}>
      </MenuItem>
      <MenuItem
        dishName={"Vegtable Hamburger Soup"}
        dishPrice={4.99}
        dishLikes={14}
        dishDescription={"Grandma's Veg Soup Homemade"}>
      </MenuItem>
    </div>
  );
}

export default App;
