import  { useState } from 'react';
import Header from './navbar.tsx';
import Footer from './footer.tsx';
import Home from './home.tsx';
import ApplicantDashboard from './applicants.tsx';
import EmployerDashboard from './empoloyer.tsx';
import ContactModal from './contact.tsx';

// Correct type definition for Page
type Page = 'home' | 'applicant' | 'employer';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const handleNavLinkClick = (id: string) => {
    if (id === 'applicants') {
      setCurrentPage('applicant');
    } else if (id === 'employers') {
      setCurrentPage('employer');
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      setCurrentPage('home');
    }
    setIsMenuOpen(false);
  };

  const renderContent = () => {
    switch (currentPage) {
      case 'applicant':
        return <ApplicantDashboard />;
      case 'employer':
        return <EmployerDashboard />;
      case 'home':
      default:
        return <Home handleNavLinkClick={handleNavLinkClick} setShowContactModal={setShowContactModal} />;
    }
  };

  return (
    <>
      <style>
        {`
        @keyframes fadeInDown { from { opacity: 0; transform: translateY(-20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeInLeft { from { opacity: 0; transform: translateX(-20px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes fadeInRight { from { opacity: 0; transform: translateX(20px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        .animate-fade-in-down { animation: fadeInDown 0.6s ease-out; }
        .animate-fade-in-up { animation: fadeInUp 0.6s ease-out; }
        .animate-fade-in-left { animation: fadeInLeft 0.8s ease-out; }
        .animate-fade-in-right { animation: fadeInRight 0.8s ease-out; }
        .animate-fade-in { animation: fadeIn 0.3s ease-out; }
        `}
      </style>
      <div className="font-sans text-gray-900 bg-white min-h-screen">
        <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} handleNavLinkClick={handleNavLinkClick} setCurrentPage={setCurrentPage} />
        <main>{renderContent()}</main>
        <Footer />
      </div>
      {showContactModal && <ContactModal onClose={() => setShowContactModal(false)} />}
    </>
  );
}
