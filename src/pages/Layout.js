import React from 'react'
import Discussion from '../sections/Discussion';
import Educator from '../sections/Educator';
import Trending from '../sections/Trending';
import View from '../sections/View';

function Layout() {
  return (
    <div>
        <View/>
      <Educator/>
      <Trending/>
      <Discussion/>
      
    </div>
  )
}

export default Layout