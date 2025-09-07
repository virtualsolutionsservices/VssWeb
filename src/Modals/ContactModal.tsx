// 'use client';
// import React, { useState } from 'react';
// import { X } from 'lucide-react';

// interface ContactModalProps {
//   onClose: () => void;
// }

// const ContactModal: React.FC<ContactModalProps> = ({ onClose }) => {
//   const [sent, setSent] = useState(false);

//   const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setSent(true);
//     setTimeout(() => {
//       setSent(false);
//       onClose();
//     }, 2000);
//   };

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900 bg-opacity-50 backdrop-blur-sm">
//       <div className="bg-white rounded-3xl p-8 max-w-xl w-full shadow-2xl relative">
//         <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
//           <X size={24} />
//         </button>
//         <h3 className="text-3xl font-bold text-gray-800 mb-6">Send Us a Message</h3>

//         <form onSubmit={handleFormSubmit} className="space-y-4">
//           <div>
//             <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
//             <input id="name" type="text" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 border" />
//           </div>
//           <div>
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
//             <input id="email" type="email" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 border" />
//           </div>
//           <div>
//             <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
//             <textarea id="message" rows={4} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 border" />
//           </div>

//           <button type="submit" className="w-full px-4 py-3 bg-indigo-600 text-white font-bold rounded-lg shadow-md hover:bg-indigo-700">
//             Send Message
//           </button>

//           {sent && (
//             <p className="text-center text-sm text-green-600 mt-2">Thanks! Your message has been sent.</p>
//           )}
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ContactModal;
