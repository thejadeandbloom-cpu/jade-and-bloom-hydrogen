import React, { useState } from 'react'

export default function App() {
  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const products = [
    { id: 1, title: '2% Green Tea Extract Face Wash', price: 269, description: '100ml', features: ['2% Green Tea Extract', '1.5% Salicylic Acid', 'Aloe Vera', 'Panthenol'] },
    { id: 2, title: '14% Vitamin C Face Serum', price: 618, description: '30ml', features: ['14% Ethyl Ascorbic Acid', 'Niacinamide', 'Hyaluronic Acid', 'Vitamin E'] },
    { id: 3, title: '1% Kojic Acid + 5% Vitamin C Moisturizer', price: 449, description: '50ml', features: ['1% Kojic Acid', '5% Vitamin C', '5% Niacinamide', 'Hyaluronic Acid'] },
    { id: 4, title: 'Fluid Sunscreen SPF 50 PA++++', price: 489, description: '50ml', features: ['Zinc Oxide 8%', 'Titanium Dioxide 6%', 'Sea Buckthorn', 'Lightweight Fluid'] },
  ]

  const addToCart = (product) => {
    setCart([...cart, product])
  }

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index))
  }

  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", backgroundColor: '#ffffff', minHeight: '100vh' }}>
      {/* Announcement Bar */}
      <div style={{
        backgroundColor: '#0D0D0D',
        color: 'rgba(255,255,255,0.6)',
        textAlign: 'center',
        padding: '9px',
        fontSize: '10px',
        letterSpacing: '0.22em',
        textTransform: 'uppercase'
      }}>
        <span style={{ color: '#fff', fontWeight: 600 }}>New Launch</span> — Jade and Bloom is now live!
      </div>

      {/* Header */}
      <header style={{
        position: 'sticky',
        top: 0,
        zIndex: 200,
        background: 'rgba(255,255,255,0.97)',
        borderBottom: '1px solid #EBEBEB',
        height: '70px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 64px',
        backdropFilter: 'blur(10px)'
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3px' }}>
          <div style={{ fontFamily: "'Cinzel', serif", fontSize: '14px', letterSpacing: '0.22em', color: '#0D0D0D', textTransform: 'uppercase', lineHeight: 1 }}>
            Jade and Bloom
          </div>
          <div style={{ fontSize: '7.5px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#C65D3B', fontWeight: 500 }}>
            Skin Science
          </div>
        </div>

        <nav style={{ display: 'none', '@media (min-width: 768px)': { display: 'flex' } }}>
          <ul style={{ display: 'flex', gap: '36px', listStyle: 'none', margin: 0, padding: 0 }}>
            <li><a href="#shop" style={{ fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#484848', fontWeight: 500, textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = '#0D0D0D'} onMouseOut={(e) => e.target.style.color = '#484848'}>Shop</a></li>
            <li><a href="#about" style={{ fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#484848', fontWeight: 500, textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = '#0D0D0D'} onMouseOut={(e) => e.target.style.color = '#484848'}>About</a></li>
            <li><a href="#" style={{ fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#484848', fontWeight: 500, textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = '#0D0D0D'} onMouseOut={(e) => e.target.style.color = '#484848'}>Reviews</a></li>
          </ul>
        </nav>

        <button onClick={() => setShowCart(!showCart)} style={{
          backgroundColor: '#C65D3B',
          color: '#fff',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '2px',
          cursor: 'pointer',
          fontSize: '13px',
          fontWeight: 600,
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          transition: 'background 0.2s'
        }} onMouseOver={(e) => e.target.style.background = '#A84828'} onMouseOut={(e) => e.target.style.background = '#C65D3B'}>
          Cart ({cart.length})
        </button>
      </header>

      {/* Hero Section */}
      <section style={{
        backgroundColor: '#C65D3B',
        color: '#fff',
        padding: '80px 64px',
        textAlign: 'center',
        minHeight: '400px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <h1 style={{ 
          fontFamily: "'Playfair Display', serif",
          fontSize: '3.5rem',
          margin: '0 0 20px 0',
          fontWeight: 400,
          lineHeight: 1.2
        }}>
          Skin Science Built for Indian Skin
        </h1>
        <p style={{ fontSize: '1.1rem', margin: '0', opacity: 0.9 }}>
          Premium skincare formulated with science and nature in mind
        </p>
      </section>

      {/* Main Content */}
      <div style={{ padding: '80px 64px', maxWidth: '1400px', margin: '0 auto' }}>
        {showCart ? (
          // Cart View
          <div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.5rem', color: '#0D0D0D', marginBottom: '2rem' }}>Shopping Cart</h2>
            {cart.length === 0 ? (
              <p style={{ color: '#484848', fontSize: '1.1rem' }}>Your cart is empty. Start shopping!</p>
            ) : (
              <div>
                {cart.map((item, idx) => (
                  <div key={idx} style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '20px',
                    backgroundColor: '#F9F7F5',
                    borderLeft: '4px solid #C65D3B',
                    marginBottom: '16px',
                    borderRadius: '2px'
                  }}>
                    <div>
                      <p style={{ margin: '0 0 8px 0', fontWeight: 600, color: '#0D0D0D' }}>{item.title}</p>
                      <p style={{ margin: 0, color: '#C65D3B', fontWeight: 600, fontSize: '1.25rem' }}>₹{item.price}</p>
                    </div>
                    <button onClick={() => removeFromCart(idx)} style={{
                      backgroundColor: '#fff',
                      border: '1px solid #C65D3B',
                      color: '#C65D3B',
                      padding: '8px 16px',
                      borderRadius: '2px',
                      cursor: 'pointer',
                      fontWeight: 600,
                      fontSize: '0.9rem'
                    }}>
                      Remove
                    </button>
                  </div>
                ))}
                <div style={{
                  padding: '24px',
                  backgroundColor: '#F2EDE8',
                  borderRadius: '2px',
                  textAlign: 'right',
                  marginTop: '2rem'
                }}>
                  <p style={{ margin: '0 0 20px 0', fontSize: '1.3rem', fontWeight: 600, color: '#0D0D0D' }}>
                    Total: ₹{cart.reduce((sum, item) => sum + item.price, 0)}
                  </p>
                  <button style={{
                    backgroundColor: '#C65D3B',
                    color: '#fff',
                    border: 'none',
                    padding: '12px 32px',
                    borderRadius: '2px',
                    cursor: 'pointer',
                    fontSize: '1rem',
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase'
                  }}>
                    Checkout
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          // Products View
          <div>
            <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.5rem', color: '#0D0D0D', margin: '0 0 1rem 0' }}>
                Our Products
              </h2>
              <p style={{ color: '#484848', fontSize: '1.1rem', margin: 0 }}>
                Carefully formulated for effective results
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '32px',
              marginBottom: '4rem'
            }}>
              {products.map((product) => (
                <div key={product.id} style={{
                  backgroundColor: '#fff',
                  borderRadius: '2px',
                  overflow: 'hidden',
                  border: '1px solid #EBEBEB',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  cursor: 'pointer'
                }} onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)'
                  e.currentTarget.style.boxShadow = '0 16px 32px rgba(13, 13, 13, 0.08)'
                }} onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                }}>
                  <div style={{
                    backgroundColor: '#F2EDE8',
                    padding: '40px 20px',
                    textAlign: 'center',
                    fontSize: '2.5rem',
                    minHeight: '200px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    🧴
                  </div>
                  <div style={{ padding: '24px' }}>
                    <h3 style={{ margin: '0 0 8px 0', color: '#0D0D0D', fontSize: '1.1rem', lineHeight: 1.3, fontWeight: 600 }}>
                      {product.title}
                    </h3>
                    <p style={{ margin: '0 0 12px 0', color: '#969696', fontSize: '0.9rem' }}>
                      {product.description}
                    </p>
                    <ul style={{ margin: '12px 0', padding: '0 0 0 20px', fontSize: '0.85rem', color: '#484848', listStyle: 'disc' }}>
                      {product.features.slice(0, 2).map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                    <p style={{ 
                      margin: '16px 0',
                      fontSize: '1.5rem',
                      color: '#C65D3B',
                      fontWeight: 600,
                      letterSpacing: '0.05em'
                    }}>
                      ₹{product.price}
                    </p>
                    <button onClick={() => addToCart(product)} style={{
                      width: '100%',
                      backgroundColor: '#C65D3B',
                      color: '#fff',
                      border: 'none',
                      padding: '12px',
                      borderRadius: '2px',
                      cursor: 'pointer',
                      fontSize: '0.95rem',
                      fontWeight: 600,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      transition: 'background 0.2s'
                    }} onMouseOver={(e) => e.target.style.background = '#A84828'} onMouseOut={(e) => e.target.style.background = '#C65D3B'}>
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* About Section */}
            <section id="about" style={{
              backgroundColor: '#F9F7F5',
              padding: '60px 40px',
              borderRadius: '2px',
              textAlign: 'center',
              marginBottom: '4rem'
            }}>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.5rem', color: '#0D0D0D', margin: '0 0 1rem 0' }}>
                About Jade and Bloom
              </h2>
              <p style={{ color: '#484848', fontSize: '1.1rem', maxWidth: '600px', margin: '1rem auto', lineHeight: 1.6 }}>
                We believe in the power of science-backed skincare. Every product is formulated with precision to address specific skin concerns while being gentle on Indian skin types.
              </p>
              <p style={{ color: '#969696', fontSize: '1rem', maxWidth: '600px', margin: '1rem auto' }}>
                Beauty, Bold and Beyond — that's our promise to you.
              </p>
            </section>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer style={{
        backgroundColor: '#0D0D0D',
        color: 'rgba(255,255,255,0.7)',
        padding: '40px 64px',
        textAlign: 'center',
        marginTop: '4rem'
      }}>
        <p style={{ margin: '0 0 8px 0', fontSize: '0.9rem' }}>© 2024 Jade and Bloom. All rights reserved.</p>
        <p style={{ margin: 0, fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
          Beauty, Bold and Beyond
        </p>
      </footer>
    </div>
  )
}
