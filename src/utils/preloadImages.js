// src/utils/imagePreloader.js
export function preloadImages(imageArray = []) {
    imageArray.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }
  