import React from 'react'
import Hero from '../Hero/Hero'
import Card from '../Card/Card'
import Card2 from '../card2/Card2'
import ScrollToTopOnMount from '../../ScrollToTopOnMount/ScrollToTopOnMount'

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