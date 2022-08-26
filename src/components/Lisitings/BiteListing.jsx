import React from 'react'
import {biteReads} from '../../data'
import BiteItem from '../Items/BiteItem'
import '../style.css'

function BiteListing() {
  return (
    
         <div className='shit flex flex-row items-center justify-between overflow-y-auto gap-4 md:grid md:grid-cols-4 md:overflow-hidden'>
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