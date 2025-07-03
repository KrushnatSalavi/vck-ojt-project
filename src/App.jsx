import './styles/Pages.css'

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';


import './App.css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CoursePage from './pages/CoursePage';
import ContactPage from './pages/ContactPage';
import AddmissionPage from './pages/AddmissionPage';
import ChatbotComponent from './components/Chatbot/ChatbotComponent';
import DeveloperInfoPopup from './components/Developerinfo/DeveloperInfoPopup';
import { useState } from 'react';

const App = () => {
  const [showPopup, setShowPopup] = useState(true);
  const handleClosePopup = () => {
    setShowPopup(false);
  };
  return (
    <>
    <div>
        {/* Your main application content */}
        <DeveloperInfoPopup
          show={showPopup}
          onClose={handleClosePopup}
          studentName="vrushab Mitari"
          studentPhotoUrl="/public/vru.jpg" // Path to their photo
          uniqueMessage="Learned so much during this OJT! This app showcases my independent coding and deployment skills"
        />
      </div>
    <div>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/course" element={<CoursePage />} />
            <Route path="/addmission" element={<AddmissionPage/>} />
          </Routes>
          <ChatbotComponent/>
        </Router>
    
    </div>
    </>
  );

}

export default App;
