import React from 'react'
import Category from './Category';
import Hero from './Hero';
import Destanations from './Destanations';
import EasyandFast from './EasyandFast';
import Testimonials from './Testimonials';

function Home() {
  return (
    <div>
      <Hero />
      <Category />
      <Destanations />
      <EasyandFast />
      <Testimonials />
    </div>
  )
}

export default Home