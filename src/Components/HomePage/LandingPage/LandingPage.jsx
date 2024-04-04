import React from 'react'
import Hero from '../Hero/Hero'
import ScrollToTopOnMount from '../../ScrollToTopOnMount/ScrollToTopOnMount'

const LandingPage = () => {
  return (
    <>
    <ScrollToTopOnMount />
    <Hero />
    </>
  )
}

export default LandingPage