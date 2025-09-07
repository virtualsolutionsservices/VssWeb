import {  LinkIcon, MessageCircleIcon, MailIcon } from '../icons/icons';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6 text-center">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="flex flex-col items-center md:items-start space-y-2">
            <a href="#" className="flex items-center text-2xl font-bold text-white">
              <img className="h-8 w-8 mr-2" src='../public/logoVss.jpg' /> VSS
            </a>
            <p className="text-sm text-gray-400">&copy; 2024 Virtual Solutions Services. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <LinkIcon className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <MessageCircleIcon className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <MailIcon className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
