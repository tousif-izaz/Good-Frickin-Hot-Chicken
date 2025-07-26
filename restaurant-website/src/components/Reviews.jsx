import { useState, useEffect } from 'react'

const Reviews = () => {
  const [currentReview, setCurrentReview] = useState(0)
  const [filter, setFilter] = useState('recent')

  // Mock Google Reviews data
  const reviewsData = {
    recent: [
      {
        id: 1,
        name: "Sarah Johnson",
        rating: 5,
        date: "2 days ago",
        text: "Best hot chicken in Nashville! The Frickin' Inferno sandwich was absolutely perfect - just the right amount of heat with incredible flavor.",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b1a4?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
      },
      {
        id: 2,
        name: "Mike Rodriguez",
        rating: 5,
        date: "5 days ago",
        text: "Holy moly! This place lives up to its name. The chicken is frickin' hot and frickin' delicious. Will definitely be back!",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
      },
      {
        id: 3,
        name: "Emily Chen",
        rating: 4,
        date: "1 week ago",
        text: "Great atmosphere and even better chicken! The honey hot sandwich was amazing. Staff was super friendly too.",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
      },
      {
        id: 4,
        name: "David Thompson",
        rating: 5,
        date: "1 week ago",
        text: "I've tried hot chicken all over Nashville, and this place is definitely in my top 3. The spice levels are perfect and the sides are great too.",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
      }
    ],
    topRated: [
      {
        id: 5,
        name: "Jessica Williams",
        rating: 5,
        date: "2 weeks ago",
        text: "Absolutely incredible! This is what hot chicken should be. Perfect crispy coating, juicy meat, and that heat hits just right. 10/10!",
        avatar: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
      },
      {
        id: 6,
        name: "Robert Brown",
        rating: 5,
        date: "3 weeks ago",
        text: "Best damn chicken sandwich I've ever had! The service was quick, staff was amazing, and the food... chef's kiss! 🔥",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
      },
      {
        id: 7,
        name: "Amanda Davis",
        rating: 5,
        date: "1 month ago",
        text: "Hands down the best hot chicken in town! The flavors are incredible and you can actually taste the quality ingredients. Highly recommend!",
        avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
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
                <img
                  src={currentReviews[currentReview].avatar}
                  alt={currentReviews[currentReview].name}
                  className="w-16 h-16 rounded-full mr-4"
                />
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
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="Google"
                className="w-8 h-8 mr-2"
              />
              <span className="text-xl font-semibold text-gray-700">Google Reviews</span>
            </div>
            <div className="text-4xl font-bold text-gray-900 mb-2">4.8</div>
            <div className="flex justify-center mb-2">
              {renderStars(5)}
            </div>
            <p className="text-gray-600">Based on 127+ reviews</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Reviews