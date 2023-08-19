import React from 'react'

import Dashboard from './Dashboard'

const HomeOverview = () => {
  return (
<div className='w-full'>
    <div className=""><Dashboard/></div>
    <div className="container mx-auto">
    <h1 className="grid grid-cols-1 mt-5 ms-48">Home</h1>
    </div>
</div>
  )
}

export default HomeOverview