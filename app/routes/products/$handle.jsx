// app/routes/products/$handle.jsx
// Product Detail Page

import { useLoaderData } from '@shopify/remix-oxygen';
import { useState } from 'react';

export async function loader({ params, context }) {
  const product = await context.storefront.query(PRODUCT_QUERY, {
    variables: { handle: params.handle },
  });

  if (!product.product) {
    throw new Response('Product not found', { status: 404 });
  }

  return { product: product.product };
}

export default function ProductPage() {
  const { product } = useLoaderData();
  const [quantity, setQuantity] = useState(1);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const price = product.priceRange.minVariantPrice.amount;
  const images = product.images.edges.map(e => e.node);

  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-4 text-sm text-[#3E2723]">
        <a href="/shop" className="hover:text-[#C65D3B]">Shop</a>
        <span className="mx-2">/</span>
        <span>{product.title}</span>
      </div>

      {/* Product Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Images */}
          <div>
            {/* Main Image */}
            <div className="bg-[#f5ebe0] rounded-lg overflow-hidden mb-4 aspect-square">
              {images[activeImageIndex] && (
                <img
                  src={images[activeImageIndex].url}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              )}
            </div>

            {/* Thumbnail Gallery */}
            {images.length > 1 && (
              <div className="flex gap-3">
                {images.map((image, index) => (
                  <button
                    key={image.id}
                    onClick={() => setActiveImageIndex(index)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition ${
                      activeImageIndex === index
                        ? 'border-[#C65D3B]'
                        : 'border-transparent'
                    }`}
                  >
                    <img
                      src={image.url}
                      alt="Thumbnail"
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-4">
              {product.title}
            </h1>

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-3xl font-bold text-[#C65D3B]">
                ₹{parseInt(price)}
              </span>
              <span className="text-sm text-[#3E2723]">
                Free shipping on all orders
              </span>
            </div>

            {/* Key Benefits */}
            <div className="mb-8 p-4 bg-[#f5ebe0] rounded-lg">
              <p className="font-semibold text-[#3E2723] mb-2">Key Benefits:</p>
              <ul className="text-sm text-[#3E2723] space-y-1">
                {product.title.includes('Vitamin C') && (
                  <>
                    <li>✓ Fades dark spots & pigmentation</li>
                    <li>✓ Brightens dull, uneven skin tone</li>
                    <li>✓ Clinically stable formula</li>
                  </>
                )}
                {product.title.includes('Sunscreen') && (
                  <>
                    <li>✓ SPF 50 PA++++ broad-spectrum protection</li>
                    <li>✓ No white cast on brown skin</li>
                    <li>✓ Lightweight, non-greasy formula</li>
                  </>
                )}
                {product.title.includes('Face Wash') && (
                  <>
                    <li>✓ Deep pore cleansing without stripping</li>
                    <li>✓ Reduces acne & breakouts</li>
                    <li>✓ pH-balanced for Indian skin</li>
                  </>
                )}
                {product.title.includes('Moisturizer') && (
                  <>
                    <li>✓ Targets pigmentation & dark spots</li>
                    <li>✓ Deep hydration without heaviness</li>
                    <li>✓ Visible results in 3-4 weeks</li>
                  </>
                )}
              </ul>
            </div>

            {/* Add to Cart */}
            <div className="flex gap-4 mb-8">
              <div className="flex items-center border border-[#e0d4c7] rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 text-[#3E2723] hover:bg-[#f5ebe0]"
                >
                  −
                </button>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                  className="w-12 text-center border-l border-r border-[#e0d4c7] py-2"
                  min="1"
                />
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 text-[#3E2723] hover:bg-[#f5ebe0]"
                >
                  +
                </button>
              </div>

              <button
                className="flex-1 bg-[#C65D3B] text-white font-semibold py-3 rounded-lg hover:bg-[#a84c2f] transition"
                onClick={() => {
                  // Add to cart logic
                  console.log(`Added ${quantity} of ${product.title}`);
                }}
              >
                Add to Cart
              </button>
            </div>

            {/* Full Description */}
            <div className="border-t border-[#e0d4c7] pt-8">
              <h3 className="text-xl font-semibold text-[#1a1a1a] mb-4">
                Full Description
              </h3>
              <div className="text-[#3E2723] leading-relaxed space-y-4">
                {product.description.split('\n\n').map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Guarantee Badge */}
            <div className="mt-8 p-4 border-2 border-[#C65D3B] rounded-lg text-center">
              <p className="font-semibold text-[#C65D3B] mb-1">
                30-Day Money-Back Guarantee
              </p>
              <p className="text-sm text-[#3E2723]">
                Not happy? Full refund, no questions asked.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products / Recommendations */}
      <div className="bg-[#f5ebe0] mt-16 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#1a1a1a] mb-6" style={{ fontFamily: 'Cinzel Decorative, serif' }}>
            Bundle & Save
          </h2>
          <p className="text-[#3E2723] mb-8">
            Pair this with complementary products for maximum results
          </p>
          {/* Bundle recommendations would go here */}
        </div>
      </div>
    </div>
  );
}

const PRODUCT_QUERY = `
  query GetProduct($handle: String!) {
    product(handle: $handle) {
      id
      title
      handle
      description
      productType
      vendor
      priceRange {
        minVariantPrice {
          amount
        }
        maxVariantPrice {
          amount
        }
      }
      images(first: 10) {
        edges {
          node {
            id
            url
            altText
          }
        }
      }
      variants(first: 10) {
        edges {
          node {
            id
            title
            sku
            availableForSale
          }
        }
      }
      collections(first: 5) {
        edges {
          node {
            id
            title
            handle
          }
        }
      }
    }
  }
`;
