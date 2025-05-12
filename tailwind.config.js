// Add this to your tailwind.config.js file
/** @type {import('tailwindcss').Config} */
module.exports = {
  // ... your other config
  theme: {
    extend: {
      // ... your other extensions
      backgroundImage: {
        "vintage-pattern": 'url("../assets/vintage.webp")',
      },
      backgroundPosition: {
        "header-position": "-8.5px -6.621px",
      },
      backgroundSize: {
        "header-size": "101.126% 109.77%",
      },
    },
  },
};
