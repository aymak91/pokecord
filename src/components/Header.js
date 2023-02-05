import React from 'react';
import { MenuIcon } from "@heroicons/react/outline";
import {useNavigate} from 'react-router-dom';

function Header({signIn, user}) {

    const navigate = useNavigate();

    return (
        <header className="flex items-center justify-between py-4 px-6 bg-discord_blue">
            <a href='/'>
                <div className='flex text-4xl text-white font-bold'>
                    Pokécord
                    <img src='https://i.ibb.co/hLczJRX/pokemonlogo.png' alt='' className='w-16 h-12 object-contain'/>
                </div>
            </a>
            <div className="hidden lg:flex space-x-6 text-white">
                <a href="https://github.com/aymak91/pokecord" target="_blank" className="link">Github</a>
                <a href="https://www.linkedin.com/in/alexanderyumak/" target="_blank" className="link">LinkedIn</a>
                <a href="https://alexandermak.dev/" target="_blank" lassName="link" className='link'>About Me</a>
                <a href="https://alexandermak.dev/#contact" target="_blank" className="link">Contact</a>
            </div>

            <div className="flex space-x-4">
                <button className='bg-white p-2 rounded-full text-xs md:text-sm px-4 focus:outline-none hover:shadow-2xl hover:text-discord_blurple transition duration-200 ease-in-out whitespace-nowrap font-medium' onClick={!user ? signIn : () => navigate("/channels")}>
                    {!user ? "Login" : "Open Discord"}
                </button>
                <MenuIcon className='h-9 text-white cursor-pointer lg:hidden' />

            </div>
        </header>
    )
}

export default Header
