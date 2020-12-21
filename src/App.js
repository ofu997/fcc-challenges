import logo from './logo.svg';
import './App.css';
import Reverse from './Challenges/Reverse';
import Factorial from './Challenges/Factorial';
import Palindrome from './Challenges/Palindrome'
import LongestWord from './Challenges/LongestWordInAString'
import TitleCase from './Challenges/TitleCase'

function App() {
  return (
    <div className="App">
      <header className="App-header" style={{ backgroundColor: 'black' }}>
        {/* <img src={logo} className="App-logo" alt="logo" />
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
        </a> */}
        <nav style={{ display: 'flex', justifyContent: 'space-around' }}>
          <p>element</p>
          <p>second element</p>
        </nav>
      </header>
      <section>
        <div>        
          <Reverse />
        </div>
        <div>
          <Factorial />
        </div>
        <div>
          <Palindrome />
        </div>
        <div>
          <LongestWord />
        </div>
        <div>
          <TitleCase />
        </div>
      </section>

    </div>
  );
}

export default App;
