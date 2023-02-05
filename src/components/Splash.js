import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Hero from './Hero'

function Splash() {
  return (
    <div>
      <Header />
      <Hero />
      <div className="absolute left-0 bottom-0 right-0 invisible md:visible md:h-10vh">
        <Footer />
      </div>
    </div>
  )
}

export default Splash
