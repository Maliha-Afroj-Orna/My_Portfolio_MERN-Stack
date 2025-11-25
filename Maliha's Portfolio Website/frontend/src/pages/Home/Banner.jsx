import React from 'react'

export default function Banner() {
  return (
    <div className='bg-[#EE6C4D]'>
        <div flex flex-row items-center justify-start py-2>
            <div className='flex flex-col items-center justify-center'>
                <h2>Have a project on Mind?</h2>
                <p>I bring your ideas to life with fast, scalable web apps powered by modern AI. Let’s work together to build something smart and impactful.</p>
            </div>
            
            <div>
                <img src="/images/maliha.jpg" alt="Maliha Profile" />
            </div>
            
        </div>
    </div>
  )
}
