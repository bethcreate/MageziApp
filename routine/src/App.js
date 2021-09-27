import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Landing from './components/Landing/LandingPage';
import Register from './components/Register/Register';
import AssignChores from './components/Assign/Assign';
import Login from './components/Login/Login';
import TaskList from './components/AssignedTask/taskList';

function App() {
  return (
    
    <Router>
    <div className="App">
      <Route exact path="/" >
        <Landing/>
      </Route>
      
      <Route path="/Register">
      <Register/>
       </Route>

      <Route exact path="/Login" >
      <Login/>

      </Route>

      <Route exact path="/Assign" >
      <AssignChores/>

      </Route>

      <Route exact path="/AssinedTask" >
        <TaskList/>
      </Route>
    
    </div>
    </Router>  
  );

}
export default App;
