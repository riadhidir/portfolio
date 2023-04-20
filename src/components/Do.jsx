import React from 'react'

function Do({title, desc, img}) {
  return (
    <div className='flex jsutify-between gap-4 '>
        <img className="basis-1/12  h-10 w-10    "  src={img} alt="" srcset="" />

        <div className=''>
            <p className='font-bold text-white'>{title}</p>
            <p className='text-[rgba(255,255,255,0.3)] text-justify line-clamp-3 active:line-clamp-none'>{desc}</p>
        </div>

    </div>
  )
}

export default Do