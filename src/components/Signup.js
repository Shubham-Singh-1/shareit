import React, { Component } from 'react';

class Signup extends Component {
  render() {
    return (
      <form className="login-form">
        <span className="login-signup-header">Sign Up</span>
        <div className="field">
          <input type="text" placeholder="Name" required />
        </div>
        <div className="field">
          <input type="email" placeholder="Email" required />
        </div>
        <div className="field">
          <input type="password" placeholder="Password" />
        </div>
        <div className="field">
          <button>Log In</button>
        </div>
      </form>
    );
  }
}

export default Signup;
