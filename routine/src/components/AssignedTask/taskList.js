import React from "react";
import { Link } from 'react-router-dom';

function TaskList(){
    return(
    <div>
        <h1>Children and their assigned chores in this week</h1>

        
      
      <div className="tasklist">
      <table>
          <thead>
          <tr>
            <th>Day</th>
          </tr>
          </thead>
          
        </table>
        
        <table>
          <thead>
          <tr>
            <th>Name</th>
          </tr>
          </thead>
          <table>
          <thead>
          <tr>
            <th>Task</th>
          </tr>
          </thead>
          
        </table>
          
        </table>
     
    </div>
 

        
        <button>
            <Link to= "/LandingPage" className="btn">Home</Link>
            </button>
    </div>

)}
export default TaskList