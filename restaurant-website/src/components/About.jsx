const About = () => {
  const teamMembers = [
    {
      name: "Chef Marcus Johnson",
      role: "Founder & Head Chef",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Born and raised in Nashville, Marcus brings authentic Southern flavors with a modern twist to every dish."
    },
    {
      name: "Sarah Williams",
      role: "Operations Manager",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "With 15 years in restaurant management, Sarah ensures every customer has an exceptional experience."
    },
    {
      name: "Tony Rodriguez",
      role: "Executive Chef",
      image: "https://images.unsplash.com/photo-1583394293214-28ded15ee548?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Tony's passion for spice and flavor innovation keeps our menu exciting and our heat levels perfect."
    }
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Story Section */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Story</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <h3 className="text-2xl font-bold text-red-600 mb-6">From Nashville Streets to Your Plate</h3>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  It all started in 2018 when Chef Marcus Johnson had a simple mission: bring the most 
                  authentic, mouth-watering hot chicken experience to Nashville and beyond. Growing up 
                  in Music City, Marcus knew what real Nashville hot chicken should taste like.
                </p>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  After years of perfecting his secret spice blend and cooking techniques, Good Frickin' 
                  Hot Chicken was born. We're not just another chicken restaurant – we're a celebration 
                  of Nashville's rich culinary heritage with a modern twist that'll make your taste buds sing.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Every piece of chicken is hand-breaded, seasoned with our signature spice blend, and 
                  cooked to perfection. We believe in quality ingredients, bold flavors, and creating 
                  experiences that bring people together over great food.
                </p>
              </div>
              <div className="lg:order-first">
                <img
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Restaurant kitchen"
                  className="rounded-xl shadow-lg w-full h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">What We Stand For</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🔥</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Authentic Heat</h4>
              <p className="text-gray-600">
                We never compromise on authenticity. Our spice blends are crafted using traditional 
                Nashville methods passed down through generations.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🏆</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Quality First</h4>
              <p className="text-gray-600">
                From sourcing the freshest local ingredients to hand-breading every piece, 
                we're committed to excellence in every bite.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">❤️</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Community Love</h4>
              <p className="text-gray-600">
                We're more than a restaurant – we're part of the Nashville community, 
                supporting local farmers and giving back whenever we can.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div>
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Meet Our Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-48 h-48 rounded-full mx-auto object-cover shadow-lg"
                  />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h4>
                <p className="text-red-600 font-semibold mb-4">{member.role}</p>
                <p className="text-gray-600 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Awards & Recognition */}
        <div className="mt-20 bg-red-50 rounded-2xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">Awards & Recognition</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-4xl mb-2">🏆</div>
              <h4 className="font-bold text-gray-900">Best Hot Chicken</h4>
              <p className="text-sm text-gray-600">Nashville Scene 2023</p>
            </div>
            <div>
              <div className="text-4xl mb-2">⭐</div>
              <h4 className="font-bold text-gray-900">Top Rated</h4>
              <p className="text-sm text-gray-600">Google Reviews 4.8/5</p>
            </div>
            <div>
              <div className="text-4xl mb-2">🌶️</div>
              <h4 className="font-bold text-gray-900">Spiciest Menu</h4>
              <p className="text-sm text-gray-600">Nashville Food Awards</p>
            </div>
            <div>
              <div className="text-4xl mb-2">📺</div>
              <h4 className="font-bold text-gray-900">Featured On</h4>
              <p className="text-sm text-gray-600">Food Network</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About