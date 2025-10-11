import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const LayOut = ({children}:{children:React.ReactNode}) => {
  return (
    <div className='overflow-x-hidden'>
      <Navbar />
      <main className="max-w-full mx-auto">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default LayOut