import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={process.env.PUBLIC_URL + '/logo123.png'}
          className="App-logo"
          alt="logo"
        />
        <p>大佬CODE FOR FOOD</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          QUIT IT
        </a>
      </header>
    </div>
  );
}

export default App;
