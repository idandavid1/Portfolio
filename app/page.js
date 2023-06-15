import { About, Contact, Hero, Navbar,
   Works, StarsCanvas, Tech } from './components'
import { ToastContainer } from 'react-toastify'

export default function Home() {
  return (
      <div className='relative z-0 bg-primary'>
        <ToastContainer />
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Tech />
        <Works />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
  )
}
