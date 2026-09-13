import React, { useState, useEffect } from "react";
import { getHotels, addHotel } from "./api";
import { getUserRole } from "./authUtils";   // <-- changed

export default function Hotels({ token }) {
  const [hotels, setHotels] = useState([]);
  const [name, setName] = useState("");
  const role = getUserRole(token);

  useEffect(() => {
    if (token) {
      getHotels(token).then((res) => setHotels(res.data));
    }
  }, [token]);

  const handleAdd = async () => {
    await addHotel({ name, address: "Test Address", pincode: "440001" }, token);
    const res = await getHotels(token);
    setHotels(res.data);
  };

  return (
    <div>
      <h2>Hotels</h2>
      <ul>
        {hotels.map((h) => (
          <li key={h.id}>{h.name} - {h.address}</li>
        ))}
      </ul>

      {(role === "ADMIN" || role === "HOTEL_OWNER") && (
        <div>
          <input
            placeholder="Hotel name"
            onChange={(e) => setName(e.target.value)}
          />
          <button onClick={handleAdd}>Add Hotel</button>
        </div>
      )}
    </div>
  );
}
