import React from 'react'

export default function ProductCard({ product }) {
  return (
    <div style={{
      border: '1px solid #e0d4c7',
      borderRadius: '8px',
      padding: '1rem',
      textAlign: 'center',
      backgroundColor: '#fff'
    }}>
      <h3 style={{ color: '#3E2723' }}>{product.title}</h3>
      <p style={{ color: '#666', fontSize: '0.9rem' }}>{product.description}</p>
      <p style={{ color: '#C65D3B', fontSize: '1.25rem', fontWeight: 'bold' }}>
        ₹{product.price}
      </p>
      <button style={{
        backgroundColor: '#C65D3B',
        color: '#fff',
        border: 'none',
        padding: '0.75rem 1.5rem',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '1rem'
      }}>
        Add to Cart
      </button>
    </div>
  )
}
