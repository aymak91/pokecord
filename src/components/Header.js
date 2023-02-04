import React from 'react'

function Header() {
  return (
    <header className="flex items-center justify-between py-4 px-6 bg-discord_blue">
        <a href='/'>
            <img src='https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0b5493894cf60b300587_full_logo_white_RGB.svg' alt='' className='w-32 h-12 object-contain'/>
        </a>
        <div className="hidden lg:flex space-x-6 text-white">
            <a className="link">Download</a>
            <a className="link">Why Discord?</a>
            <a className="link">Nitro</a>
            <a className="link">Safety</a>
            <a className="link">Support</a>
        </div>

        <div className="flex space-x-4">
            <button className='bg-white p-2 rounded-full text-xs md:text-sm px-4 focus:outline-none hover:shadow-2x1 hover:text-discord_blurple transition duration-200 ease-in-out whitespace-nowrap font-medium'>Login</button>
        </div>
    </header>
  )
}

export default Header
