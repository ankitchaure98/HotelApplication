import React, { useState } from "react";
import Auth from "./Auth";
import Hotels from "./Hotels";

function App() {
  const [token, setToken] = useState(null);

  return (
    <div>
      <h1>Hotel App Frontend</h1>
      {!token ? <Auth setToken={setToken} /> : <Hotels token={token} />}
    </div>
  );
}

export default App;
