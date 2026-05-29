
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ContactPage from "./pages/ContactPage";
import "./styles/pages.css";
import AboutPage from "./pages/AboutPage";
import CoursesPage from "./pages/CoursesPage";
import AddmissionsPage from "./pages/AddmissionsPage";
import DeveloperInfoPopup from "./components/Developerinfo/DeveloperInfoPopup";
import { useState } from "react";

const App = () => {
  const [showPopup, setShowPopup] = useState(true);
  const handleClosePopup = () => {
    setShowPopup(false);
  };
  return (
 <><div>
      {/* Your main application content */}
      <DeveloperInfoPopup
        show={showPopup}
        onClose={handleClosePopup}
        studentName="Krushnat Mahadev Salavi "
        studentPhotoUrl="/images/ks.jpeg" // Path to their photo
        uniqueMessage="Learned so much during this OJT! This app showcases my independent coding and deployment skills" />
    </div><div></div><Router>
        <div className="main-layout">
          <Header />
          <div className="content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/courses" element={<CoursesPage />} />
              <Route path="/admissions" element={<AddmissionsPage />} />

            </Routes>
          </div>
          <Footer />
        </div>
      </Router></>
  );
}
export default App;

