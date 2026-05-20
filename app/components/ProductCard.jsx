// app/components/ProductCard.jsx
// Reusable Product Card Component

import { useState } from 'react';
import { Link } from '@shopify/remix-oxygen';

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const price = product.priceRange.minVariantPrice.amount;
  const image = product.images.edges[0]?.node;

  return (
    <Link 
      to={`/products/${product.handle}`}
      className="group cursor-pointer"
    >
      <div 
        className="relative overflow-hidden rounded-lg bg-[#f5ebe0] mb-4 aspect-square"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Product Image */}
        {image && (
          <img
            src={image.url}
            alt={product.title}
            className={`w-full h-full object-cover transition-transform duration-300 ${
              hovered ? 'scale-105' : 'scale-100'
            }`}
          />
        )}

        {/* Overlay Button on Hover */}
        {hovered && (
          <div className="absolute inset-0 bg-black/40 flex items-end justify-center pb-6 transition-opacity duration-300">
            <button 
              className="px-6 py-2 bg-[#C65D3B] text-white font-semibold rounded hover:bg-[#a84c2f] transition"
              onClick={(e) => {
                e.preventDefault();
                // Add to cart functionality
              }}
            >
              View Product
            </button>
          </div>
        )}

        {/* Product Type Badge */}
        {product.productType === 'Bundle' && (
          <div className="absolute top-4 right-4 bg-[#D4915A] text-white px-3 py-1 rounded-full text-xs font-semibold">
            Bundle
          </div>
        )}
      </div>

      {/* Product Info */}
      <div>
        <h3 className="font-semibold text-[#1a1a1a] mb-1 line-clamp-2 group-hover:text-[#C65D3B] transition">
          {product.title}
        </h3>

        {/* Description Preview */}
        <p className="text-sm text-[#3E2723] mb-3 line-clamp-2">
          {product.description.substring(0, 80)}...
        </p>

        {/* Price */}
        <div className="flex items-baseline gap-2">
          <span className="text-lg font-bold text-[#C65D3B]">
            ₹{parseInt(price)}
          </span>
          {product.productType === 'Bundle' && (
            <span className="text-xs text-green-600 font-semibold">
              Save up to 27%
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
