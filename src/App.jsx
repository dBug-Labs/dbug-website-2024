import Community from './components/Community/Community.jsx'
import ContactUs from './components/ContactUs/ContactUs.jsx'
import Domains from './components/Domains/Domains.jsx'
import Footer from './components/Footer/Footer.jsx'
import HeroPage from './components/HeroPage/HeroPage.jsx'
import HowWeChange from './components/HowWeChange/HowWeChange.jsx'
import Navbar from './components/Navbar/Navbar.jsx'


function App() {

  return (
    <>
      <div className='bg-green-400 text-white'>
        Hello World !!
      </div>
      <Navbar />
      <HeroPage />
      <Domains />
      <HowWeChange />
      <Community />
      <ContactUs />
      <Footer />
    </>
  )
}

export default App
