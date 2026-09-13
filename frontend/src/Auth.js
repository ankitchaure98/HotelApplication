import React, { useState } from "react";
import { register, login } from "./api";



export default function Auth({ setToken }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    await register({
      name: "Ankit",
      email,
      password,
      role: "CUSTOMER",
      pincode: "440001"
    });
    alert("User registered!");
  };

  const handleLogin = async () => {
    const res = await login({ email, password });
    setToken(res.data); // save JWT token
  };

  return (
    <div>
      <h2>Auth</h2>
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input
        placeholder="Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleRegister}>Register</button>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
