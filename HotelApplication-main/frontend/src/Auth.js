import React, { useState } from "react";
import { register, login } from "./api";

export default function Auth({ setToken }) {
  const [mode, setMode] = useState("login");
  const [form, setForm] = useState({ name:"", email:"", password:"", pincode:"440001" });
  const [message, setMessage] = useState("");
  const update = e => setForm({...form, [e.target.name]: e.target.value});

  const submit = async e => {
    e.preventDefault(); setMessage("");
    try {
      if (mode === "register") {
        await register({...form, role:"CUSTOMER"});
        setMessage("Account created. You can now sign in.");
        setMode("login");
      } else {
        const res = await login({email:form.email, password:form.password});
        setToken(typeof res.data === "string" ? res.data : res.data.token);
      }
    } catch (err) { setMessage(err.response?.data || "Something went wrong. Check the backend and try again."); }
  };

  return <main className="auth-wrap"><div className="auth-card">
    <p className="eyebrow">WELCOME TO AURELIA</p><h2>{mode === "login" ? "Welcome back." : "Begin your journey."}</h2>
    <form onSubmit={submit}>
      {mode === "register" && <input name="name" placeholder="Full name" value={form.name} onChange={update} required />}
      <input name="email" type="email" placeholder="Email address" value={form.email} onChange={update} required />
      <input name="password" type="password" placeholder="Password" value={form.password} onChange={update} required />
      <button className="primary-btn full" type="submit">{mode === "login" ? "Sign in" : "Create account"} ↗</button>
    </form>
    {message && <p className="form-message">{message}</p>}
    <button className="switch-btn" onClick={() => {setMode(mode==="login"?"register":"login");setMessage("");}}>{mode==="login"?"Need an account? Create one":"Already a member? Sign in"}</button>
  </div></main>;
}