import { Link } from 'react-router-dom';

const Home = () => {
  // Featured services for the home page
  const featuredServices = [
    {
      name: 'Haircut & Styling',
      description: 'Professional haircut and styling services for all hair types',
      price: '$45',
      image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    },
    {
      name: 'Facial Treatment',
      description: 'Rejuvenating facial treatments for glowing skin',
      price: '$75',
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    },
    {
      name: 'Manicure & Pedicure',
      description: 'Luxurious nail care and treatments',
      price: '$60',
      image: 'https://images.unsplash.com/photo-1610992018333-f839b4debe10?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    },
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')`,
          }}
        />
        <div className="relative z-20 text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4">Welcome to Manju Salon</h1>
          <p className="text-xl mb-8">Experience luxury beauty treatments</p>
          <Link to="/booking" className="btn-primary">
            Book Appointment
          </Link>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredServices.map((service) => (
            <div key={service.name} className="card group">
              <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <p className="text-primary font-bold">{service.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary text-white py-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Look?</h2>
          <p className="text-xl mb-8">Book your appointment today and experience luxury beauty care</p>
          <Link to="/booking" className="btn-secondary">
            Schedule Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home; 