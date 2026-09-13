// src/utils.js
export function getUserRole(token) {
  if (!token) return null;
  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    return payload.role;
  } catch (e) {
    console.error("Invalid token", e);
    return null;
  }
}
