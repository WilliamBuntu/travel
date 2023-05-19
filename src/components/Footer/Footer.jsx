import React from 'react'
import  './Footer.css';
import Reel from '../../assets/Reel.mp4'
import { FiSend } from 'react-icons/fi';

const Footer = () => {
  return (
    <section className='footer'>
        <div className='videoDiv'>
             <video src={Reel} muted autoPlay loop type = 'video/mp4'></video>

        </div>


        <div className='secContent container'>
            <div className='contactDiv flex'>
                <div className='text'>
                    <small> KEEP IN TOUCH</small>
                    <h2>Travel with us</h2>
                </div>

                <div className='inputDiv flex'>
                    <input type='text' placeholder='Enter Email Address'/>
                    <button className='btn flex' type='submit'>
                     SEND<FiSend className='icon'/>
                    </button>
                </div>
            </div>

            <div className='footerCard flex'>
                <div className='footerIntro flex'>
                    <div className='logoDiv'>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer

