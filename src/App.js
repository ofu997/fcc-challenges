import logo from './logo.svg';
import './App.css';
import Reverse from './Challenges/Reverse';
import Factorial from './Challenges/Factorial';

function App() {
  return (
    <div className="App" style={{ backgroundColor: '#eee2dc' }}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Reverse />
      <Factorial />
    </div>
  );
}

export default App;
