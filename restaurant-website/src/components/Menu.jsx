import { useState } from 'react'

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('sandwiches')

  const menuData = {
    sandwiches: [
      {
        name: "Classic Hot Chicken Sandwich",
        price: "$12.99",
        description: "Nashville hot chicken breast, pickles, and mayo on a brioche bun",
        spiceLevel: "🌶️🌶️",
        image: "https://images.unsplash.com/photo-1606755962773-d324e2e3f19c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
      },
      {
        name: "Frickin' Inferno Sandwich",
        price: "$14.99",
        description: "Our hottest chicken with ghost pepper sauce, jalapeños, and pepper jack",
        spiceLevel: "🌶️🌶️🌶️🌶️🌶️",
        image: "https://images.unsplash.com/photo-1619740455993-32c5d5705dea?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
      },
      {
        name: "Honey Hot Sandwich",
        price: "$13.99",
        description: "Sweet and spicy with our signature honey glaze and hot sauce",
        spiceLevel: "🌶️🌶️🌶️",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
      }
    ],
    combos: [
      {
        name: "The Full Heat Combo",
        price: "$18.99",
        description: "Hot chicken sandwich, spicy fries, coleslaw, and a drink",
        spiceLevel: "🌶️🌶️🌶️",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
      },
      {
        name: "Family Fire Pack",
        price: "$45.99",
        description: "4 hot chicken pieces, 2 sides, 4 biscuits, feeds 2-3 people",
        spiceLevel: "🌶️🌶️",
        image: "https://images.unsplash.com/photo-1562967914-608f82629710?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
      }
    ],
    sides: [
      {
        name: "Nashville Hot Fries",
        price: "$5.99",
        description: "Crispy fries tossed in our signature hot seasoning",
        spiceLevel: "🌶️🌶️",
        image: "https://images.unsplash.com/photo-1518013431117-eb1465fa5752?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
      },
      {
        name: "Cooling Coleslaw",
        price: "$4.99",
        description: "Creamy coleslaw to cool down the heat",
        spiceLevel: "",
        image: "https://images.unsplash.com/photo-1588566565463-180a5b2090d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
      },
      {
        name: "Buttermilk Biscuits",
        price: "$3.99",
        description: "Fluffy buttermilk biscuits with honey butter",
        spiceLevel: "",
        image: "https://images.unsplash.com/photo-1571066811602-716837d681de?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
      }
    ]
  }

  const categories = [
    { id: 'sandwiches', name: 'Sandwiches', icon: '🥪' },
    { id: 'combos', name: 'Combos', icon: '🍽️' },
    { id: 'sides', name: 'Sides', icon: '🍟' }
  ]

  return (
    <section id="menu" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Menu</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From mild to wild, we've got the heat level that's right for you
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
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{item.name}</h3>
                  <span className="text-2xl font-bold text-red-600">{item.price}</span>
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