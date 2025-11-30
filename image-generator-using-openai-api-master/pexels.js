// pexels.js
// Your Pexels API key
const PEXELS_API_KEY = "Ig4EiRmznnksBGGuaePOb0MDN8FdXeBi9AAgav8GR78IlNRORaTje65l";

// Function to search images
async function searchImages(query, perPage = 5) {
  const res = await fetch(`https://api.pexels.com/v1/search?query=${query}&per_page=${perPage}`, {
    headers: {
      Authorization: PEXELS_API_KEY
    },
  });

  const data = await res.json();
  return data.photos; // array of images
}

// make function global
window.searchImages = searchImages;
