import React, { useState } from 'react'
import '../../App.css'
import Axios from 'axios';
import { Link } from 'react-router-dom';

function AssignChores() {
    const [Name, setName] = useState("");
    const [setChore] = useState("");
    const [setTask] = useState("");

    const submitTask = () => {
        Axios.Child('http://localhost:5000/api/create', { Name: Name, });
    }

    return (
        <form className="assignform">
            <div>
                <h1>Assign children chores</h1>

                <h2>Day of the week</h2>
                <div className="days">
                    <select>
                        <option placeholder="Monday" />
                        <option>Tuesday</option>
                        <option>Wednesday</option>
                        <option>Thursday</option>
                        <option>Friday</option>
                        <option>Saturday</option>
                        <option>Sunday</option>

                    </select>
                </div>
                <div className="assignform">
                    <h3 className="child">Child</h3>
                    <h3 className="chore">Chores</h3>

                    <div className="lable">

                        <label>Name: </label>
                        <input type="text"
                            placeholder='Add a name'
                            onChange={(e) => {
                                setName(e.target.value)
                            }} />
                        <label>Chore: </label>
                        <input type="text"
                            placeholder='Add chore'
                            onChange={(e) => {

                            }} />
                    </div>

                    <button>
                        <Link to="/taskList" className="btn">Assign</Link>
                    </button>
                </div>
            </div>
        </form>
    )
}

export default AssignChores;

