import React from 'react';

const testimonials = [
  {
    content: "The most secure and user-friendly identity verification system we've implemented.",
    author: "Rajdeep Singha",
    role: "CTO, MEMEX",
    image: "https://images.unsplash.com/photo-1551583899-d3f6258ec7c9?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    content: "This platform has revolutionized how we handle identity verification.",
    author: "Anika Khajuria",
    role: "Security Lead, CAPX",
    image: "https://images.unsplash.com/photo-1610097453820-0c3c8aac0202?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNvZGVyfGVufDB8fDB8fHww"
  },
  {
    content: "Outstanding security features and excellent user experience.",
    author: "Mohammad Maroof",
    role: "Product Manager, BeraChain",
    image: "https://plus.unsplash.com/premium_photo-1690521447032-8c608d25a0e6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGNvZGVyfGVufDB8fDB8fHww"
  },
];

const Testimonials = () => {
  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Trusted by Industry Leaders
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            See what our clients have to say about our identity verification platform
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <div className="p-8">
                <div className="relative h-12">
                  <svg className="absolute h-12 w-12 text-indigo-200 opacity-50" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                </div>
                <p className="mt-4 text-lg text-gray-600">{testimonial.content}</p>
                <div className="mt-6 flex items-center">
                  <img
                    className="h-12 w-12 rounded-full"
                    src={testimonial.image}
                    alt={testimonial.author}
                  />
                  <div className="ml-4">
                    <p className="text-base font-medium text-gray-900">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <h3 className="text-center text-2xl font-bold text-gray-900">Our Partners & Certifications</h3>
          <div className="mt-8 flex justify-center space-x-8">
            {/* Partner logos would go here - using placeholder colored boxes for now */}
            <div className="h-12 w-32 bg-gray-200 rounded-md"></div>
            <div className="h-12 w-32 bg-gray-200 rounded-md"></div>
            <div className="h-12 w-32 bg-gray-200 rounded-md"></div>
            <div className="h-12 w-32 bg-gray-200 rounded-md"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;