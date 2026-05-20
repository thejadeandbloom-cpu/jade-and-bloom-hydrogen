// app/root.jsx
// Main App Layout for Jade and Bloom Hydrogen Store

import { Outlet, useLoaderData } from '@shopify/remix-oxygen';
import { ShopifyAnalytics } from '@shopify/hydrogen';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import AnnouncementBar from '~/components/AnnouncementBar';
import '~/styles/app.css';

export async function loader({ context }) {
  const shop = await context.storefront.query(SHOP_QUERY);
  return { shop };
}

export default function App() {
  const { shop } = useLoaderData();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="description" content="Jade and Bloom - Premium Indian Skincare. Scientifically formulated for Indian skin." />
        
        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700&family=Lora:wght@400;500;600&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <AnnouncementBar />
        <Header shop={shop} />
        
        <main role="main" className="min-h-screen bg-white">
          <Outlet context={{ shop }} />
        </main>
        
        <Footer shop={shop} />
        
        <ShopifyAnalytics />
      </body>
    </html>
  );
}

// GraphQL Query for Shop Info
const SHOP_QUERY = `
  query ShopQuery {
    shop {
      name
      description
      primaryDomain {
        url
      }
      paymentSettings {
        currencyCode
      }
    }
  }
`;
