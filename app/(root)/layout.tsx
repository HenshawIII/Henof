import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { CartProvider } from '@/app/contexts/CartContext'
import CartSidebar from '@/components/CartSidebar'

const LayOut = ({children}:{children:React.ReactNode}) => {
  return (
    <CartProvider>
      <div style={{ overflowX: 'hidden' }}>
        <Navbar />
        <main className="max-w-full mx-auto" style={{ overflowX: 'visible', overflowY: 'visible', position: 'relative' }}>
          {children}
        </main>
        <Footer />
        <CartSidebar />
      </div>
    </CartProvider>
  )
}

export default LayOut