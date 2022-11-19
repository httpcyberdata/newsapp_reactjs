import React from 'react'
import Hero from './hero/Hero';
import Home from './mainContent/homes/Home';
import Discover from './discover/Discover';
const Homepage = () => {
  return (
    <div>
        <Hero />
        <Home />
        <Discover />
    </div>
  )
}
export default Homepage;