import React from 'react'

const PointsDiv = ({ data }) => {
  return (
    <div className='w-full flex flex-col gap-1 border-b border-white/50 pb-4'>
        <h6 className='text-xl font-medium capitalize '>{data?.heading}</h6>
        <p className='text-sm lg:text-base opacity-90'>{data?.description}</p>
    </div>
  )
}

export default PointsDiv