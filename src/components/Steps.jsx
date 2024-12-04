import React from 'react'
import { stepsData } from '../assets/assets'

const Steps = () => {
  return (
    <div className='flex flex-col items-center justify-center my-32'>
        <h1 className='text-3xl sm:text-4xl'>The Aicision Buddies</h1>
        <p className='text-lg text-gray-600 mb-8'>Talk to Aicision for your next Decision. many more buddies to come</p>
        <br/>
        <br/>
        <br/>
       

        <div className='space-y-4 w-full max-w-3xl text-sm'>
            {stepsData.map((item, index)=>(
                <div key={index}
                className='flex items-center gap-4 p-8 px-8 bg-white/20 shadow-md border 
                cursor-pointer hove:scake-[1.02] transition-all duration-300 rounded-lg'>
                    <img width={40} src={item.icon} alt="" />
                    <div>
                        <h2 className='text-xl font-medium'>{item.title}</h2>
                        <p className='text-gray-800'>{item.description}</p>
                    </div>
                    
                </div>
                
            ))}
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
    </div>
  )
}

export default Steps