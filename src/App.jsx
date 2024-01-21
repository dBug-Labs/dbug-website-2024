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
      <div className='flex items-center justify-center sm:flex sm:justify-center sm:pl-5 '>
      <h1 className=' text-white font-Poppins  font-bold p-2 xl:text-6xl text-4xl '>Our </h1>
      <h1 className='   text-[#CDCDCD] bg-gradient-to-b from-[#CDCDCD] via-[#CDCDCD] to-[rgba(205, 205, 205, 0.00)] bg-clip-text text-transparent font-Poppins xl:text-6xl text-4xl font-bold'>Domains</h1>
      </div>
      <Domains />
      <HowWeChange />
      <Community />
      <ContactUs />
      <Footer />
    </>
  )
}

export default App
