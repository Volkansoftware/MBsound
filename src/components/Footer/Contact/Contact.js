import React from 'react'

const Contact = ({src, place}) => {
  return (
    <div className='flex flex-1 mt-4'>
            <div className='flex items-center'>
                <div className='border rounded-full p-2 border-black'><img className='radius'  src={src} alt="img" /></div>
                <div className='mx-2' >{place}</div>
            </div>
           </div>
  )
}

export default Contact