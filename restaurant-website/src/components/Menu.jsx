import { useState } from 'react'

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('sliders')

  const menuData = {
    sliders: [
      {
        name: "Single Slider",
        description: "Chicken slider with coleslaw, pickles, frickin sauce & fries",
        spiceLevel: "🟢 Mild | 🟡 Medium | 🔴 Spicy | 🔴🔴 Extreme",
        image: "/slider.PNG"
      },
      {
        name: "Double Sliders",
        description: "Two chicken sliders with coleslaw, pickles, frickin sauce & fries",
        spiceLevel: "🟢 Mild | 🟡 Medium | 🔴 Spicy | 🔴🔴 Extreme",
        image: "/double-sliders.PNG"
      }
    ],
    tenders: [
      {
        name: "Single Tender",
        description: "Chicken tender with Texas bread coleslaw, pickles, frickin sauce & fries",
        spiceLevel: "🟢 Mild | 🟡 Medium | 🔴 Spicy | 🔴🔴 Extreme",
        image: "/tender.PNG"
      },
      {
        name: "Double Tenders",
        description: "Two chicken tenders with Texas bread coleslaw, pickles, frickin sauce",
        spiceLevel: "🟢 Mild | 🟡 Medium | 🔴 Spicy | 🔴🔴 Extreme",
        image: "/double-tenders.PNG"
      }
    ],
    specialties: [
      {
        name: "Slider & Tender Combo",
        description: "Chicken slider & tender with Texas bread, coleslaw, pickles, frickin sauce & fries",
        spiceLevel: "🟢 Mild | 🟡 Medium | 🔴 Spicy | 🔴🔴 Extreme",
        image: "/slider+tender.jpeg"
      },
      {
        name: "Frickin Loaded Fries",
        description: "Two chopped tenders with fries, coleslaw & frickin sauce",
        spiceLevel: "🟢 Mild | 🟡 Medium | 🔴 Spicy | 🔴🔴 Extreme",
        image: "/loaded-fries.PNG"
      },
      {
        name: "Rice Bowl",
        description: "Two chopped tenders with rice, coleslaw & frickin sauce",
        spiceLevel: "🟢 Mild | 🟡 Medium | 🔴 Spicy | 🔴🔴 Extreme",
        image: "/rice-bowl.PNG"
      }
    ]
  }

  const categories = [
    { id: 'sliders', name: 'Sliders', icon: '🥪' },
    { id: 'tenders', name: 'Tenders', icon: '🍗' },
    { id: 'specialties', name: 'Specialties', icon: '🍽️' }
  ]

  return (
    <section id="menu" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Menu</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From mild to extreme, we've got the heat level that's right for you
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-4 bg-white rounded-full p-2 shadow-lg">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-red-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-red-600'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuData[activeCategory].map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-cover bg-center" style={{backgroundImage: `url(${item.image})`}}></div>
              <div className="p-6">
                <div className="mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{item.name}</h3>
                </div>
                <p className="text-gray-600 mb-3">{item.description}</p>
                {item.spiceLevel && (
                  <div className="flex items-center">
                    <span className="text-sm font-medium text-gray-500 mr-2">Heat Level:</span>
                    <span>{item.spiceLevel}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Menu