const OrderOnline = () => {
  const deliveryPartners = [
    {
      name: "Uber Eats",
      logo: "https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/97c43f8974e6c876.svg",
      url: "#",
      estimatedTime: "25-35 min",
      deliveryFee: "$2.99",
      bgColor: "bg-black",
      textColor: "text-white"
    },
    {
      name: "DoorDash",
      logo: "https://img.logoipsum.com/243.svg",
      url: "#",
      estimatedTime: "30-40 min",
      deliveryFee: "$3.49",
      bgColor: "bg-red-500",
      textColor: "text-white"
    },
    {
      name: "Grubhub",
      logo: "https://img.logoipsum.com/244.svg",
      url: "#",
      estimatedTime: "35-45 min",
      deliveryFee: "$2.49",
      bgColor: "bg-orange-500",
      textColor: "text-white"
    }
  ]

  return (
    <section id="order" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Order Online</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Get your hot chicken fix delivered right to your door
          </p>
        </div>

        {/* Delivery Partners */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {deliveryPartners.map((partner, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className={`${partner.bgColor} ${partner.textColor} p-6 text-center`}>
                <div className="h-16 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold">{partner.name}</span>
                </div>
                <div className="space-y-2 text-sm">
                  <p>Delivery: {partner.estimatedTime}</p>
                  <p>Fee: {partner.deliveryFee}</p>
                </div>
              </div>
              <div className="p-6">
                <button 
                  onClick={() => window.open(partner.url, '_blank')}
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
                >
                  Order Now on {partner.name}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Direct Ordering CTA */}
        <div className="bg-red-600 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold mb-4">Order Directly & Save!</h3>
          <p className="text-xl mb-6 text-red-100">
            Skip the delivery fees and order directly from us for pickup
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-red-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-full text-lg transition-colors duration-300">
              📞 Call to Order: (615) 555-HOT1
            </button>
            <button className="bg-red-800 hover:bg-red-900 text-white font-bold py-4 px-8 rounded-full text-lg transition-colors duration-300">
              🛒 Order for Pickup
            </button>
          </div>
        </div>

        {/* Special Offers */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-r from-red-800 to-red-600 rounded-xl p-6 text-center">
            <h4 className="text-2xl font-bold mb-2">🔥 First Order Special</h4>
            <p className="text-red-100 mb-4">Get 20% off your first online order</p>
            <p className="text-sm text-red-200">Use code: FIRSTHEAT</p>
          </div>
          <div className="bg-gradient-to-r from-yellow-600 to-orange-500 rounded-xl p-6 text-center">
            <h4 className="text-2xl font-bold mb-2">⚡ Fast Pickup</h4>
            <p className="text-yellow-100 mb-4">Order ahead for lightning fast pickup</p>
            <p className="text-sm text-yellow-200">Ready in 15 minutes or less</p>
          </div>
        </div>

        {/* Hours */}
        <div className="mt-16 text-center">
          <h4 className="text-2xl font-bold mb-6">Ordering Hours</h4>
          <div className="bg-gray-800 rounded-xl p-6 max-w-md mx-auto">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Monday - Thursday:</span>
                <span>11:00 AM - 10:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Friday - Saturday:</span>
                <span>11:00 AM - 11:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday:</span>
                <span>12:00 PM - 9:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OrderOnline