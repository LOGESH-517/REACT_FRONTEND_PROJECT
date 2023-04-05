import React, { useState } from 'react';
function Head1() {
  const [showModal, setShowModal] = useState(false);

  const handleLoginClick = () => {
    setShowModal(true);
  }

  return (
    <div>

    <header className="cofhead">
      <h1>SNACK STOP</h1>
      <h4>---GRAB YOUR HAPPIEST MOMENT---</h4>
      <button className="login-btn" onClick={handleLoginClick}>Login</button>
      <button className="login-btn" onClick={handleLoginClick}>Signup</button>
      {showModal && (
          <div className="modal">
          <div className="modal-content">
            <h2>Login</h2>
            <form>
              <label>Username:</label>
              <input type="text" />
              <br />
              <label>Password:</label>
              <input type="password" />
              <br />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
    </header>
      </div>
  );
}

export default Head1;