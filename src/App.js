import './App.css';
import { Route } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

function App() {
  return (
    <div className="App">
      <form>
        <label>Enter Email</label>
        <input type='email'/>
        <label>Enter Password</label>
        <input type='password'/>
        <label>Enter Password Again</label>
        <input type='password'/>
      </form>
    </div>
  );
}

export default App;
