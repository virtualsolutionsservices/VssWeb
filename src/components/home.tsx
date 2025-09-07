// import { useState, type JSX, useEffect, type SVGProps, type JSXElementConstructor, type Key, type ReactElement, type ReactNode, type ReactPortal } from 'react';
// import emailjs from "emailjs-com";
// import type { JSX } from 'react/jsx-runtime';
// import type { JSX } from 'react/jsx-runtime';
// import type { JSX } from 'react/jsx-runtime';
// import type { JSX } from 'react/jsx-runtime';
// import type { JSX } from 'react/jsx-runtime';
// import type { JSX } from 'react/jsx-runtime';
// import type { JSX } from 'react/jsx-runtime';
// import type { JSX } from 'react/jsx-runtime';
// import type { JSX } from 'react/jsx-runtime';
// import type { JSX } from 'react/jsx-runtime';
// import type { JSX } from 'react/jsx-runtime';
// import type { JSX } from 'react/jsx-runtime';
// import type { JSX } from 'react/jsx-runtime';
// import type { JSX } from 'react/jsx-runtime';
// import type { JSX } from 'react/jsx-runtime';
// // Replaced lucide-react with inline SVG components to resolve import errors.
// const MenuIcon = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
//   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
//     <line x1="4" x2="20" y1="12" y2="12"></line>
//     <line x1="4" x2="20" y1="6" y2="6"></line>
//     <line x1="4" x2="20" y1="18" y2="18"></line>
//   </svg>
// );

// const XIcon = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
//   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
//     <path d="M18 6 6 18"></path>
//     <path d="m6 6 12 12"></path>
//   </svg>
// );

// const BriefcaseIcon = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
//   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
//     <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
//     <rect width="20" height="14" x="2" y="6" rx="2"></rect>
//   </svg>
// );

// const UsersIcon = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
//   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
//     <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
//     <circle cx="9" cy="7" r="4"></circle>
//     <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
//     <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
//   </svg>
// );

// const MessageCircleIcon = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
//   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
//     <path d="M7.9 20A9.3 9.3 0 0 1 4 16.1C2.5 13.5 2.5 10.5 4 7.9A9.3 9.3 0 0 1 7.9 4c2.6-1.5 5.6-1.5 8.1 0A9.3 9.3 0 0 1 20 7.9c1.5 2.6 1.5 5.6 0 8.1a9.3 9.3 0 0 1-3.9 3.9L12 22l-4.1-2Z"></path>
//   </svg>
// );

// const MailIcon = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
//   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
//     <rect width="20" height="16" x="2" y="4" rx="2"></rect>
//     <path d="m22 7-10 7L2 7"></path>
//   </svg>
// );

// const MapPinIcon = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
//   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
//     <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
//     <circle cx="12" cy="10" r="3"></circle>
//   </svg>
// );

// const TrendingUpIcon = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
//   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
//     <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
//     <polyline points="16 7 22 7 22 13"></polyline>
//   </svg>
// );

// const UserCheckIcon = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
//   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
//     <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
//     <circle cx="9" cy="7" r="4"></circle>
//     <polyline points="16 11 18 13 22 9"></polyline>
//   </svg>
// );

// const CodeIcon = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
//   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
//     <polyline points="16 18 22 12 16 6"></polyline>
//     <polyline points="8 6 2 12 8 18"></polyline>
//   </svg>
// );

// const HeadsetIcon = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
//   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
//     <path d="M12 19V5H2V19H12Z"></path>
//     <path d="M16 19v-2h2a4 4 0 0 0 4-4v-4a4 4 0 0 0-4-4h-2"></path>
//   </svg>
// );

// const LinkIcon = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
//   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
//     <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
//     <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
//   </svg>
// );

// const CalendarIcon = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
//   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
//     <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
//     <line x1="16" x2="16" y1="2" y2="6"></line>
//     <line x1="8" x2="8" y1="2" y2="6"></line>
//     <line x1="3" x2="21" y1="10" y2="10"></line>
//   </svg>
// );

// const PlusCircleIcon = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
//   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
//     <circle cx="12" cy="12" r="10"></circle>
//     <line x1="12" x2="12" y1="8" y2="16"></line>
//     <line x1="8" x2="16" y1="12" y2="12"></line>
//   </svg>
// );

// const Trash2Icon = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
//   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
//     <path d="M3 6h18"></path>
//     <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
//     <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
//     <line x1="10" x2="10" y1="11" y2="17"></line>
//     <line x1="14" x2="14" y1="11" y2="17"></line>
//   </svg>
// );

// interface NavItem {
//   name: string;
//   id: string;
// }

// interface Service {
//   icon: JSX.Element;
//   title: string;
//   description: string;
// }

// interface Testimonial {
//   quote: string;
//   author: string;
// }

// interface Event {
//   id: string;
//   date: string;
//   title: string;
// }

// interface ScheduleAndCalendarProps {
//   userRole: 'applicant' | 'employer' | 'home';
//   onClose: () => void;
//   events: Event[];
//   onAddEvent: (event: Omit<Event, 'id'>) => void;
//   onDeleteEvent: (id: string) => void;
// }

// interface ModalProps {
//   onClose: () => void;
// }

// const ContactModal = ({ onClose }) => {
//   const [showSuccess, setShowSuccess] = useState(false);

//   const handleSubmit = (e: { preventDefault: () => void; }) => {
//     e.preventDefault();
//     setShowSuccess(true);
//     setTimeout(() => {
//       setShowSuccess(false);
//       onClose();
//     }, 2000);
//   };

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900 bg-opacity-50 backdrop-blur-sm transition-opacity duration-300">
//       <div className="bg-white rounded-3xl p-8 max-w-xl w-full shadow-2xl relative transform scale-100 transition-transform duration-300">
//         <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors">
//           <XIcon className="h-6 w-6" />
//         </button>
//         <h3 className="text-3xl font-bold text-gray-800 mb-6">Send Us a Message</h3>
//         <form onSubmit={handleSubmit} action="mailto:nazareneeroa46@gmail.com"
//           method="POST"
//           encType="text/plain"
//           className="space-y-4">
//           <div>
//             <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
//             <input type="text" id="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 border" required />
//           </div>
//           <div>
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
//             <input type="email" id="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 border" required />
//           </div>
//           <div>
//             <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
//             <textarea id="message" rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 border" required></textarea>
//           </div>
//           <button
//             type="submit"
//             className="w-full px-4 py-3 bg-indigo-600 text-white font-bold rounded-lg shadow-md hover:bg-indigo-700 transition-colors duration-300"
//           >
//             Send Message
//           </button>
//         </form>
//         {showSuccess && (
//           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-green-500 text-white px-6 py-3 rounded-xl shadow-lg transition-opacity duration-300 animate-fade-in">
//             Message sent!
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };


// const ApplicantModal = ({ onClose }) => {
//   const [showSuccess, setShowSuccess] = useState(false);

//   const handleSubmit = (e: { preventDefault: () => void; }) => {
//     e.preventDefault();
//     setShowSuccess(true);
//     setTimeout(() => {
//       setShowSuccess(false);
//       onClose();
//     }, 2000);
//   };

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900 bg-opacity-50 backdrop-blur-sm transition-opacity duration-300">
//       <div className="bg-white rounded-3xl p-8 max-w-xl w-full shadow-2xl relative transform scale-100 transition-transform duration-300">
//         <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors">
//           <XIcon className="h-6 w-6" />
//         </button>
//         <h3 className="text-3xl font-bold text-gray-800 mb-6">Application Form</h3>
//         <p className="text-gray-700">
//           This is a placeholder for your application form and test. You can connect this to your own system.
//         </p>
//         <form onSubmit={handleSubmit} className="mt-6 space-y-4">
//           <div>
//             <label htmlFor="job-title" className="block text-sm font-medium text-gray-700">Job Title</label>
//             <input type="text" id="job-title" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 border" required />
//           </div>
//           <div>
//             <label htmlFor="resume" className="block text-sm font-medium text-gray-700">Upload Resume</label>
//             <input type="file" id="resume" className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100" />
//           </div>
//           <button
//             type="submit"
//             className="w-full px-4 py-3 bg-indigo-600 text-white font-bold rounded-lg shadow-md hover:bg-indigo-700 transition-colors duration-300"
//           >
//             Submit Application
//           </button>
//         </form>
//         {showSuccess && (
//           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-green-500 text-white px-6 py-3 rounded-xl shadow-lg transition-opacity duration-300 animate-fade-in">
//             Application Submitted!
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };


// const ScheduleAndCalendar = ({ onClose, userRole, events, onAddEvent, onDeleteEvent }) => {
//   const [currentDate, setCurrentDate] = useState(new Date());
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [newEventTitle, setNewEventTitle] = useState('');

//   const getDaysInMonth = (year: number, month: number) => {
//     return new Date(year, month + 1, 0).getDate();
//   };

//   const getFirstDayOfMonth = (year: number, month: number) => {
//     return new Date(year, month, 1).getDay();
//   };

//   const hasEvent = (date: Date) => {
//     const formattedDate = date.toISOString().split('T')[0];
//     return events.some((event: { date: any; }) => event.date === formattedDate);
//   };

//   const formatDate = (d: never) => d.toISOString().split('T')[0];

//   const selectedDateEvents = selectedDate ? events.filter((event: { date: any; }) => formatDate(selectedDate) === event.date) : [];

//   const handleAddEvent = () => {
//     if (!selectedDate || newEventTitle.trim() === '') {
//       return;
//     }
//     const newEvent = {
//       date: formatDate(selectedDate),
//       title: newEventTitle.trim(),
//     };
//     onAddEvent(newEvent);
//     setNewEventTitle('');
//   };

//   const handleDeleteEvent = (id: any) => {
//     onDeleteEvent(id);
//   };

//   const renderCalendarDays = () => {
//     const year = currentDate.getFullYear();
//     const month = currentDate.getMonth();
//     const totalDays = getDaysInMonth(year, month);
//     const startDay = getFirstDayOfMonth(year, month);
//     const dayElements = [];

//     for (let i = 0; i < startDay; i++) {
//       dayElements.push(<div key={`empty-${i}`} className="w-10 h-10"></div>);
//     }

//     for (let i = 1; i <= totalDays; i++) {
//       const day = new Date(year, month, i);
//       const isSelected = selectedDate && day.toDateString() === selectedDate.toDateString();
//       const isToday = day.toDateString() === new Date().toDateString();
//       const hasEvents = hasEvent(day);
//       dayElements.push(
//         <div
//           key={i}
//           onClick={() => setSelectedDate(day)}
//           className={`w-10 h-10 flex items-center justify-center rounded-full cursor-pointer transition-colors duration-200
//             ${isSelected ? 'bg-indigo-600 text-white font-bold' : isToday ? 'bg-indigo-100 text-indigo-600 font-semibold' : 'hover:bg-gray-200'}
//             ${hasEvents && !isSelected ? 'border-2 border-indigo-400' : ''}
//           `}
//         >
//           {i}
//         </div>
//       );
//     }
//     return dayElements;
//   };

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900 bg-opacity-50 backdrop-blur-sm transition-opacity duration-300">
//       <div className="bg-white rounded-3xl p-8 max-w-3xl w-full shadow-2xl relative transform scale-100 transition-transform duration-300 overflow-y-auto max-h-[90vh]">
//         <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors">
//           <XIcon className="h-6 w-6" />
//         </button>
//         <h3 className="text-3xl font-bold text-gray-800 mb-6">{userRole === 'applicant' ? 'Applicant Schedule' : 'Employer Calendar'}</h3>
//         <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6">
//           <div className="lg:w-1/2">
//             <div className="flex justify-between items-center mb-4">
//               <button
//                 onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1))}
//                 className="px-3 py-1 bg-gray-200 rounded-md hover:bg-gray-300 transition-colors"
//               >
//                 Prev
//               </button>
//               <h4 className="text-lg font-semibold text-gray-800">
//                 {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
//               </h4>
//               <button
//                 onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1))}
//                 className="px-3 py-1 bg-gray-200 rounded-md hover:bg-gray-300 transition-colors"
//               >
//                 Next
//               </button>
//             </div>
//             <div className="grid grid-cols-7 gap-1 text-center font-semibold text-sm text-gray-500 mb-4">
//               {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
//                 <div key={day}>{day}</div>
//               ))}
//             </div>
//             <div className="grid grid-cols-7 gap-1">
//               {renderCalendarDays()}
//             </div>
//           </div>
//           <div className="lg:w-1/2">
//             <div className="p-4 bg-gray-100 rounded-2xl">
//               <h4 className="text-xl font-bold text-gray-800 mb-4">
//                 {selectedDate ? selectedDate.toDateString() : 'Select a date'}
//               </h4>
//               {selectedDate && (
//                 <>
//                   <div className="space-y-2 mb-4">
//                     {selectedDateEvents.length > 0 ? (
//                       selectedDateEvents.map((event: { id: Key | null | undefined; title: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; }) => (
//                         <div key={event.id} className="flex items-center justify-between bg-white p-3 rounded-xl shadow-sm">
//                           <p className="text-gray-700">{event.title}</p>
//                           <button onClick={() => handleDeleteEvent(event.id)} className="text-red-500 hover:text-red-700 transition-colors">
//                             <Trash2Icon className="h-4 w-4" />
//                           </button>
//                         </div>
//                       ))
//                     ) : (
//                       <p className="text-gray-500">No events for this day.</p>
//                     )}
//                   </div>
//                   <div className="flex space-x-2">
//                     <input
//                       type="text"
//                       value={newEventTitle}
//                       onChange={(e) => setNewEventTitle(e.target.value)}
//                       placeholder="Add a new event..."
//                       className="flex-1 rounded-md border-gray-300 shadow-sm p-2 border"
//                     />
//                     <button
//                       onClick={handleAddEvent}
//                       className="px-4 py-2 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition-colors"
//                     >
//                       <PlusCircleIcon className="h-5 w-5" />
//                     </button>
//                   </div>
//                 </>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const ApplicantDashboard = ({ onOpenCalendar, onOpenApplication }) => {
//   return (
//     <div className="container mx-auto px-6 py-20 min-h-screen">
//       <div className="text-center">
//         <h2 className="text-4xl font-bold text-gray-800">For Applicants</h2>
//         <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
//           Welcome to the Applicant Hub. Here you can manage your applications, view our hiring process, and schedule interviews.
//         </p>
//         <div className="mt-12 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
//           <button
//             onClick={onOpenApplication}
//             className="px-8 py-4 bg-indigo-600 text-white font-bold text-lg rounded-full shadow-lg hover:bg-indigo-700 transition-colors duration-300 transform hover:scale-105"
//           >
//             <UsersIcon className="inline-block h-6 w-6 mr-2" /> Apply Now
//           </button>
//           <button
//             onClick={onOpenCalendar}
//             className="px-8 py-4 bg-gray-200 text-gray-800 font-bold text-lg rounded-full shadow-lg hover:bg-gray-300 transition-colors duration-300 transform hover:scale-105"
//           >
//             <CalendarIcon className="inline-block h-6 w-6 mr-2" /> View Schedule
//           </button>
//         </div>
//         <div className="mt-16 text-left">
//           <h3 className="text-2xl font-bold text-gray-800">Hiring Process</h3>
//           <ol className="mt-4 list-decimal list-inside space-y-2 text-gray-700">
//             <li>Submit your application through the form.</li>
//             <li>Complete a skills assessment test.</li>
//             <li>Schedule and attend a virtual interview.</li>
//             <li>Receive an offer and begin your onboarding process.</li>
//           </ol>
//         </div>
//       </div>
//     </div>
//   );
// };

// const EmployerDashboard = ({ onOpenCalendar }) => {
//   return (
//     <div className="container mx-auto px-6 py-20 min-h-screen">
//       <div className="text-center">
//         <h2 className="text-4xl font-bold text-gray-800">For Employers</h2>
//         <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
//           Welcome to the Employer Hub. Manage your projects, track progress, and schedule meetings with our virtual specialists.
//         </p>
//         <div className="mt-12 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
//           <button
//             onClick={onOpenCalendar}
//             className="px-8 py-4 bg-indigo-600 text-white font-bold text-lg rounded-full shadow-lg hover:bg-indigo-700 transition-colors duration-300 transform hover:scale-105"
//           >
//             <CalendarIcon className="inline-block h-6 w-6 mr-2" /> Manage Calendar
//           </button>
//         </div>
//         <div className="mt-16 text-left">
//           <h3 className="text-2xl font-bold text-gray-800">Your Projects</h3>
//           <div className="mt-4 space-y-4">
//             <div className="p-6 bg-white rounded-xl shadow-lg">
//               <h4 className="text-xl font-bold text-gray-800">Project Alpha</h4>
//               <p className="mt-2 text-gray-600">Status: In Progress</p>
//               <p className="text-sm text-gray-500">Assigned VA: Jane Doe</p>
//             </div>
//             <div className="p-6 bg-white rounded-xl shadow-lg">
//               <h4 className="text-xl font-bold text-gray-800">Marketing Campaign</h4>
//               <p className="mt-2 text-gray-600">Status: Awaiting Feedback</p>
//               <p className="text-sm text-gray-500">Assigned VA: John Smith</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };


// // Main application component for the single-page website
// export default function App() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [showContactModal, setShowContactModal] = useState(false);
//   const [showApplicantModal, setShowApplicantModal] = useState(false);
//   const [showCalendarModal, setShowCalendarModal] = useState(false);
//   const [currentPage, setCurrentPage] = useState('home');
//   const [events, setEvents] = useState<Event[]>([]);

//   const handleNavLinkClick = (id: string) => {
//     if (id === 'applicants') {
//       setCurrentPage('applicant');
//     } else if (id === 'employers') {
//       setCurrentPage('employer');
//     } else {
//       const element = document.getElementById(id);
//       if (element) {
//         element.scrollIntoView({ behavior: 'smooth' });
//       }
//       setCurrentPage('home');
//     }
//     setIsMenuOpen(false);
//   };

//   const handleAddEvent = (newEvent: Event) => {
//     const newId = Date.now().toString();
//     setEvents(prevEvents => [...prevEvents, { ...newEvent, id: newId }]);
//   };

//   const handleDeleteEvent = (eventId: string) => {
//     setEvents(prevEvents => prevEvents.filter(event => event.id !== eventId));
//   };


//   const navItems = [
//     { name: 'Services', id: 'services' },
//     { name: 'About Us', id: 'about' },
//     { name: 'Testimonials', id: 'testimonials' },
//     { name: 'Contact', id: 'contact' },
//     { name: 'Applicants', id: 'applicants' },
//     { name: 'Employers', id: 'employers' },
//   ];

//   const services = [
//     { icon: <TrendingUpIcon className="h-10 w-10 text-white" />, title: 'Sales Development', description: 'Boost your sales pipeline with proven systems including lead generation, prospecting, and CRM management.' },
//     { icon: <UserCheckIcon className="h-10 w-10 text-white" />, title: 'Virtual Assistant Services', description: 'Our VA services are designed like training courses to fit your business needs, from admin essentials to data mastery.' },
//     { icon: <CodeIcon className="h-10 w-10 text-white" />, title: 'SEO & Web Development', description: 'Strengthen your online presence with structured modules for web management, SEO foundations, and content growth.' },
//     { icon: <HeadsetIcon className="h-10 w-10 text-white" />, title: 'Customer & Technical Support', description: 'Enhance customer experience through service-based tracks for help desk essentials, email, chat, and technical assistance.' },
//   ];

//   const testimonials = [
//     { quote: "Virtual Solutions Services has been a game-changer for our small business. Their support is invaluable!", author: "Jane Doe, CEO of Tech Innovators" },
//     { quote: "The team is professional, responsive, and always goes the extra mile. We couldn't be happier with the results.", author: "John Smith, Founder of Creative Studios" },
//     { quote: "Outstanding service and a significant boost to our productivity. Highly recommend VSS Philippines!", author: "Maria Garcia, Project Manager" },
//   ];

//   const renderContent = () => {
//     switch (currentPage) {
//       case 'applicant':
//         return <ApplicantDashboard onOpenCalendar={() => setShowCalendarModal(true)} onOpenApplication={() => setShowApplicantModal(true)} />;
//       case 'employer':
//         return <EmployerDashboard onOpenCalendar={() => setShowCalendarModal(true)} />;
//       case 'home':
//       default:
//         return (
//           <>
//             <section id="hero" className="relative pt-24 pb-12 bg-gradient-to-br from-indigo-50 to-purple-50 overflow-hidden">
//               <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between min-h-screen">
//                 <div className="md:w-1/2 text-center md:text-left animate-fade-in-left">
//                   <h1 className="text-5xl md:text-7xl font-extrabold text-indigo-800 leading-tight tracking-tighter">
//                     Virtual Solutions, <br />Real Results.
//                   </h1>
//                   <p className="mt-6 text-lg md:text-xl text-gray-700 max-w-lg mx-auto md:mx-0">
//                     We empower small firms and solopreneurs with expert virtual specialists, providing tailored administrative, marketing, and sales support.
//                   </p>
//                   <button
//                     onClick={() => handleNavLinkClick('contact')}
//                     className="mt-8 px-8 py-4 bg-indigo-600 text-white font-bold text-lg rounded-full shadow-lg hover:bg-indigo-700 transition-colors duration-300 transform hover:scale-105"
//                   >
//                     Get Started Today
//                   </button>
//                 </div>
//                 <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center animate-fade-in-right">
//                   <div className="w-full max-w-lg">
//                     <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
//                       <rect x="10" y="20" width="80" height="60" rx="10" ry="10" className="fill-indigo-200 stroke-indigo-400 stroke-2" />
//                       <path d="M 15 30 L 85 30" className="stroke-indigo-400 stroke-2" />
//                       <rect x="20" y="40" width="60" height="5" rx="2" ry="2" className="fill-indigo-300" />
//                       <rect x="20" y="50" width="40" height="5" rx="2" ry="2" className="fill-indigo-300" />
//                       <rect x="20" y="60" width="50" height="5" rx="2" ry="2" className="fill-indigo-300" />
//                       <circle cx="75" cy="70" r="5" className="fill-indigo-400" />
//                       <path d="M 60 70 A 15 15 0 0 1 75 70" className="stroke-indigo-400 stroke-2 fill-none" />
//                     </svg>
//                   </div>
//                 </div>
//               </div>
//             </section>
            
//             <section id="services" className="py-20 bg-white">
//               <div className="container mx-auto px-6 text-center">
//                 <h2 className="text-4xl font-bold text-gray-800">Our Services</h2>
//                 <p className="mt-4 text-lg text-gray-600">Solutions designed to supercharge your business.</p>
//                 <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
//                   {services.map((service, index) => (
//                     <div key={index} className="p-8 bg-indigo-600 text-white rounded-2xl shadow-xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
//                       <div className="flex justify-center mb-4">{service.icon}</div>
//                       <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
//                       <p className="mt-2 text-indigo-100">{service.description}</p>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </section>

//             <section id="about" className="py-20 bg-gray-100">
//               <div className="container mx-auto px-6 flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12">
//                 <div className="md:w-1/2">
//                   <h2 className="text-4xl font-bold text-gray-800">Who We Are</h2>
//                   <p className="mt-4 text-lg text-gray-600">
//                     Founded in 2020 by Rosie Glenda, a professional with over 12 years of expertise in customer service, sales, and virtual assistance, Virtual Solutions Services (VSS) is a dynamic virtual solutions provider based in the Philippines. We are dedicated to empowering businesses worldwide with expertly managed, cost-effective, and scalable outsourcing services. Our team of highly trained professionals leverages modern facilities and a commitment to excellence to help you boost productivity, increase sales, and enhance client satisfaction. At VSS, our mission is simple: to be the seamless extension of your business, bridging the distance to help you achieve your goals.
//                   </p>
//                 </div>
//                 <div className="md:w-1/2">
//                   <div className="bg-gray-200 rounded-3xl h-64 md:h-80 flex items-center justify-center text-gray-500">
//                     [Placeholder for a team photo or company illustration]
//                   </div>
//                 </div>
//               </div>
//             </section>

//             <section id="testimonials" className="py-20 bg-white">
//               <div className="container mx-auto px-6 text-center">
//                 <h2 className="text-4xl font-bold text-gray-800">What Our Clients Say</h2>
//                 <div className="mt-12 grid gap-8 md:grid-cols-3">
//                   {testimonials.map((testimonial, index) => (
//                     <div key={index} className="p-8 bg-gray-50 rounded-2xl shadow-xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
//                       <p className="text-lg italic text-gray-700">"{testimonial.quote}"</p>
//                       <p className="mt-4 font-semibold text-gray-800">- {testimonial.author}</p>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </section>

//             <section id="contact" className="py-20 bg-gray-100">
//               <div className="container mx-auto px-6 text-center">
//                 <h2 className="text-4xl font-bold text-gray-800">Get in Touch</h2>
//                 <p className="mt-4 text-lg text-gray-600">Ready to boost your business? We're here to help. Contact our team to discuss how our solutions can be tailored to your needs.</p>
//                 <div className="mt-12 flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-12">
//                   <div className="flex items-center text-lg text-gray-700">
//                     <MailIcon className="h-6 w-6 mr-3 text-indigo-500" />
//                     <span>sales@virtualsolutionsservices.com</span>
//                   </div>
//                   <div className="flex items-center text-lg text-gray-700">
//                     <MapPinIcon className="h-6 w-6 mr-3 text-indigo-500" />
//                     <span>Philippines</span>
//                   </div>
//                 </div>
//                 <button
//                   onClick={() => setShowContactModal(true)}
//                   className="mt-8 px-8 py-4 bg-indigo-600 text-white font-bold text-lg rounded-full shadow-lg hover:bg-indigo-700 transition-colors duration-300 transform hover:scale-105"
//                 >
//                   <MessageCircleIcon className="inline-block h-6 w-6 mr-2" /> Send Us a Message
//                 </button>
//               </div>
//             </section>
//           </>
//         );
//     }
//   };

//   return (
//     <>
//       <style>
//         {`
//         @keyframes fadeInDown {
//           from {
//             opacity: 0;
//             transform: translateY(-20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//         @keyframes fadeInUp {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//         @keyframes fadeInLeft {
//           from {
//             opacity: 0;
//             transform: translateX(-20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }
//         @keyframes fadeInRight {
//           from {
//             opacity: 0;
//             transform: translateX(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }
//         @keyframes fadeIn {
//           from { opacity: 0; }
//           to { opacity: 1; }
//         }
//         .animate-fade-in-down { animation: fadeInDown 0.6s ease-out; }
//         .animate-fade-in-up { animation: fadeInUp 0.6s ease-out; }
//         .animate-fade-in-left { animation: fadeInLeft 0.8s ease-out; }
//         .animate-fade-in-right { animation: fadeInRight 0.8s ease-out; }
//         .animate-fade-in { animation: fadeIn 0.3s ease-out; }
//         `}
//       </style>
//       <div className="font-sans text-gray-900 bg-white min-h-screen">
//         <header className="fixed top-0 left-0 w-full z-40 bg-white/80 backdrop-blur-sm shadow-md transition-all duration-300">
//           <div className="container mx-auto px-6 py-4 flex items-center justify-between">
//             <a href="#" className="flex items-center text-2xl font-bold text-indigo-600" onClick={() => setCurrentPage('home')}>
//               <BriefcaseIcon className="h-8 w-8 mr-2" /> VSS
//             </a>
//             <nav className="hidden md:flex space-x-8">
//               {navItems.map((item) => (
//                 <a
//                   key={item.id}
//                   href={`#${item.id}`}
//                   onClick={() => handleNavLinkClick(item.id)}
//                   className="text-lg font-medium text-gray-700 hover:text-indigo-600 transition-colors"
//                 >
//                   {item.name}
//                 </a>
//               ))}
//             </nav>
//             <div className="md:hidden">
//               <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 hover:text-indigo-600 transition-colors">
//                 <MenuIcon className="h-8 w-8" />
//               </button>
//             </div>
//           </div>
//           {isMenuOpen && (
//             <div className="md:hidden fixed inset-0 bg-white z-50 animate-fade-in">
//               <div className="flex justify-between items-center p-6 border-b">
//                 <a href="#" className="flex items-center text-2xl font-bold text-indigo-600" onClick={() => { setCurrentPage('home'); setIsMenuOpen(false); }}>
//                   <BriefcaseIcon className="h-8 w-8 mr-2" /> VSS
//                 </a>
//                 <button onClick={() => setIsMenuOpen(false)} className="text-gray-700">
//                   <XIcon className="h-8 w-8" />
//                 </button>
//               </div>
//               <nav className="flex flex-col p-6 space-y-4">
//                 {navItems.map((item) => (
//                   <a
//                     key={item.id}
//                     href={`#${item.id}`}
//                     onClick={() => handleNavLinkClick(item.id)}
//                     className="text-2xl font-semibold text-gray-700 hover:text-indigo-600 transition-colors py-2"
//                   >
//                     {item.name}
//                   </a>
//                 ))}
//               </nav>
//             </div>
//           )}
//         </header>
//         <main>
//           {renderContent()}
//         </main>
//         <footer className="bg-gray-800 text-white py-12">
//           <div className="container mx-auto px-6 text-center">
//             <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
//               <div className="flex flex-col items-center md:items-start space-y-2">
//                 <a href="#" className="flex items-center text-2xl font-bold text-white">
//                   <BriefcaseIcon className="h-8 w-8 mr-2" /> VSS
//                 </a>
//                 <p className="text-sm text-gray-400">&copy; 2024 Virtual Solutions Services. All rights reserved.</p>
//               </div>
//               <div className="flex space-x-6">
//                 <a href="#" className="text-gray-400 hover:text-white transition-colors">
//                   <LinkIcon className="h-6 w-6" />
//                 </a>
//                 <a href="#" className="text-gray-400 hover:text-white transition-colors">
//                   <MessageCircleIcon className="h-6 w-6" />
//                 </a>
//                 <a href="#" className="text-gray-400 hover:text-white transition-colors">
//                   <MailIcon className="h-6 w-6" />
//                 </a>
//               </div>
//             </div>
//           </div>
//         </footer>
//       </div>
//       {showContactModal && <ContactModal onClose={() => setShowContactModal(false)} />}
//       {showApplicantModal && <ApplicantModal onClose={() => setShowApplicantModal(false)} />}
//       {showCalendarModal && <ScheduleAndCalendar onClose={() => setShowCalendarModal(false)} userRole={currentPage} events={events} onAddEvent={handleAddEvent} onDeleteEvent={handleDeleteEvent} />}
//     </>
//   );
// }
