import { useState } from 'react';
import Header from './navbar.js';
import Footer from './footer.js';
import Home from './home.js';
import ApplicantDashboard from './applicants.js';
import EmployerDashboard from './empoloyer.js';
import ContactModal from './contact.js';
import ApplicantModal from '../../Modals/ApplicantModal.js';
import ScheduleAndCalendar from '../../Calendar/ScheduleAndCalendar.js';

interface Event {
  id: string;
  date: string;
  title: string;
}

type Page = 'home' | 'applicant' | 'employer';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [showApplicantModal, setShowApplicantModal] = useState(false);
  const [showCalendarModal, setShowCalendarModal] = useState(false);
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [events, setEvents] = useState<Event[]>([]);

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

  const handleAddEvent = (newEvent: Omit<Event, 'id'>) => {
    const newId = Date.now().toString();
    setEvents((prevEvents) => [...prevEvents, { ...newEvent, id: newId }]);
  };

  const handleDeleteEvent = (eventId: string) => {
    setEvents((prevEvents) => prevEvents.filter((event) => event.id !== eventId));
  };

  const renderContent = () => {
    switch (currentPage) {
      case 'applicant':
        return <ApplicantDashboard onOpenCalendar={() => setShowCalendarModal(true)} onOpenApplication={() => setShowApplicantModal(true)} />;
      case 'employer':
        return <EmployerDashboard onOpenCalendar={() => setShowCalendarModal(true)} />;
      case 'home':
      default:
        return <Home handleNavLinkClick={handleNavLinkClick} setShowContactModal={setShowContactModal} />;
    }
  };

  return (
    <>
      <style>
        {`
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
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
      {showApplicantModal && <ApplicantModal onClose={() => setShowApplicantModal(false)} />}
      {showCalendarModal && <ScheduleAndCalendar onClose={() => setShowCalendarModal(false)} userRole={currentPage} events={events} onAddEvent={handleAddEvent} onDeleteEvent={handleDeleteEvent} />}
    </>
  );
}

