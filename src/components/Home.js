import React, { useState } from "react";

const Home = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function handleclick(e) {
    if (password !== confirmPassword) {
      e.preventDefault();
      alert("Passwords do not match");
    } else if (email.includes("@") && email.includes(".com") && password) {
      alert("Signup successful");
    }
  }

  return (
    <div className="home">
      <form>
        <label>Email:</label>
        <br />
        <input
          className="red"
          type="email"
          placeholder="Enter your Email"
          id="email"
          required
          value={email}
          onChange={(e) => {
            if (e.target.value.includes("@")) {
              e.target.className = "green";
            } else {
              e.target.className = "red";
            }

            setEmail(e.target.value);
          }}
        />
        <br />
        <label>Password:</label>
        <br />
        <input
          className="red"
          type="password"
          placeholder="Enter your password"
          id="password"
          required
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            if (e.target.value.length >= 6) {
              e.target.className = "green";
            } else {
              e.target.className = "red";
            }
          }}
        />
        <br />
        <label>Confirm password:</label>
        <br />
        <input
          className="red"
          type="password"
          placeholder="Enter your confirm password"
          id="confirm-password"
          required
          value={confirmPassword}
          onChange={(e) => {
            setConfirmPassword(e.target.value);
            if (password.length == confirmPassword.length + 1) {
              e.target.className = "green";
            } else {
              e.target.className = "red";
            }
          }}
        />
        <br />
        <button id="signup-btn" onClick={handleclick}>
          SignUp
        </button>
      </form>
    </div>
  );
};

export default Home;
