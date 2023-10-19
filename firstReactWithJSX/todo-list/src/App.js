import logo from './logo.svg';
import './App.css';
import TodoListForm from './components/TodoListForm';

function App() {
  return (
    <div className="App container">
      <h1 className="text-primary">ToDo List</h1>
      <TodoListForm></TodoListForm>
    </div>
  );
}

export default App;
