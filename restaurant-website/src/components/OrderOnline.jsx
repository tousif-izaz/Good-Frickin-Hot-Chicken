const OrderOnline = () => {
  const deliveryPartners = [
    {
      name: "Uber Eats",
      logo: "https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/97c43f8974e6c876.svg",
      url: "https://www.ubereats.com/store/good-frickin-hot-chicken/WEYfzuJwX_mbCsih6xqI_A?msockid=3a51ff676b8a6d5a2463eb8f6a186cd7",
      estimatedTime: "25-35 min",
      deliveryFee: "varies",
      bgColor: "bg-black",
      textColor: "text-white"
    },
    {
      name: "DoorDash",
      logo: "https://tse1.mm.bing.net/th/id/OIP.U6BcwosycN9N7WOesvICDQAAAA?rs=1&pid=ImgDetMain&o=7&rm=3",
      url: "https://www.doordash.com/store/good-frickin-hot-chicken-chico-34409647/70049547/",
      estimatedTime: "30-40 min",
      deliveryFee: "varies",
      bgColor: "bg-red-500",
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
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
            <a 
              href="tel:+15307209699"
              className="bg-white text-red-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-full text-lg transition-colors duration-300 inline-block text-center"
              onClick={(e) => {
                // Fallback for copying to clipboard if tel: doesn't work
                if (!navigator.userAgent.match(/iPhone|iPad|iPod|Android|BlackBerry|Opera Mini|IEMobile/i)) {
                  e.preventDefault();
                  navigator.clipboard.writeText('(530) 720-9699').then(() => {
                    alert('Phone number copied to clipboard: (530) 720-9699');
                  });
                }
              }}
            >
              📞 Call to Order: (530) 720-9699
            </a>
            <button className="bg-red-800 hover:bg-red-900 text-white font-bold py-4 px-8 rounded-full text-lg transition-colors duration-300">
              🛒 Order for Pickup
            </button>
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