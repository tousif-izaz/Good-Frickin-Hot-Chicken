import { useState } from 'react'

const StoreLocator = () => {
  const [selectedStore, setSelectedStore] = useState(0)

  const stores = [
    {
      id: 1,
      name: "Chico Nord Ave",
      address: "952 Nord avenue, chico 95926",
      phone: "(530) 720-9699",
      hours: {
        "Monday - Friday": "10:00 AM - 11:00 PM",
        "Saturday - Sunday": "12:00 PM - 11:00 PM",
        "Thursday": "10:00 AM - 4:00 PM"
      },
      features: ["Dine-in", "Takeout", "Delivery", "Parking Available"],
      coords: { lat: 36.1627, lng: -86.7816 }
    }
  ]

  return (
    <section id="locations" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Locations</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find the nearest Good Frickin' Hot Chicken location to satisfy your cravings
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Google Map */}
          <div className="order-2 lg:order-1">
            <div className="rounded-xl overflow-hidden shadow-lg h-96">
              <iframe
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=952%20Nord%20Ave,%20Chico,%20CA%2095926+(Good%20Frickin%20Hot%20Chicken)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Good Frickin Hot Chicken - 952 Nord Ave, Chico, CA"
              ></iframe>
            </div>
            <div className="mt-4 text-center">
              <a
                href="https://maps.app.goo.gl/1D57aPPCC6sEex7p9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                Open in Google Maps
              </a>
            </div>
          </div>

          {/* Store List */}
          <div className="order-1 lg:order-2">
            <div className="space-y-4">
              {stores.map((store, index) => (
                <div
                  key={store.id}
                  className={`border rounded-xl p-6 cursor-pointer transition-all duration-300 ${
                    selectedStore === index
                      ? 'border-red-500 bg-red-50 shadow-lg'
                      : 'border-gray-200 hover:border-red-300 hover:shadow-md'
                  }`}
                  onClick={() => setSelectedStore(index)}
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{store.name}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      selectedStore === index ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-600'
                    }`}>
                      {selectedStore === index ? 'Selected' : 'Select'}
                    </span>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{store.address}</span>
                    </div>
                    
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-red-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                      <span className="text-gray-700">{store.phone}</span>
                    </div>
                  </div>

                  {selectedStore === index && (
                    <div className="mt-6 pt-6 border-t border-red-200">
                      <h4 className="font-semibold text-gray-900 mb-3">Hours:</h4>
                      <div className="space-y-1 text-sm text-gray-600">
                        {Object.entries(store.hours).map(([days, hours]) => (
                          <div key={days} className="flex justify-between">
                            <span>{days}:</span>
                            <span>{hours}</span>
                          </div>
                        ))}
                      </div>
                      
                      <h4 className="font-semibold text-gray-900 mt-4 mb-2">Features:</h4>
                      <div className="flex flex-wrap gap-2">
                        {store.features.map((feature, idx) => (
                          <span key={idx} className="px-2 py-1 bg-red-100 text-red-700 text-xs rounded-full">
                            {feature}
                          </span>
                        ))}
                      </div>

                      <div className="mt-4 flex gap-3">
                        <button className="flex-1 bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300">
                          Get Directions
                        </button>
                        <button className="flex-1 border border-red-600 text-red-600 hover:bg-red-50 font-semibold py-2 px-4 rounded-lg transition-colors duration-300">
                          Call Store
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Find Nearest Location */}
        <div className="mt-16 text-center">
          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Can't Find Us?</h3>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StoreLocator