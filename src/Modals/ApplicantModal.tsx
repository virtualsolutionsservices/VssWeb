import { useState } from 'react';
import { XIcon } from 'lucide-react';

interface ApplicantModalProps {
  onClose: () => void;
}

export default function ApplicantModal({ onClose }: ApplicantModalProps) {
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900 bg-opacity-50 backdrop-blur-sm transition-opacity duration-300">
      <div className="bg-white rounded-3xl p-8 max-w-xl w-full shadow-2xl relative transform scale-100 transition-transform duration-300">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors">
          <XIcon className="h-6 w-6" />
        </button>
        <h3 className="text-3xl font-bold text-gray-800 mb-6">Application Form</h3>
        <p className="text-gray-700">
          This is a placeholder for your application form and test. You can connect this to your own system.
        </p>
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label htmlFor="job-title" className="block text-sm font-medium text-gray-700">Job Title</label>
            <input type="text" id="job-title" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 border" required />
          </div>
          <div>
            <label htmlFor="resume" className="block text-sm font-medium text-gray-700">Upload Resume</label>
            <input type="file" id="resume" className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100" />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-3 bg-indigo-600 text-white font-bold rounded-lg shadow-md hover:bg-indigo-700 transition-colors duration-300"
          >
            Submit Application
          </button>
        </form>
        {showSuccess && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-green-500 text-white px-6 py-3 rounded-xl shadow-lg transition-opacity duration-300 animate-fade-in">
            Application Submitted!
          </div>
        )}
      </div>
    </div>
  );
}