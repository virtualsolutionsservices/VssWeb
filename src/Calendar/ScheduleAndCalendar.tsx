'use client';
import React, { useState, type JSX } from 'react';
import { X, PlusCircle, Trash2 } from 'lucide-react';

export type UserRole = 'employee' | 'employer';

interface ScheduleAndCalendarProps {
  userRole: UserRole;
  onClose: () => void;
}

const ScheduleAndCalendar: React.FC<ScheduleAndCalendarProps> = ({ userRole, onClose }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [events, setEvents] = useState(
    [
      { date: new Date('2025-08-21').toISOString().split('T')[0], title: 'Interview with Jane Doe', userId: 'employer-1' },
      { date: new Date('2025-08-22').toISOString().split('T')[0], title: 'Team Meeting', userId: 'employee-1' },
      { date: new Date('2025-08-24').toISOString().split('T')[0], title: 'Client call with ABC Corp', userId: 'employer-2' },
    ] as { date: string; title: string; userId: string }[]
  );
  const [newEventTitle, setNewEventTitle] = useState('');

  const currentUserId = userRole === 'employer' ? 'employer-1' : 'employee-1';

  const getDaysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
  const getFirstDayOfMonth = (year: number, month: number) => new Date(year, month, 1).getDay();
  const formatDate = (d: Date) => d.toISOString().split('T')[0];

  const hasEvent = (date: Date) => {
    const formattedDate = date.toISOString().split('T')[0];
    return events.some(event => event.date === formattedDate && event.userId === currentUserId);
  };

  const selectedDateEvents = events.filter(event => formatDate(selectedDate) === event.date && event.userId === currentUserId);

  const handleAddEvent = () => {
    if (!newEventTitle.trim()) return;
    const newEvent = { date: formatDate(selectedDate), title: newEventTitle.trim(), userId: currentUserId };
    setEvents(prev => [...prev, newEvent]);
    setNewEventTitle('');
  };

  const handleDeleteEvent = (eventToDelete: { date: string; title: string; userId: string }) => {
    setEvents(prev => prev.filter(e => e !== eventToDelete));
  };

  const renderCalendarDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const totalDays = getDaysInMonth(year, month);
    const startDay = getFirstDayOfMonth(year, month);
    const dayElements: JSX.Element[] = [];

    for (let i = 0; i < startDay; i++) {
      dayElements.push(<div key={`empty-${i}`} className="w-10 h-10" />);
    }

    for (let i = 1; i <= totalDays; i++) {
      const day = new Date(year, month, i);
      const isSelected = day.toDateString() === selectedDate.toDateString();
      const isToday = day.toDateString() === new Date().toDateString();
      const hasEvents = hasEvent(day);
      dayElements.push(
        <div
          key={i}
          onClick={() => setSelectedDate(day)}
          className={`w-10 h-10 flex items-center justify-center rounded-full cursor-pointer transition-colors duration-200
            ${isSelected ? 'bg-indigo-600 text-white font-bold' : isToday ? 'bg-indigo-100 text-indigo-600 font-semibold' : 'hover:bg-gray-200'}
            ${hasEvents && !isSelected ? 'border-2 border-indigo-400' : ''}
          `}
        >
          {i}
        </div>
      );
    }
    return dayElements;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900 bg-opacity-50 backdrop-blur-sm">
      <div className="bg-white rounded-3xl p-8 max-w-2xl w-full shadow-2xl relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
          <X size={24} />
        </button>
        <h3 className="text-3xl font-bold text-gray-800 mb-6">Your Scheduled Meetings</h3>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Calendar */}
          <div className="md:w-1/2 flex flex-col items-center">
            <div className="flex justify-between items-center w-full mb-4">
              <button
                onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1))}
                className="p-2 rounded-full hover:bg-gray-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <h4 className="text-xl font-bold text-gray-800">
                {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
              </h4>
              <button
                onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1))}
                className="p-2 rounded-full hover:bg-gray-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            <div className="grid grid-cols-7 gap-1 text-center font-medium text-sm w-full">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                <div key={day} className="text-gray-500">{day}</div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-1 w-full">{renderCalendarDays()}</div>
          </div>
 
          <div className="md:w-1/2">
            <h4 className="text-xl font-bold text-indigo-600 mb-4">Schedule for {selectedDate.toDateString()}</h4>
            <div className="space-y-2 max-h-48 overflow-y-auto pr-2">
              {selectedDateEvents.length > 0 ? (
                selectedDateEvents.map((event, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-indigo-50 rounded-lg shadow-sm">
                    <p className="text-sm text-gray-800">{event.title}</p>
                    {event.userId === currentUserId && (
                      <button onClick={() => handleDeleteEvent(event)} className="text-red-500 hover:text-red-700">
                        <Trash2 size={16} />
                      </button>
                    )}
                  </div>
                ))
              ) : (
                <p className="text-gray-500 text-sm">No events scheduled for this day.</p>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-gray-200">
              <h5 className="text-lg font-semibold text-gray-700 mb-2">Add a New Event</h5>
              <div className="flex space-x-2">
                <input
                  type="text"
                  placeholder="Event title..."
                  value={newEventTitle}
                  onChange={(e) => setNewEventTitle(e.target.value)}
                  className="flex-grow p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 border"
                />
                <button
                  onClick={handleAddEvent}
                  className="p-2 bg-indigo-600 text-white rounded-md shadow-md hover:bg-indigo-700"
                  aria-label="Add event"
                >
                  <PlusCircle size={24} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleAndCalendar;
