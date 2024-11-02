<template>
    <header class="header">
      <!-- Logo Section -->
      <div class="header__logo">
        <img src="../assets/RR_logo.jpeg" alt="Rozi Roti Logo - A bakery specializing in fresh bread and pastries" />
      </div>
  
      <!-- Navigation Section -->
      <nav class="header__nav">
        <ul class="header__nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Us</a></li>
        </ul>
      </nav>
  
      <!-- Authentication Section -->
      <div class="header__auth-buttons">
        <input
          type="text"
          placeholder="Search..."
          v-model="searchQuery"
          @keyup.enter="performSearch"
          class="header__search-bar"
        />
        <button class="auth-btn" @click="signUp">Sign Up</button>
        <button class="auth-btn" @click="login">Login</button>
      </div>
    </header>
  </template>
  
  <script>
  export default {
    name: "HeaderComponent",
    data() {
      return {
        searchQuery: "",
      };
    },
    methods: {
      signUp() {
        console.log("Sign Up clicked");
      },
      login() {
        console.log("Login clicked");
      },
      performSearch() {
        if (this.searchQuery) {
          console.log(`Searching for: ${this.searchQuery}`);
          // Implement actual search logic here
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Base styling */
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 1rem;
    background: linear-gradient(135deg, #45a834 0%, #3b8c2c 100%);
    color: #000000;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    position: sticky;
    top: 0;
    z-index: 100;
    border-radius: 15px; /* Rounded corners for the header */
  }
  
  /* Logo styling */
  .header__logo img {
    width: 120px;
    transition: transform 0.3s ease;
  }
  
  .header__logo img:hover {
    transform: scale(1.1);
  }
  
  /* Navigation styling */
  .header__nav {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .header__nav-links {
    display: flex;
    gap: 1.5rem;
    list-style: none;
    align-items: center;
  }
  
  .header__nav-links a {
    color: #000000;
    text-decoration: none;
    font-weight: 600;
    position: relative;
    padding: 0.5rem 0;
    transition: color 0.3s ease;
  }
  
  .header__nav-links a:hover {
    color: #ffffff; /* Darker shade on hover */
  }
  
  .header__nav-links a::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #000000;
    transition: width 0.3s ease;
  }
  
  .header__nav-links a:hover::after {
    width: 100%;
  }
  
  /* Search bar styling */
  .header__search-bar {
    padding: 0.5rem 1rem;
    border-radius: 20px;
    border: 1px solid #000000; /* Black border */
    outline: none;
    width: 180px;
    transition: width 0.3s ease;
  }
  
  .header__search-bar:focus {
    width: 220px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  }
  
  /* Authentication buttons */
  .header__auth-buttons {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  
  .auth-btn {
    padding: 0.8rem 1.5rem; /* Adjusted padding for a sleeker look */
    border-radius: 30px; /* More rounded corners for buttons */
    border: none; /* Remove border */
    background-color: #000000; /* Black background */
    color: #ffffff; /* White text */
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease, box-shadow 0.3s ease; /* Added box-shadow transition */
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); /* Subtle shadow for depth */
  }
  
  .auth-btn:hover {
    background-color: #45a834; /* Change to green on hover */
    color: white; /* Ensure text is white on hover */
    transform: scale(1.05); /* Slightly enlarge on hover */
  }
  
  /* Responsive Design */
  @media (max-width: 768px) {
    .header__nav-links {
      display: none;
    }
  
    .header__search-bar {
      width: 150px;
    }
  
    .header__auth-buttons {
      display: none;
    }
  }
  </style>
  