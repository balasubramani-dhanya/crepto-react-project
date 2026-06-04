import React from 'react'
import hero1 from '../assets/hero.svg'
import Frame from '../assets/Frame.svg'
const Hero = () => {
  return (
    <div className='hero-section'
    style={{
			backgroundImage: `url(${Frame})`
		}}>
        <div className="hero">
            <div className="left">
                <h1>Embrace the Crypto Revolution</h1>
                <p>Power your Future with Blockchian</p>
                <button className='btn-primary'>Learn More</button>
            </div>
            <div className="right">
                <img src={hero1} alt="herobanner" />

            </div>
        </div>
    </div>
  )
}

export default Hero