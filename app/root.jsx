import React, { useState } from 'react'

export default function App() {
  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false)

  const products = [
    { id: 1, title: '2% Green Tea Extract Face Wash', price: 269, description: '100ml', image: '🧼' },
    { id: 2, title: '14% Vitamin C Face Serum', price: 618, description: '30ml', image: '💧' },
    { id: 3, title: '1% Kojic Acid + 5% Vitamin C Moisturizer', price: 449, description: '50ml', image: '🧴' },
    { id: 4, title: 'Fluid Sunscreen SPF 50 PA++++', price: 489, description: '50ml', image: '☀️' },
  ]

  const addToCart = (product) => {
    setCart([...cart, product])
  }

  return (
    <div style={{ fontFamily: 'Lora, serif', backgroundColor: '#f5ebe0', minHeight: '100vh' }}>
      {/* Header */}
      <header style={{
        backgroundColor: '#3E2723',
        color: '#f5ebe0',
        padding: '1.5rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'sticky',
        top: 0,
        zIndex: 100
      }}>
        <h1 style={{
          margin: 0,
          fontSize: '2rem',
          fontFamily: 'Cinzel Decorative, serif',
          color: '#D4915A'
        }}>
          Jade and Bloom
        </h1>
        <button onClick={() => setShowCart(!showCart)} style={{
          backgroundColor: '#C65D3B',
          color: '#fff',
          border: 'none',
          padding: '0.75rem 1.5rem',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '1rem'
        }}>
          🛒 Cart ({cart.length})
        </button>
      </header>

      {/* Hero Section */}
      <div style={{
        backgroundColor: '#D4915A',
        color: '#fff',
        padding: '3rem',
        textAlign: 'center'
      }}>
        <h2 style={{ margin: '0 0 1rem 0', fontSize: '1.5rem' }}>Premium Indian Skincare</h2>
        <p style={{ margin: 0 }}>Beauty, Bold and Beyond</p>
      </div>

      {/* Main Content */}
      <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        {showCart ? (
          // Cart View
          <div>
            <h2>Your Cart</h2>
            {cart.length === 0 ? (
              <p>Your cart is empty</p>
            ) : (
              <div>
                {cart.map((item, idx) => (
                  <div key={idx} style={{
                    padding: '1rem',
                    backgroundColor: '#fff',
                    borderLeft: '4px solid #C65D3B',
                    marginBottom: '1rem',
                    borderRadius: '4px'
                  }}>
                    <p><strong>{item.title}</strong></p>
                    <p style={{ color: '#C65D3B', fontWeight: 'bold' }}>₹{item.price}</p>
                  </div>
                ))}
                <div style={{
                  padding: '1rem',
                  backgroundColor: '#E0D4C7',
                  borderRadius: '4px',
                  textAlign: 'right'
                }}>
                  <p><strong>Total: ₹{cart.reduce((sum, item) => sum + item.price, 0)}</strong></p>
                  <button style={{
                    backgroundColor: '#C65D3B',
                    color: '#fff',
                    border: 'none',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '1rem'
                  }}>
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          // Products View
          <div>
            <h2 style={{ color: '#3E2723' }}>Our Products</h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '2rem'
            }}>
              {products.map((product) => (
                <div key={product.id} style={{
                  backgroundColor: '#fff',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  boxShadow: '0 2px 8px rgba(62, 39, 35, 0.1)',
                  transition: 'transform 0.3s',
                  cursor: 'pointer'
                }} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                   onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                  <div style={{
                    backgroundColor: '#E0D4C7',
                    padding: '2rem',
                    textAlign: 'center',
                    fontSize: '3rem'
                  }}>
                    {product.image}
                  </div>
                  <div style={{ padding: '1.5rem' }}>
                    <h3 style={{ margin: '0 0 0.5rem 0', color: '#3E2723', fontSize: '1rem' }}>
                      {product.title}
                    </h3>
                    <p style={{ margin: '0 0 1rem 0', color: '#666', fontSize: '0.9rem' }}>
                      {product.description}
                    </p>
                    <p style={{ 
                      margin: '1rem 0',
                      fontSize: '1.5rem',
                      color: '#C65D3B',
                      fontWeight: 'bold'
                    }}>
                      ₹{product.price}
                    </p>
                    <button onClick={() => addToCart(product)} style={{
                      width: '100%',
                      backgroundColor: '#C65D3B',
                      color: '#fff',
                      border: 'none',
                      padding: '0.75rem',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      fontSize: '1rem',
                      fontWeight: 'bold'
                    }}>
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer style={{
        backgroundColor: '#3E2723',
        color: '#f5ebe0',
        padding: '2rem',
        textAlign: 'center',
        marginTop: '2rem'
      }}>
        <p style={{ margin: 0 }}>© 2024 Jade and Bloom. All rights reserved.</p>
        <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.9rem' }}>Beauty, Bold and Beyond</p>
      </footer>
    </div>
  )
}
