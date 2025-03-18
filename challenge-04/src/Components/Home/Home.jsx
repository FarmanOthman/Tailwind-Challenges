import React from 'react'
import Category from './Category';
import Hero from './Hero';
import Destanations from './Destanations';
import EasyandFast from './EasyandFast';
import Testimonials from './Testimonials';
import Sponsor from './Sponsor';
import Subscribe from './Subscribe';

function Home() {
  return (
    <div>
      <Hero />
      <Category />
      <Destanations />
      <EasyandFast />
      <Testimonials />
      <Sponsor />
      <Subscribe />
    </div>
  )
}

export default Home