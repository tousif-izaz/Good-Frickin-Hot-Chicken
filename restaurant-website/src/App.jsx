import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Menu from './components/Menu'
import Reviews from './components/Reviews'
import OrderOnline from './components/OrderOnline'
import StoreLocator from './components/StoreLocator'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Menu />
      <Reviews />
      <OrderOnline />
      <StoreLocator />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
