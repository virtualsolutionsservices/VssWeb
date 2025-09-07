
interface HomeProps {
  handleNavLinkClick: (id: string) => void;
  setShowContactModal: (show: boolean) => void;
}

// Inline icons for a single-file solution
const TrendingUpIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
        <polyline points="16 7 22 7 22 13"></polyline>
    </svg>
);
const UserCheckIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="8.5" cy="7" r="4"></circle>
        <polyline points="17 11 19 13 23 9"></polyline>
    </svg>
);
const CodeIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
    </svg>
);
const HeadsetIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
        <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
    </svg>
);
const MessageCircleIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8.5 8.5Z"></path>
    </svg>
);
const MailIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
    </svg>
);
const MapPinIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
        <circle cx="12" cy="10" r="3"></circle>
    </svg>
);

export default function Home({ handleNavLinkClick, setShowContactModal }: HomeProps) {
  const services = [
    { icon: <TrendingUpIcon className="h-10 w-10 text-white" />, title: 'Sales Development', description: 'Boost your sales pipeline with proven systems including lead generation, prospecting, and CRM management.' },
    { icon: <UserCheckIcon className="h-10 w-10 text-white" />, title: 'Virtual Assistant Services', description: 'Our VA services are designed like training courses to fit your business needs, from admin essentials to data mastery.' },
    { icon: <CodeIcon className="h-10 w-10 text-white" />, title: 'SEO & Web Development', description: 'Strengthen your online presence with structured modules for web management, SEO foundations, and content growth.' },
    { icon: <HeadsetIcon className="h-10 w-10 text-white" />, title: 'Customer & Technical Support', description: 'Enhance customer experience through service-based tracks for help desk essentials, email, chat, and technical assistance.' },
  ];

  const testimonials = [
    { quote: "Virtual Solutions Services has been a game-changer for our small business. Their support is invaluable!", author: "Naz Dev, CEO of Tech Innovators small bussiness in tech industry." },
    { quote: "The team is professional, responsive, and always goes the extra mile. We couldn't be happier with the results.", author: "Appointment setter specialist needed to cold call, bypass gatekeepers, reach decision makers." },
    { quote: " I highly recommend working with Rosie. She is hardworking and her English is perfect.", author: "Cold calling for an agency" },
  ];

  return (
    <>
      <section id="hero" className="relative pt-24 pb-12 bg-gradient-to-br from-indigo-50 to-purple-50 overflow-hidden">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between min-h-screen">
          <div className="md:w-1/2 text-center md:text-left animate-fade-in-left">
            <h1 className="text-5xl md:text-7xl font-extrabold text-indigo-800 leading-tight tracking-tighter">
              Virtual Solutions, <br />Real Results.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-700 max-w-lg mx-auto md:mx-0">
              We empower small firms and solopreneurs with expert virtual specialists, providing tailored administrative, marketing, and sales support.
            </p>
            <button
              onClick={() => handleNavLinkClick('contact')}
              className="mt-8 px-8 py-4 bg-indigo-600 text-white font-bold text-lg rounded-full shadow-lg hover:bg-indigo-700 transition-colors duration-300 transform hover:scale-105"
            >
              Get Started Today
            </button>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center animate-fade-in-right">
            <div className="w-full max-w-lg">
{/*               <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                <rect x="10" y="20" width="80" height="60" rx="10" ry="10" className="fill-indigo-200 stroke-indigo-400 stroke-2" />
                <path d="M 15 30 L 85 30" className="stroke-indigo-400 stroke-2" />
                <rect x="20" y="40" width="60" height="5" rx="2" ry="2" className="fill-indigo-300" />
                <rect x="20" y="50" width="40" height="5" rx="2" ry="2" className="fill-indigo-300" />
                <rect x="20" y="60" width="50" height="5" rx="2" ry="2" className="fill-indigo-300" />
                <circle cx="75" cy="70" r="5" className="fill-indigo-400" />
                <path d="M 60 70 A 15 15 0 0 1 75 70" className="stroke-indigo-400 stroke-2 fill-none" />
              </svg> */}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-800">Our Services</h2>
          <p className="mt-4 text-lg text-gray-600">Solutions designed to supercharge your business.</p>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <div key={index} className="p-8 bg-indigo-600 text-white rounded-2xl shadow-xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                <div className="flex justify-center mb-4">{service.icon}</div>
                <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
                <p className="mt-2 text-indigo-100">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-gray-100">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold text-gray-800">Who We Are</h2>
            <p className="mt-4 text-lg text-gray-600">
              Founded in 2020 by Rosie Glenda, a professional with over 12 years of expertise in customer service, sales, and virtual assistance, Virtual Solutions Services (VSS) is a dynamic virtual solutions provider based in the Philippines. We are dedicated to empowering businesses worldwide with expertly managed, cost-effective, and scalable outsourcing services. Our team of highly trained professionals leverages modern facilities and a commitment to excellence to help you boost productivity, increase sales, and enhance client satisfaction. At VSS, our mission is simple: to be the seamless extension of your business, bridging the distance to help you achieve your goals.
            </p>
          </div>
          <div className="md:w-1/2">
            <div className="aspect-video w-full overflow-hidden rounded-3xl shadow-xl">
              <iframe
                className="w-full h-full"
                src="public/VSS.mp4"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-800">What Our Clients Say</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-8 bg-gray-50 rounded-2xl shadow-xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                <p className="text-lg italic text-gray-700">"{testimonial.quote}"</p>
                <p className="mt-4 font-semibold text-gray-800">- {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gray-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-800">Get in Touch</h2>
          <p className="mt-4 text-lg text-gray-600">Ready to boost your business? We're here to help. Contact our team to discuss how our solutions can be tailored to your needs.</p>
          <div className="mt-12 flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-12">
            <div className="flex items-center text-lg text-gray-700">
              <MailIcon className="h-6 w-6 mr-3 text-indigo-500" />
              <span>sales@virtualsolutionsservices.com</span>
            </div>
            <div className="flex items-center text-lg text-gray-700">
              <MapPinIcon className="h-6 w-6 mr-3 text-indigo-500" />
              <span>Philippines</span>
            </div>
          </div>
          <button
            onClick={() => setShowContactModal(true)}
            className="mt-8 px-8 py-4 bg-indigo-600 text-white font-bold text-lg rounded-full shadow-lg hover:bg-indigo-700 transition-colors duration-300 transform hover:scale-105"
          >
            <MessageCircleIcon className="inline-block h-6 w-6 mr-2" /> Send Us a Message
          </button>
        </div>
      </section>
    </>
  );
}
