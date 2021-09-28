import React from 'react'
import { Link } from 'react-router-dom';
// import {BrowserRouter as Router, Route} from 'react-router-dom';

function Register() {
  <div>
    <h1>Register/Login as a parent</h1>
  </div>

  return (

    <div class="form-container">

      <form class="register-form">
        <h2>Register</h2>
        <input
          id="Name"
          class="form-field"
          type="text"
          placeholder="Name"
          name="Name"
        />

        <input
          id="Email"
          class="form-field"
          type="text"
          placeholder="Email"
          name="Email"
        />

        <input
          id="Password"
          class="form-field"
          type="text"
          placeholder="Password"
          name="Password"
        />

        <button>
          <Link to="/Login" className="btn">Register</Link>
        </button>

      </form>
    </div>
  );
}
export default Register;