import React, { useState } from 'react'
import '../../App.css'
import Axios from 'axios';
import { Link } from 'react-router-dom';

function AssignChores() {
    const [Name, setName] = useState("");
    const [chore,setChore] = useState("");
    const [day,setDay] = useState("");

    const submitTask = (e) => {
        e.preventDefault();
        const submisson = {
            name: Name,
            chore:chore,
            day:day
        }

        Axios.post('http://localhost:5000/api/create', submisson);
    }

    return (
        <form className="assignform" onSubmit={submitTask}>
            <div>
                <h1>Assign children chores</h1>

                <h2>Day of the week</h2>
                <div className="days">
                    <select   onChange={(e) => {
                                setDay(e.target.value)
                            }}>
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
                                setChore(e.target.value)

                            }} />
                    </div>

                    <button>
                        <Link to="/AssinedTask" className="btn">Assign</Link>
                    </button>
                </div>
            </div>
        </form>
    )
}

export default AssignChores;

