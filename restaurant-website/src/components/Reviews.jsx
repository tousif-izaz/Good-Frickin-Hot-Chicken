import { useState, useEffect } from 'react'

const Reviews = () => {
  const [currentReview, setCurrentReview] = useState(0)
  const [filter, setFilter] = useState('recent')

  // Real Google Reviews data
  const reviewsData = {
    recent: [
      {
        id: 1,
        name: "lim jahey",
        rating: 4,
        date: "Recent",
        text: "The menu's streamlined approach is noteworthy. Upon placing my order, I was informed of a 15-minute preparation time, which is acceptable given the fresh preparation of the food. The \"spicy\" option offered a substantial level of heat; I may opt for the \"medium\" level on my next visit. I selected the combo meal, priced at $15, which included a chicken sandwich, a chicken tender on Texas toast, fries, and Special Sauce. The meal was exceptionally flavorful, and I would recommend this establishment."
      },
      {
        id: 2,
        name: "alyssa G",
        rating: 5,
        date: "Recent",
        text: "Food taste great & staff is friendly! I tried the double sliders and fries combo, sandwiches were tasty. They have a regular spot and also are at the thursday night market."
      },
      {
        id: 3,
        name: "Tim Burns",
        rating: 5,
        date: "Recent",
        text: "Some of the best hot chicken sandwich I have ever had! Crisp spicy chicken with a nice cool coleslaw! Crispy tangy pickles to complement the heat! Good fast service! Always hot and fresh! Definitely crave this at least once a week! Keep up the good work!"
      },
      {
        id: 4,
        name: "Faisal Nafees",
        rating: 5,
        date: "Recent",
        text: "No.1 food point in chico. Good customer service. Good food in cheap prices. Good taste. I highly recommend that everyone visit this place."
      }
    ],
    topRated: [
      {
        id: 5,
        name: "Justin W",
        rating: 5,
        date: "Top Rated",
        text: "While driving around Chico we found this little food truck in a gas station parking lot and decided to give it a try. The person working was very friendly and gave us the recommendation of the chicken sliders. I ordered one slider in the hot seasoning and one slider in the extreme. Hot was a good heat and the extreme lived up to its name. If you pass by this place and like hot chicken I would recommend giving it a try. The food is cooked to order and the fries and sauce are pretty solid as well."
      },
      {
        id: 6,
        name: "samir ali",
        rating: 5,
        date: "Top Rated",
        text: "The Sandwich and fries are taste delicious 😋 and also they maintain the hygiene here. All over very good place to eat sandwich. Another good point is they sell halal food."
      },
      {
        id: 7,
        name: "Michael Hall",
        rating: 5,
        date: "Top Rated",
        text: "Had my first trip to good fricking, hot chicken and I have to say it was awesome. Very friendly service and the food is to die for highly recommended."
      },
      {
        id: 8,
        name: "Osirys Gonzalez",
        rating: 5,
        date: "Top Rated",
        text: "Absolutely delicious. The chicken is so tender and crunchy and good. I honestly don't like coleslaw or burgers but these definitely made the cut. The mix of an amazing burger bun with chicken and amazing coleslaw was everything."
      }
    ]
  }

  const currentReviews = reviewsData[filter]

  // Auto-scroll reviews
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % currentReviews.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [currentReviews.length])

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <span key={i} className={`text-xl ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
        ★
      </span>
    ))
  }

  return (
    <section id="reviews" className="py-20 bg-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our happy customers!
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-4 bg-white rounded-full p-2 shadow-lg">
            <button
              onClick={() => {setFilter('recent'); setCurrentReview(0)}}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                filter === 'recent'
                  ? 'bg-red-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-red-600'
              }`}
            >
              Most Recent
            </button>
            <button
              onClick={() => {setFilter('topRated'); setCurrentReview(0)}}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                filter === 'topRated'
                  ? 'bg-red-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-red-600'
              }`}
            >
              Top Rated
            </button>
          </div>
        </div>

        {/* Reviews Carousel */}
        <div className="relative">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mr-4">
                  <span className="text-red-600 font-bold text-xl">
                    {currentReviews[currentReview].name.charAt(0).toUpperCase()}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{currentReviews[currentReview].name}</h3>
                  <div className="flex items-center">
                    {renderStars(currentReviews[currentReview].rating)}
                    <span className="ml-2 text-gray-500">{currentReviews[currentReview].date}</span>
                  </div>
                </div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed italic">
                "{currentReviews[currentReview].text}"
              </p>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {currentReviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentReview(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentReview ? 'bg-red-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Google Reviews Stats */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-md mx-auto">
            <div className="flex items-center justify-center mb-4">
              <img
                src="https://www.gstatic.com/marketing-cms/assets/images/0f/9a/58f1d92b46069b4a8bdc556b612c/google-maps.webp=s48-fcrop64=1,00000000ffffffff-rw"
                alt="Google"
                className="w-8 h-8 mr-2"
              />
              <span className="text-xl font-semibold text-gray-700">Google Reviews</span>
            </div>
            <div className="text-4xl font-bold text-gray-900 mb-2">4.8</div>
            <div className="flex justify-center mb-2">
              {renderStars(5)}
            </div>
            <p className="text-gray-600">Based on 80+ reviews</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Reviews