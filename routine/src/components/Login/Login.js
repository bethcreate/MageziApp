import React from 'react'
import { Link } from 'react-router-dom';


function Login() {
  return (


    <div class="form">
      <h2 className="mylogin"> Login</h2>

      <form class="Login-form">

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

          <Link to="/Assign" className="btn2"> Login </Link>

        </button>
      </form>
    </div>
  );
}
export default Login