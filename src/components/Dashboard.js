import React, { useState } from 'react';
import './Dashboard.css';

const Dashboard = () => {
  // State to manage the visibility of the dropdown lists on hover
  const [showResources, setShowResources] = useState(false);
  const [showEducation, setShowEducation] = useState(false);

  return (
    <div className="dashboard">
      <section id="dashboard-section">
        <div className="dashboard-main-content">
          {/* Welcome Section */}
          <section className="welcome">
            <h2>Welcome to the Family Health Education Portal</h2>
            <p>
            Access reliable resources, expert guidance, and innovative tools to enhance your family's health and well-being. 
            From practical tips on nutrition and exercise to personalized health plans and mental wellness strategies, 
            we provide everything you need to make informed decisions and create a healthier, happier lifestyle for your loved ones.
          </p>
          </section>

          {/* Buttons for Resources and Education */}
          <div className="button-container">
            {/* Resources Button */}
            <button
              className="dropdown-button"
              onMouseEnter={() => setShowResources(true)}
              onMouseLeave={() => setShowResources(false)}
            >
              Health Resources
            </button>
            {showResources && (
              <ul className="dropdown-list">  
                <li><a href="/resources/health-tips">Health Tips</a></li>
                <li><a href="/resources/nutrition">Nutrition</a></li>
                <li><a href="/resources/mental-health">Mental Health</a></li>
                <li><a href="/resources/physical-activity">Physical Activity</a></li>
              </ul>
            )}

            {/* Education Button */}
            <button
              className="dropdown-button"
              onMouseEnter={() => setShowEducation(true)}
              onMouseLeave={() => setShowEducation(false)}
            >
              Educational Articles
            </button>
            {showEducation && (
              <ul className="dropdown-list">
                <li><a href="/education/family-health-basics">Family Health Basics</a></li>
                <li><a href="/education/healthy-habits">Healthy Habits</a></li>
                <li><a href="/education/medical-care">Accessing Medical Care</a></li>
              </ul>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
