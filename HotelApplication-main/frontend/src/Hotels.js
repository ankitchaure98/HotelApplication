import React, { useEffect, useState } from "react";
import { getHotels, addHotel } from "./api";
import { getUserRole } from "./authUtils";

const images = ["https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=80","https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=900&q=80","https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=80"];

export default function Hotels({token}) {
 const [hotels,setHotels]=useState([]), [name,setName]=useState(""), [address,setAddress]=useState(""), [error,setError]=useState("");
 const role=getUserRole(token);
 const load=()=>getHotels(token).then(r=>setHotels(r.data)).catch(()=>setError("Could not load hotels. Is the Java backend running?"));
 useEffect(()=>{if(token)load();},[token]);
 const add=async e=>{e.preventDefault();try{await addHotel({name,address,pincode:"440001"},token);setName("");setAddress("");load();}catch{setError("Unable to add hotel.");}};
 return <main className="hotels-page"><div className="page-heading"><div><p className="eyebrow">THE COLLECTION</p><h1>Find your next<br/><em>beautiful stay.</em></h1></div><p>Explore the hotels currently available in your collection.</p></div>
 {error&&<p className="form-message">{error}</p>}
 <div className="hotel-grid">{hotels.map((h,i)=><article className="hotel-card" key={h.id}><img src={images[i%images.length]} alt={h.name}/><div className="hotel-info"><span className="hotel-number">0{i+1}</span><h3>{h.name}</h3><p>{h.address || "Aurelia destination"}</p><button className="text-btn">View details ↗</button></div></article>)}</div>
 {!hotels.length&&!error&&<div className="empty-state">Your collection is waiting for its first stay.</div>}
 {(role==="ADMIN"||role==="HOTEL_OWNER")&&<form className="add-form" onSubmit={add}><h3>Add a hotel</h3><input placeholder="Hotel name" value={name} onChange={e=>setName(e.target.value)} required/><input placeholder="Address" value={address} onChange={e=>setAddress(e.target.value)} required/><button className="primary-btn" type="submit">Add hotel ↗</button></form>}
 </main>;
}