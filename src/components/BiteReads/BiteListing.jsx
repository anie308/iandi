import React from 'react'
import { biteReads } from '../../data'
import BiteItem from './BiteItem'

function BiteListing() {
  return (
    <div className='shit flex flex-row overflow-x-auto  items-center justify-between  gap-4 md:grid md:grid-cols-4 md:overflow-hidden'>
    {
        biteReads
        .slice(0,4)
        .map((bite) => (
            <BiteItem key={bite.id} bite={bite}/>
        ))
          
       
    }
</div>
  )
}

export default BiteListing