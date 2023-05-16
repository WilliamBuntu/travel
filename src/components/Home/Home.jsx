import React from 'react'
import  './Home.css';
import year from '../../assets/year.mkv'

const Home = () => {
  return (
    <section className='home'>
    <div className='overlay'></div>
    <video src={year} muted autoPlay loop type = 'video/mkv'></video>

      <div className='homeContent container'>
        <div className='textDiv'>

        <span  className='smallTest'>
        Our Packeges
        </span>
        <h1 className='homeTitle'>
        Search your Holiday
        </h1>
        </div>


        <div className='cardDiv grid'>
        <div className='destinationInput'>
        <label htmlFor='city'>
        Search your holiday:
        </label>

        <div className='input flex'>
         <input type='text' placeholder='Enter Name here'></input>
        </div>
        </div>
        </div>

        </div>

    </section>
  )
}

export default Home

