import { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, doc, onSnapshot, setDoc } from "firebase/firestore";
import ApplicantModal from "../../Modals/ApplicantModal";

// Placeholder icons for a single-file solution
const UsersIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.85-1.7a.75.75 0 01-.437-.695z"
      clipRule="evenodd"
    />
  </svg>
);

const CalendarIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm.5 5.5a.75.75 0 00-1.5 0v4.5a.75.75 0 00.14.45l2.25 2.25a.75.75 0 001.06-1.06L12.5 12.25V7.75z"
      clipRule="evenodd"
    />
  </svg>
);


interface Meeting {
  title: string;
  date: string;
}




export default function ApplicantDashboard() {
  const [isApplicationModalOpen, setIsApplicationModalOpen] = useState(false);
  const [isCalendarModalOpen, setIsCalendarModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [newMeetingTitle, setNewMeetingTitle] = useState("");
  const [scheduledMeetings, setScheduledMeetings] = useState<Meeting[]>([]);
  const [isFirebaseReady, setIsFirebaseReady] = useState(false);
  const [db, setDb] = useState<any>(null);

  useEffect(() => {
    try {
      const firebaseConfig = {
        apiKey: "AIzaSyCcNRS1ExTaVL48me96O-_Xd_QLcSD8N_w",
        authDomain: "vsswebapp.firebaseapp.com",
        projectId: "vsswebapp",
        storageBucket: "vsswebapp.firebasestorage.app",
        messagingSenderId: "810633788772",
        appId: "1:810633788772:web:d193e85aed8eb69aed4e71",
        measurementId: "G-Y5E3PQMPTS"
      };
      const app = initializeApp(firebaseConfig);
      const dbInstance = getFirestore(app);
      setDb(dbInstance);
      setIsFirebaseReady(true);
    } catch (e) {
      console.error("Firebase initialization failed:", e);
    }
  }, []);

  useEffect(() => {
    if (isFirebaseReady && db) {
      const meetingsDocRef = doc(db, `artifacts/vsswebapp/public/data/meetings_schedule/schedule`);
      const unsubscribe = onSnapshot(meetingsDocRef, (docSnap) => {
        if (docSnap.exists()) {
          const data = docSnap.data();
          setScheduledMeetings(data.meetings || []);
        } else {
          setScheduledMeetings([]);
        }
      }, (error) => {
        console.error("Failed to fetch real-time updates:", error);
      });
      return () => unsubscribe();
    }
  }, [isFirebaseReady, db]);

  const handleSaveMeeting = async () => {
    if (!selectedDate || !newMeetingTitle.trim()) {
      console.error("Date and title are required.");
      return;
    }

    if (!isFirebaseReady || !db) {
        console.error("Firestore is not initialized.");
        return;
    }

    try {
      const meetingsDocRef = doc(db, `artifacts/vsswebapp/public/data/meetings_schedule/schedule`);
      const existingMeetings = scheduledMeetings;
      const newMeeting = { title: newMeetingTitle, date: selectedDate };
      const updatedMeetings = [...existingMeetings, newMeeting];

      await setDoc(meetingsDocRef, { meetings: updatedMeetings });
      console.log("Meeting successfully scheduled!");
      setNewMeetingTitle("");
      setSelectedDate(null);
    } catch (e) {
      console.error("Error saving meeting: ", e);
    }
  };

  const meetingsForDay = selectedDate ? scheduledMeetings.filter(m => m.date === selectedDate) : [];
  const datesWithMeetings = new Set(scheduledMeetings.map(m => m.date));

  const renderCalendar = () => {
    const today = new Date();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const calendarCells = [];

    // Fill in leading empty cells
    for (let i = 0; i < firstDay; i++) {
      calendarCells.push(<div key={`empty-${i}`} className="p-2"></div>);
    }

    // Fill in days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(currentYear, currentMonth, day).toISOString().split("T")[0];
      const isSelected = date === selectedDate;
      const hasMeeting = datesWithMeetings.has(date);

      calendarCells.push(
        <button
          key={day}
          onClick={() => setSelectedDate(date)}
          className={`p-2 rounded-full font-semibold transition-colors
            ${isSelected ? 'bg-indigo-600 text-white' : 'text-gray-800 hover:bg-gray-200'}
            ${day === today.getDate() && currentMonth === today.getMonth() && currentYear === today.getFullYear() ? 'border border-indigo-600' : ''}
            ${hasMeeting && !isSelected ? 'bg-indigo-200 text-indigo-800 font-bold' : ''}
          `}
        >
          {day}
        </button>
      );
    }

    return (
      <div className="grid grid-cols-7 text-center">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="text-sm font-medium text-gray-500">{day}</div>
        ))}
        {calendarCells}
      </div>
    );
  };

  return (
    <div className="container mx-auto px-6 py-20 min-h-screen">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-gray-800">For Applicants</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Welcome to the Applicant Hub. Here you can manage your applications, view our hiring process, and schedule interviews.
        </p>
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <button
            onClick={() => setIsApplicationModalOpen(true)}
            className="px-8 py-4 bg-indigo-600 text-white font-bold text-lg rounded-full shadow-lg hover:bg-indigo-700 transition-colors duration-300 transform hover:scale-105"
          >
            <UsersIcon className="inline-block h-6 w-6 mr-2" /> Apply Now
          </button>
          <button
            onClick={() => setIsCalendarModalOpen(true)}
            className="px-8 py-4 bg-gray-200 text-gray-800 font-bold text-lg rounded-full shadow-lg hover:bg-gray-300 transition-colors duration-300 transform hover:scale-105"
          >
            <CalendarIcon className="inline-block h-6 w-6 mr-2" /> View Schedule
          </button>
        </div>
        <div className="mt-16 text-left">
          <h3 className="text-2xl font-bold text-gray-800">Hiring Process</h3>
          <ol className="mt-4 list-decimal list-inside space-y-2 text-gray-700">
            <li>Submit your application through the form.</li>
            <li>Complete a skills assessment test.</li>
            <li>Schedule and attend a virtual interview.</li>
            <li>Receive an offer and begin your onboarding process.</li>
          </ol>
        </div>
      </div>

      {/* Application Modal */}
      {isApplicationModalOpen && <ApplicantModal onClose={() => setIsApplicationModalOpen(false)} />}

      {/* Calendar Modal */}
      {isCalendarModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-4xl p-8 relative">
            <button
              onClick={() => setIsCalendarModalOpen(false)}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
            >
              ✕
            </button>
            <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center">
              Scheduled Meetings
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex justify-between items-center mb-4">
                  <button className="text-gray-600 hover:text-gray-800">&lt;</button>
                  <span className="font-semibold">September 2025</span>
                  <button className="text-gray-600 hover:text-gray-800">&gt;</button>
                </div>
                {renderCalendar()}
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-bold text-indigo-600">
                    Schedule for {selectedDate ? new Date(selectedDate).toDateString() : 'a selected date'}
                  </h4>
                  <div className="bg-white p-4 rounded-lg shadow-inner min-h-[100px] mt-2 border border-gray-200">
                    {meetingsForDay.length === 0 ? (
                      <p className="text-gray-600">No events scheduled for this day.</p>
                    ) : (
                      <ul className="space-y-3">
                        {meetingsForDay.map((m, index) => (
                          <li
                            key={index}
                            className="p-3 bg-indigo-50 rounded-lg text-left"
                          >
                            <p className="font-bold text-gray-800">{m.title}</p>
                            <p className="text-sm text-gray-600">
                              Date: {m.date}
                            </p>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>

                {/* Scheduling form */}
                <div className="p-4 bg-gray-100 rounded-lg">
                  <h4 className="text-lg font-semibold mb-2">Schedule a Meeting</h4>
                  <input
                    type="text"
                    value={newMeetingTitle}
                    onChange={(e) => setNewMeetingTitle(e.target.value)}
                    placeholder="Enter meeting title (e.g., 'Interview with John Doe')"
                    className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-2"
                  />
                  <button
                    onClick={handleSaveMeeting}
                    disabled={!selectedDate || !newMeetingTitle.trim()}
                    className={`w-full py-2 px-4 rounded-md font-semibold transition-colors
                      ${selectedDate && newMeetingTitle.trim() ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'bg-gray-400 text-gray-200 cursor-not-allowed'}
                    `}
                  >
                    Schedule Meeting
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
