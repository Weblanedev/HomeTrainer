import React from 'react'
import Hero from '../Hero/Hero'
import Card from '../Card/Card'
import ScrollToTopOnMount from '../../ScrollToTopOnMount/ScrollToTopOnMount'
import Card2 from '../SecondCard/Card2'

const LandingPage = () => {
  return (
    <>
    <ScrollToTopOnMount />
    <Hero />
    <Card />
    <Card2 />
    </>
  )
}

export default LandingPage