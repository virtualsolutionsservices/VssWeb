import { BriefcaseIcon, MenuIcon, XIcon } from '../icons/icons';


interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
  handleNavLinkClick: (id: string) => void;
  setCurrentPage: (page: string) => void;
}

export default function Header({ isMenuOpen, setIsMenuOpen, handleNavLinkClick, setCurrentPage }: HeaderProps) {
  const navItems = [
    { name: 'Services', id: 'services' },
    { name: 'About Us', id: 'about' },
    { name: 'Testimonials', id: 'testimonials' },
    { name: 'Contact', id: 'contact' },
    { name: 'Applicants', id: 'applicants' },
    { name: 'Employers', id: 'employers' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-40 bg-white shadow-md transition-all duration-300 md:bg-white/80 md:backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center text-2xl font-bold text-indigo-600" onClick={() => setCurrentPage('home')}>
          <img className="h-8 w-8 mr-2" src='../public/logoVss.jpg' /> VSS
        </a>
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => handleNavLinkClick(item.id)}
              className="text-lg font-medium text-gray-700 hover:text-indigo-600 transition-colors"
            >
              {item.name}
            </a>
          ))}
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 hover:text-indigo-600 transition-colors">
            <MenuIcon className="h-8 w-8" />
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-50 animate-fade-in">
          <div className="flex justify-between items-center p-6 border-b">
            <a href="#" className="flex items-center text-2xl font-bold text-indigo-600" onClick={() => { setCurrentPage('home'); setIsMenuOpen(false); }}>
              <div className="h-8 w-8 mr-2"/> VSS
            </a>
            <button onClick={() => setIsMenuOpen(false)} className="text-gray-700">
              <XIcon className="h-8 w-8" />
            </button>
          </div>
          <nav className="flex flex-col p-6 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => handleNavLinkClick(item.id)}
                className="text-2xl font-semibold text-gray-700 hover:text-indigo-600 transition-colors py-2"
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}