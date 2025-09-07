import { useState, useEffect } from "react";
import { db } from "../../config/firebaseconfig";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { CalendarIcon } from "../icons/icons";

interface Meeting {
  
  date: string; // YYYY-MM-DD
  title: string;
}

export default function EmployerDashboard() {
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [meeting, setMeeting] = useState({  title: "" });
  const [savedMeetings, setSavedMeetings] = useState<Meeting[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  // Fetch meetings on mount
  useEffect(() => {
    const fetchMeetings = async () => {
      try {
        const docRef = doc(db, "meetings", "schedule");
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setSavedMeetings(docSnap.data().meetings || []);
        }
      } catch (err) {
        console.error("Error fetching meetings:", err);
      }
    };
    fetchMeetings();
  }, []);

  // Save meeting
  const handleSaveMeeting = async () => {
    if (!meeting.title || !selectedDate) {
      setMessage("Please fill in all fields.");
      return;
    }

    const today = new Date().toISOString().split("T")[0];
    if (selectedDate < today) {
      setMessage("You cannot select a past date.");
      return;
    }

    try {
      const newMeeting: Meeting = {
          title: meeting.title,
          date: selectedDate,
          
      };

      const updatedMeetings = [...savedMeetings, newMeeting];
      await setDoc(doc(db, "meetings", "schedule"), {
        meetings: updatedMeetings,
      });

      setSavedMeetings(updatedMeetings);
      setMeeting({  title: "" });
      setMessage("Meeting saved successfully!");
    } catch (err) {
      console.error("Error saving meeting:", err);
      setMessage("Error saving meeting. Please try again.");
    }
  };

  // Filter meetings for selected date
  const meetingsForDay = savedMeetings.filter((m) => m.date === selectedDate);
  // Sort all meetings chronologically
  // const sortedMeetings = [...savedMeetings].sort((a, b) => a.date.localeCompare(b.date));

  const renderCalendar = () => {
    const today = new Date();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const calendarCells = [];

    // Create a set of dates with meetings for quick lookup
    const datesWithMeetings = new Set(savedMeetings.map(m => m.date));

    // Fill in leading empty cells for the first week
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
    <div className="container mx-auto px-6 py-20 min-h-screen text-center">
      <h2 className="text-4xl font-bold text-gray-800">For Employers</h2>
      <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
        Welcome to the Employer Hub. Manage your projects, track progress, and
        schedule meetings with our virtual specialists.
      </p>

      {/* Button to open modal */}
      <div className="mt-12">
        <button
          onClick={() => {
            setIsModalOpen(true);
            setMessage(null); // Clear previous message
          }}
          className="px-8 py-4 bg-gray-200 text-gray-800 font-bold text-lg rounded-full shadow-lg hover:bg-gray-300 transition-colors duration-300 transform hover:scale-105"
        >
          <CalendarIcon className="inline-block h-6 w-6 mr-2" /> View Schedule
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-4xl p-8 relative">
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
            >
              ✕
            </button>
            <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center">
              Your Scheduled Meetings
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex justify-between items-center mb-4">
                  <button className="text-gray-600 hover:text-gray-800">
                    &lt;
                  </button>
                  <span className="font-semibold">September 2025</span>
                  <button className="text-gray-600 hover:text-gray-800">
                    &gt;
                  </button>
                </div>
                {renderCalendar()}
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-bold text-indigo-600">
                    Schedule for {new Date(selectedDate).toDateString()}
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
                            
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-800 mb-4">
                    Add a New Event
                  </h4>
                  <div className="space-y-4">
                    <input
                      type="text"
                      placeholder="Event Title"
                      value={meeting.title}
                      onChange={(e) =>
                        setMeeting({ ...meeting, title: e.target.value })
                      }
                      className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    <button
                      onClick={handleSaveMeeting}
                      className="w-full px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
                    >
                      <CalendarIcon className="inline-block h-5 w-5 mr-2" /> Save
                      Meeting
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal for messages */}
            {message && (
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-8 rounded-xl shadow-2xl max-w-sm w-full text-center space-y-4">
                        <p className="text-lg font-semibold">{message}</p>
                        <button
                            onClick={() => setMessage(null)}
                            className="bg-indigo-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-indigo-700"
                        >
                            OK
                        </button>
                    </div>
                </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
