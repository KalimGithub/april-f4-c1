import React, { useState } from "react";

const Home = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className="home">
      <form>
        <label>Email:</label>
        <br />
        <input
          type="email"
          placeholder="Enter your Email"
          id="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label>Password:</label>
        <br />
        <input
          type="password"
          placeholder="Enter your password"
          id="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <label>Confirm password:</label>
        <br />
        <input
          type="password"
          placeholder="Enter your confirm password"
          id="confirm-password"
          required
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <br />
      </form>
    </div>
  );
};

export default Home;
