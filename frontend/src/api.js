import axios from "axios";

const API_URL = "http://localhost:8080/api";

export const register = (user) =>
  axios.post(`${API_URL}/auth/register`, user);

export const login = (credentials) =>
  axios.post(`${API_URL}/auth/login`, credentials);

export const getHotels = (token) =>
  axios.get(`${API_URL}/hotels`, {
    headers: { Authorization: `Bearer ${token}` }
  });

export const addHotel = (hotel, token) =>
  axios.post(`${API_URL}/hotels/add`, hotel, {
    headers: { Authorization: `Bearer ${token}` }
  });
