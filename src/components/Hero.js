import { DownloadIcon } from '@heroicons/react/outline'
import React from 'react'

function Hero() {
  return (
    <div className='bg-garchomp w-full h-full bg-no-repeat bg-cover bg-top pb-8 md:pb-0'>
      <div className='p-7 py-9 h-screen md:h-83vh md:flex relative'>
        <div className='flex flex-col gap-7 md:max-w-md lg:max-w-none lg:justify-center'>
          <h1 className='text-5xl text-white font-bold'>Where trainers gather to be the very best</h1>
          <h2 className='text-white text-lg font- tracking-wide lg:max-w-3xl'>Pokecord is the most comprehensive and accurate online resource for competitive Pokémon battling. Our communities help fellow trainers compete at every level, while honing their skills in every aspect of competitive Pokémon from team building to battling tactics. Our over-450,000-member organization is growing at an ever increasing rate, constantly expanding our knowledge base and our ability to be at the cutting edge of the game.</h2>
          <div className='flex flex-col sm:flex-row md:flex-col lg:flex-row md:items-start sm:items-center gap-6'>
            <button className='bg-white w-60 font-medium flex items-center justify-center rounded-full p-4 text-lg hover:shadow-2xl hover:text-discord_blurple focus:outline-none transition duration-500 ease-in-out'>
              <DownloadIcon className="w-6 mr-2"/>
              Download for Mac</button>
            <button className='bg-gray-900 text-white w-72 font-medium flex items-center justify-center rounded-full p-4 text-lg hover:shadow-2xl hover:bg-gray-800 focus:outline-none transition duration-500 ease-in-out'>Open Discord in your Browser</button>
          </div>
        </div>
        <div className='flex-grow items-center'>
          {/* <img src='https://i.ibb.co/RyVg3mN/lucario.png' alt='' className=""></img>
          <img src='' alt=''></img> */}
        </div>
      </div>
    </div>
  )
}

export default Hero
