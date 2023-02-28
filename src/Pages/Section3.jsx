import React from 'react'
import './Section3.css'
import { GrMapLocation} from 'react-icons/gr';
import { GiCommercialAirplane} from 'react-icons/gi';
import { BsCameraFill} from 'react-icons/bs';

const Section3 = () => {
  return (
  <>
  <div className='Section3-Text'>
  <h2>SEARCH WORLDWIDE</h2>
  <p>Find the perfect hotel and compare prices from different sites</p>
  </div>
  <div className="Section3-Flex">
    <div className='Box-1'>
    <GrMapLocation className='Icon-1'/>
    <h1>Accommodation</h1>
    <p className='p-1'>Choose your accommodation based on the reviews of more than 10 million travelers.</p>
    </div>
    <div className='Box-2'>
        <GiCommercialAirplane className='Icon-2'/>
        <h1>Instant confirmation</h1>
        <p className='p-2'>Instantly search and book places in more than 36,000 hostels in 170 countries.</p>
    </div>
    <div className='Box-3'>
        <BsCameraFill className='Icon-3'/>
        <h1>customer service</h1>
        <p className='p-3'>Available in 19 languages. We open the world for You. </p>
    </div>
  </div>
  </>
  )
}

export default Section3