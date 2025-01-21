import React from 'react'
import Header from '../components/Header'
import ServiceCards from '../components/ServiceCards'
import About from '../components/About'
import Valoration from '../components/Valoration'
import ImageGallery from '../components/ImageGallery'
import Contact from '../components/Contact'
import BodySurgeryContent from '../components/BodySurgeryContent'
import FacialSurgeryContent from '../components/FacialSurgeryContent'

const FacialSurgery: React.FC = () => {
  return (
    <div className='w-full'>
      <Header />
      {/* <ServiceCards /> */}
      {/* <About /> */}
      <FacialSurgeryContent />
      <Valoration />
      {/* <ImageGallery /> */}
      {/* <Contact /> */}
    </div>
  )
}

export default FacialSurgery