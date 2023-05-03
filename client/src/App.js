import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import OtherPage from './OtherPage';
import Fib from './Fib';

// The BrowserRouter component is the brains of react-router. It tells react-router how to behave and looks at the current URL and changes the set of components visible on the screen accordingly.

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className = "App-title">Welcome to React</h1>
          <Link to="/">Home</Link>  
          <Link to="/otherpage">Other Page</Link>
        </header>
        <div>
          <Route exact path="/" component={Fib} />
          <Route exact path="/otherpage" component={OtherPage} /> 
        </div>
      </div>
    </Router>
  );
}

export default App;
