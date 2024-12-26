import React from 'react';
import './App.css';
import Header from './components/Header'; // Ensure Header is correctly imported
import HeroSection from './components/HeroSection'; // Import HeroSection component
import Dashboard from './components/Dashboard'; // Import Dashboard component
import Footer from './components/Footer'; // Import Footer component

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection /> {/* Hero Section */}
      <Dashboard id="dashboard-section" /> {/* Add the Dashboard with an id for scrolling */}
      <Footer />
    </div>
  );
}

export default App;
