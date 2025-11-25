import React from 'react'

export default function SectionTitle({title, color}) {
  return (
    <>
        <div className='flex text-4xl font-semibold items-center justify-center py-10'>
            <h2 className={color}>{title}</h2>
        </div>
    </>
  )
}
