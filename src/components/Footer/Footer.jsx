import React from 'react'
import  './Footer.css';
import Reel from '../../assets/Reel.mp4'
import { FiChevronRight, FiSend } from 'react-icons/fi';
import {MdOutlineTravelExplore} from 'react-icons/md'
import {FaTripadvisor} from 'react-icons/fa'
import { AiFillInstagram, AiFillYoutube, AiOutlineTwitter } from 'react-icons/ai';

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
                      <a href='/' className='logo flex'>
                        <MdOutlineTravelExplore className='icon'/>
                        Travel.
                      </a>
                    </div>

                    <div className='footerParagraph'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                     labore et dolore magna aliqua. Ut enim ad minim veniam,Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                     labore et dolore magna aliqua. Ut enim ad minim veniam,Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                     labore et dolore magna aliqua. Ut enim ad minim veniam,
                    </div>

                    <div className='footerSocials flex'>
                         <AiOutlineTwitter className='icon'/>
                         <AiFillYoutube  className='icon' />
                         <AiFillInstagram   className='icon'/>
                         <FaTripadvisor className='icon'/>
                    </div>

                </div>

                 <div className='footerLinks grid'>
                     <div className='linkGroup'>
                        <span className='groupTitle'>
                        OUR AGENCY
                        </span>

                        <li className='footerList flex'>
                        <FiChevronRight className='icon'/>
                        Services
                        </li>

                        <li className='footerList flex'>
                        <FiChevronRight className='icon'/>
                        Assurance
                        </li>

                        <li className='footerList flex'>
                        <FiChevronRight className='icon'/>
                        Agency
                        </li>

                        <li className='footerList flex'>
                        <FiChevronRight className='icon'/>
                        Tourism
                        </li>

                        <li className='footerList flex'>
                        <FiChevronRight className='icon'/>
                        Payment
                        </li>
                     </div>

                     <div className='linkGroup'>
                        <span className='groupTitle'>
                        PARTNERS
                        </span>

                        <li className='footerList flex'>
                        <FiChevronRight className='icon'/>
                        Bookings
                        </li>

                        <li className='footerList flex'>
                        <FiChevronRight className='icon'/>
                        Rentcars
                        </li>

                        <li className='footerList flex'>
                        <FiChevronRight className='icon'/>
                        Hostels
                        </li>

                        <li className='footerList flex'>
                        <FiChevronRight className='icon'/>
                        Travigo
                        </li>

                        <li className='footerList flex'>
                        <FiChevronRight className='icon'/>
                        Trip Advisor
                        </li>
                     </div>

                     <div className='linkGroup'>
                        <span className='groupTitle'>
                        LAST MINUTE
                        </span>

                        <li className='footerList flex'>
                        <FiChevronRight className='icon'/>
                        London
                        </li>

                        <li className='footerList flex'>
                        <FiChevronRight className='icon'/>
                        Califonia
                        </li>

                        <li className='footerList flex'>
                        <FiChevronRight className='icon'/>
                        Indonesia
                        </li>

                        <li className='footerList flex'>
                        <FiChevronRight className='icon'/>
                        Europe
                        </li>

                        <li className='footerList flex'>
                        <FiChevronRight className='icon'/>
                        Oceania
                        </li>
                     </div>
                 </div>

                 <div className='footerDiv flex'>
                  <small> BEST TRAVEL WEBSITE BY williambuntu1@gmail.com</small>
                  <small> COPYRIGHTS RESERVED BUNTU WILLIAM</small>

                 </div>


            </div>
        </div>
    </section>
  )
}

export default Footer

