import React from 'react'
import './Main.css';
import mn from '../../assets/mn.jpg'
import {HiOutlineLocationMarker} from 'react-icons/hi'



const data = [
  {
    id:1,
    imgSrc:mn,
    destTitle:'Bora Bora',
    location: 'New Zealand',
    grade: 'CALTURAL RELAX',
    fees: '$700',
    
     description: "The epitome of romance, Bora Bora is one of the best destinations for a relaxing cultural experience."


  },
  {
    id: 2,
    imgSrc: 'ab',
    destTitle: 'Santorini',
    location: 'Greece',
    grade: 'SCENIC BEAUTY',
    fees: '$1000',
    description: "Famous for its stunning sunsets and white-washed buildings, Santorini offers breathtaking scenic beauty."
  },

   {
    id: 3,
    imgSrc: 'xy',
    destTitle: 'Tokyo',
    location: 'Japan',
    grade: 'VIBRANT CITY',
    fees: '$1200',
    description: "Tokyo, the capital of Japan, is a vibrant city known for its blend of modern technology and rich traditional culture."
  },
]


const Main = () => {
  return (

      <section className='main container section'>


              <div className='secTitle'>
                <h3 className='title'>
                Most visited destinations are
                </h3>
              </div>

                <div className='secContent grid'>

                {
                  data.map(({id, imgSrc, destTitle, location, grade, fees, description}) =>{
                    return(
                      <div key={id} className='singleDestination'>

                        <div className='imageDiv'>
                            <img src={imgSrc} alt={destTitle} />
                        </div>

                        <div className='cardInfo'>
                            <h4 className='destTitle'>
                            {destTitle}
                            </h4>
                            <span className='continent flex' >
                               <HiOutlineLocationMarker className='icon'/>
                               <span className='name'>
                               {location}
                               </span>

                            </span>

                            <div className='fees flex'>
                                <div className='grade'>
                                <span> {grade}
                                <small>+1</small>
                                </span>
                                </div>
                                    <div className='price'>
                                        <h5>{fees}</h5>
                                    </div>


                            </div>

                                 <div className='desc'>
                                     <p> {description}</p>
                                 </div>
                        </div>

                      </div>
                    )
                  })
                }

                </div>


      </section>

  )
}

export default Main

