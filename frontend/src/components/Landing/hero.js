import React from 'react'
import {FaFacebookF, FaInstagram, FaTwitter} from 'react-icons/fa';
import {BiMenu} from 'react-icons/bi';
import './videoBackground.css';

const Hero = () => {
  return (
   <div className='video-background'> 
  {/* <video autoPlay loop muted className="absolute z-1 w-auto min-w-full min-h-full max-w-none">
    <source src='https://www.youtube.com/embed/-MKapbz0GIo' type="video/mp4" />Your browser does not support the video tag.
  </video> */}
  <div className="flex flex-col absolute w-full h-full z-10 p-10 text-white">
      
        <div className="flex font-bold flex-col my-auto max-w-[38rem] backdrop-blur-[40px] p-4 rounded-3xl">
            <div className="uppercase text-8xl">Never stop</div>
            <div className="uppercase text-5xl mb-6">Exploring the world</div>
            <div className="mb-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.
            </div>
            <button className="mr-auto px-6 py-2 bg-white text-lg text-black uppercase rounded-lg font-bold">Explore</button>
        </div>
    </div>;
  <iframe className='overflow-hidden w-full h-screen'  
          width='100%'
          height='100%'
          src="https://www.youtube.com/embed/-MKapbz0GIo?autoplay=1&controls=0&mute=1&loop=1&modestbranding=1&showinfo=0&enablejsapi=1&&widgetid=3&start-5&playlist=-MKapbz0GIo" 
          title="4k background footage (ideal for Blockchain Website)" 
          frameBorder="0"
          loop='true'
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
          
</div>
  )
}

export default Hero