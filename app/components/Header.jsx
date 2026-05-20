import React, { useState } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header style={{ 
      backgroundColor: '#3E2723', 
      color: '#f5ebe0', 
      padding: '1rem',
      position: 'sticky',
      top: 0,
      zIndex: 100
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <h1 style={{ 
          fontSize: '1.5rem',
          margin: 0,
          fontFamily: 'Cinzel Decorative, serif'
        }}>
          Jade and Bloom
        </h1>
        <nav style={{ display: 'flex', gap: '2rem' }}>
          <a href="/shop" style={{ color: '#f5ebe0', textDecoration: 'none' }}>Shop</a>
          <a href="/cart" style={{ color: '#f5ebe0', textDecoration: 'none' }}>Cart</a>
        </nav>
      </div>
    </header>
  )
}
