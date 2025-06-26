import './styles/Pages.css'

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';


import './App.css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CoursePage from './pages/CoursePage';
import ContactPage from './pages/ContactPage';
import AddmissionPage from './pages/AddmissionPage';
import ChatbotComponent from './components/Chatbot/ChatbotComponent';

const App = () => {
  return (
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
  );

}

export default App;
