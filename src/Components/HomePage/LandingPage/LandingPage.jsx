import React from 'react'
import Header from '../Header/Header'
import Hero from '../Hero/Hero'
import Card from '../Card/Card'
import Card2 from '../card2/Card2'
import Footer from '../Footer/Footer'
import ScrollToTopOnMount from '../../ScrollToTopOnMount/ScrollToTopOnMount'

const LandingPage = () => {
  return (
    <>
    {/* <Header /> */}
    <ScrollToTopOnMount />
    <Hero />
    <Card />
    <Card2 />
    {/* <Footer /> */}
    </>
  )
}

export default LandingPage