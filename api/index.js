import { MOVIE, MOVIES } from "../constants/paths";
import { API_BASE } from "../constants/urls";

const API = Object.create(null);

API.addMovie = async movieData => {
  const res = await fetch(`${API_BASE}${MOVIES}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(movieData),
  });

  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }

  return res.json();
};

API.deleteMovie = async id => {
  const res = await fetch(`${API_BASE}${MOVIE(id)}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }

  return res.json();
};

API.updateMovie = async (id, movieData) => {
  const res = await fetch(`${API_BASE}${MOVIE(id)}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(movieData),
  });

  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }

  return res.json();
};

export default API;
