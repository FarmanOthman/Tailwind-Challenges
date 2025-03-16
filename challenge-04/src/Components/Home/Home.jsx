import React from 'react'
import Category from './Category';
import Hero from './Hero';
import Destanations from './Destanations';
import EasyandFast from './EasyandFast';

function Home() {
  return (
    <div>
      <Hero />
      <Category />
      <Destanations />
      <EasyandFast />
    </div>
  )
}

export default Home