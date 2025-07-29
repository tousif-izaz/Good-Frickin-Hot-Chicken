const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center bg-gradient-to-r from-red-900 to-red-700">
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero_vid.mp4" type="video/mp4" />
        <source src="/hero_vid_2.mp4" type="video/mp4" />
      </video>
      
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30 z-10"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <div className="flex justify-center mb-6">
          <img
            src="/logo.jpg"
            alt="Good Frickin' Hot Chicken Logo"
            className="h-24 w-24 md:h-32 md:w-32 rounded-full object-cover border-4 border-white shadow-lg"
          />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Good Frickin' <span className="text-red-300">Hot Chicken</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200">
          Nashville-style hot chicken with frickin' amazing flavor that'll blow your mind
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#order"
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Order Now
          </a>
          <a
            href="#menu"
            className="bg-transparent border-2 border-white hover:bg-white hover:text-red-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
          >
            View Menu
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}

export default Hero