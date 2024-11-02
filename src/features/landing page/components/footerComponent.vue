<template>
    <footer class="footer">
      <div class="footer__content">
        <div class="footer__logo">
          <img src="../assets/RR_logo.jpeg" alt="Rozi Roti Logo" />
        </div>
  
        <div class="footer__contact">
          <h4>Contact Us</h4>
        </div>
  
        <div class="footer__social">
          <div class="social-icons">
            <a href="#" aria-label="Facebook"><img src="../assets/facebook-icon.png" alt="Facebook" /></a>
            <a href="#" aria-label="Twitter"><img src="../assets/twitter-icon.png" alt="Twitter" /></a>
            <a href="#" aria-label="Instagram"><img src="../assets/instagram-icon.jpeg" alt="Instagram" /></a>
            <a href="#" aria-label="LinkedIn"><img src="../assets/linkedin-icon.png" alt="LinkedIn" /></a>
          </div>
        </div>
      </div>
  
      <div class="tabbed-footer">
        <div class="tabs">
          <button 
            v-for="(location, index) in locations" 
            :key="index" 
            :class="{ active: selectedTab === index }" 
            @mouseover="selectTab(index)"
          >
            {{ location.city }}
          </button>
        </div>
  
        <div class="tab-content">
          <div v-for="(location, index) in locations" :key="index" v-show="selectedTab === index">
            <h4>{{ location.city }}</h4>
            <p>{{ location.address }}</p>
            <p>Tel: {{ location.phone }}</p>
          </div>
        </div>
      </div>
  
      <div class="footer__policies">
        <p>Copyright Standard Touch | e–Solutions | All rights Reserved</p>
        <p>
          <a href="#privacy-policy">Privacy Policy</a> | 
          <a href="#terms-conditions">Terms & Conditions</a> | 
          <a href="#refund-policy">Refund Policy</a>
        </p>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: "FooterComponent",
    data() {
      return {
        locations: [
          { city: 'India', address: '1-1165/5e, First Floor, Glass House, Aiwan-E-Shahi Area, Gulbarga, Karnataka – 585102, India.', phone: '+91 94816 35967, +91 94816 35969' },
          { city: 'Riyadh', address: 'P.O. Box 385038, Riyadh 11355, Saudi Arabia.', phone: '+966 59 115 3847, +966 560916906' },
          { city: 'UAE', address: '712, Sunshine Building, Al Garhoud, Dubai. Near Airport Road.', phone: '+971 50 910 8646' },
          { city: 'Jeddah', address: 'Zahran Business Center, Prince Sultan Rd, As Salamah, Jeddah 23525, Saudi Arabia.', phone: '+966 50 874 0811' },
          { city: 'Al Khobar', address: '19th Street, Al Shamalia, Al Khobar, Al Khobar 34426, Saudi Arabia.', phone: '+966 059 054 7780' },
          { city: 'Al Jubail', address: 'Near Shifa Polyclinic, Building No-4482, Al Taiseer Street, Safar Dist, Al Jubail 35514, Saudi Arabia.', phone: '+966 58 206 3855' },
        ],
        selectedTab: 0,
      };
    },
    methods: {
      selectTab(index) {
        this.selectedTab = index;
      },
    },
  };
  </script>
  
  <style scoped>
  .footer {
    display: flex;
    flex-direction: column;
    padding: 2rem 1rem;
    background: linear-gradient(135deg, #45a834 0%, #3b8c2c 100%);
    color: #000000;
    font-family: 'Helvetica Neue', sans-serif;
    border-radius: 15px; /* Rounded corners for the footer */
    overflow: hidden; /* Ensures rounded corners are respected */
  }
  
  /* Footer Content */
  .footer__content {
    display: flex;
    align-items: center; /* Center align items vertically */
    justify-content: space-between; /* Space out logo, contact, and social icons */
    width: 100%; /* Full width */
  }
  
  /* Logo styling */
  .footer__logo img {
    width: 150px;
  }
  
  /* Contact Us heading */
  .footer__contact {
    text-align: center;
  }
  
  /* Social Media Icons */
  .footer__social {
    text-align: right; /* Align icons to the right */
  }
  
  .social-icons {
    display: flex;
    justify-content: flex-end; /* Align icons to the right */
    gap: 1rem;
  }
  
  .social-icons img {
    width: 30px; /* Icon size */
    transition: transform 0.3s ease; /* Animation for hover effect */
  }
  
  .social-icons a:hover img {
    transform: scale(1.1); /* Enlarge on hover */
  }
  
  /* Tabbed interface */
  .tabbed-footer {
    width: 100%;
  }
  
  .tabs {
    display: flex;
    justify-content: space-around;
  }
  
  .tabs button {
    background-color: #000000;
    color: #ffffff;
    border: none;
    padding: 0.8rem 1.5rem; /* Adjusted padding for sleeker look */
    cursor: pointer;
    border-radius: 30px; /* More rounded corners for tabs */
    transition: background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease; /* Added box-shadow */
    font-weight: bold;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); /* Subtle shadow for depth */
  }
  
  .tabs button:hover {
    background-color: #45a834; /* Change color on hover */
    transform: scale(1.05); /* Slightly enlarge on hover */
  }
  
  .tabs button.active {
    background-color: #45a834; /* Active tab color */
  }
  
  .tab-content {
    margin-top: 1rem;
    border-radius: 10px; /* Rounded corners for content */
    padding: 1rem;
    background-color: rgba(255, 255, 255, 0.9); /* Subtle background for content */
    transition: opacity 0.3s ease; /* Smooth transition for content */
  }
  
  /* Policies section */
  .footer__policies {
    text-align: center;
    font-size: 0.9rem;
    color: #ffffff;
    margin-top: 1rem;
  }
  
  .footer__policies a {
    color: #ffffff;
    text-decoration: none;
    margin: 0 0.5rem;
    transition: color 0.3s ease;
  }
  
  .footer__policies a:hover {
    text-decoration: underline;
    color: #45a834; /* Change link color on hover */
  }
  </style>
  