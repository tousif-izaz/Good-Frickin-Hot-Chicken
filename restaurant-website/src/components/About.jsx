const About = () => {

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Story Section */}
        <div className="text-center mb-20">
          <div className="flex justify-center mb-6">
            <img
              src="/logo.jpg"
              alt="Good Frickin Hot Chicken Logo"
              className="h-20 w-20 rounded-full object-cover shadow-lg border-4 border-red-100"
            />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Story</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <h3 className="text-2xl font-bold text-red-600 mb-6">The First Hot Chicken Place in Chico</h3>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Welcome to Chico's first hot chicken destination, where flavor meets heat in ways you've 
                  never experienced before. We started our journey in May 2025 with one simple mission: 
                  to satisfy your fried chicken cravings like it has never been done before.
                </p>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  At Good Frickin Hot Chicken, we believe every customer deserves a personalized experience. 
                  Get your order customized to your heat preferences - from mild to extreme - and enjoy every 
                  single bite knowing it was crafted just for you.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Every piece of chicken is hand-breaded, seasoned with our signature spice blend, and 
                  cooked to perfection. We believe in quality ingredients, bold flavors, and creating 
                  experiences that bring people together over great food.
                </p>
              </div>
              <div className="lg:order-first">
                <img
                  src="/truck.jpg"
                  alt="Good Frickin Hot Chicken Food Truck"
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
                Nashville methods.
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
                We're more than a restaurant – we're part of the Chico community, 
                supporting local farmers and giving back whenever we can.
              </p>
            </div>
          </div>
        </div>


      </div>
    </section>
  )
}

export default About