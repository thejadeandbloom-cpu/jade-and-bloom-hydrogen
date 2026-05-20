// app/routes/shop.jsx
// Product Listing Page - All Products and Bundles

import { useLoaderData } from '@shopify/remix-oxygen';
import { Image } from '@shopify/hydrogen';
import ProductCard from '~/components/ProductCard';

export async function loader({ context }) {
  const products = await context.storefront.query(PRODUCTS_QUERY);
  return { products };
}

export default function Shop() {
  const { products } = useLoaderData();

  const individualProducts = products.products.edges.filter(
    ({ node }) => !node.productType || node.productType !== 'Bundle'
  );

  const bundles = products.products.edges.filter(
    ({ node }) => node.productType === 'Bundle'
  );

  return (
    <div className="w-full">
      {/* Page Header */}
      <div className="bg-[#f5ebe0] py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Cinzel Decorative, serif', color: '#C65D3B' }}>
            Shop Jade and Bloom
          </h1>
          <p className="text-lg text-[#3E2723] max-w-2xl mx-auto">
            Scientifically formulated skincare designed for Indian skin. Each product targets a specific concern with clinically-studied active percentages.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        
        {/* Individual Products Section */}
        <section className="mb-16">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2" style={{ fontFamily: 'Cinzel Decorative, serif' }}>
              Individual Products
            </h2>
            <p className="text-[#3E2723] text-sm">Build your custom routine</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {individualProducts.map(({ node: product }) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* Bundles Section */}
        <section>
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2" style={{ fontFamily: 'Cinzel Decorative, serif' }}>
              Save with Bundles
            </h2>
            <p className="text-[#3E2723] text-sm">Curated combinations, special pricing</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bundles.map(({ node: product }) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* Brand Story Callout */}
        <section className="mt-16 bg-gradient-to-r from-[#f5ebe0] to-[#D4915A] rounded-lg p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Cinzel Decorative, serif', color: '#3E2723' }}>
              Why Jade and Bloom?
            </h3>
            <p className="text-[#3E2723] mb-6">
              Every formula is built from first principles — combining Ayurvedic wisdom with modern cosmetic science. 
              We don't make generic skincare. We make skincare for <strong>Indian skin</strong>, in <strong>Indian heat</strong>, 
              with <strong>Indian concerns</strong>.
            </p>
            <a href="/story" className="inline-block px-8 py-3 bg-[#C65D3B] text-white font-medium rounded hover:bg-[#a84c2f] transition">
              Read Our Story
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

const PRODUCTS_QUERY = `
  query GetAllProducts {
    products(first: 50) {
      edges {
        node {
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
          images(first: 3) {
            edges {
              node {
                id
                url
                altText
              }
            }
          }
          variants(first: 1) {
            edges {
              node {
                id
                title
                sku
              }
            }
          }
        }
      }
    }
  }
`;
