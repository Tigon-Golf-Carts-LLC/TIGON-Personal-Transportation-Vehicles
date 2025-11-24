interface SchemaMarkupProps {
  schema: object;
}

export default function SchemaMarkup({ schema }: SchemaMarkupProps) {
  return (
    <script 
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Schema generators for different page types
export const generateOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "TIGON Neighborhood Electric Vehicles",
  "alternateName": "TIGON NEV",
  "description": "Premier neighborhood electric vehicle dealer specializing in DENAGO and EVOLUTION electric vehicles with sales, service, and rentals across North America.",
  "url": "https://tigonnev.com",
  "logo": "https://tigonnev.com/attached_assets/TIGON%20Neighborhood%20Electric%20Vehicles_1764002910326.png",
  "image": [
    "https://tigonnev.com/attached_assets/TIGON%20Neighborhood%20Electric%20Vehicles_1764002910326.png"
  ],
  "telephone": "1-844-844-6638",
  "email": "info@tigonnev.com",
  "areaServed": [
    {
      "@type": "Country",
      "name": "United States"
    },
    {
      "@type": "Country",
      "name": "Canada"
    },
    {
      "@type": "Country",
      "name": "Mexico"
    }
  ],
  "foundingDate": "2015",
  "numberOfEmployees": "15-25",
  "slogan": "Premium neighborhood electric vehicles delivered nationwide",
  "brand": ["DENAGO", "EVOLUTION"],
  "sameAs": [
    "https://www.facebook.com/tigonnev",
    "https://www.instagram.com/tigonnev"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Golf Cart Sales and Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "Electric Golf Carts"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Golf Cart Rentals"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Golf Cart Service & Repair"
        }
      }
    ]
  }
});

export const generateLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://tigonnev.com/#localbusiness",
  "name": "TIGON Neighborhood Electric Vehicles",
  "description": "Premier neighborhood electric vehicle dealer specializing in DENAGO and EVOLUTION electric vehicles with sales, service, and rentals across North America.",
  "url": "https://tigonnev.com",
  "telephone": "1-844-844-6638",
  "email": "sales@tigongolfcarts.com",
  "priceRange": "$$$",
  "currenciesAccepted": "USD",
  "paymentAccepted": "Cash, Credit Card, Financing",
  "openingHours": [
    "Mo-Fr 09:00-17:00",
    "Sa 09:00-17:00"
  ],
  "address": {
    "@type": "PostalAddress",
    "addressRegion": "NJ",
    "addressCountry": "US",
    "addressLocality": "Ocean County"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 39.8238,
    "longitude": -74.5889
  },
  "areaServed": [
    "Toms River Township", "Lakewood Township", "Brick Township", "Jackson Township",
    "Point Pleasant", "Seaside Heights", "Beach Haven", "Long Beach Township",
    "Stafford Township", "Barnegat Township", "Manchester Township", "Berkeley Township",
    "Dover Township", "Eagleswood Township", "Little Egg Harbor Township", "Ocean Township",
    "Plumsted Township", "Barnegat Light", "Bay Head", "Beachwood", "Harvey Cedars",
    "Island Heights", "Lavallette", "Mantoloking", "Ocean Gate", "Pine Beach",
    "Point Pleasant Beach", "Seaside Park", "Ship Bottom", "South Toms River",
    "Surf City", "Tuckerton", "Lacey Township", "New Hanover Township"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Golf Cart Products and Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "DENAGO Electric Golf Carts",
          "brand": "DENAGO"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "EVOLUTION Golf Carts",
          "brand": "EVOLUTION"
        }
      }
    ]
  }
});

export const generateWebsiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://tigonnev.com/#website",
  "name": "TIGON Neighborhood Electric Vehicles",
  "description": "Premier neighborhood electric vehicle dealer specializing in DENAGO and EVOLUTION electric vehicles with sales, service, and rentals across North America",
  "url": "https://tigonnev.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://tigonnev.com/inventory?search={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  },
  "publisher": {
    "@type": "Organization",
    "name": "TIGON NEV"
  }
});

export const generateBreadcrumbSchema = (items: Array<{name: string, url: string}>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

export const generateProductSchema = (vehicle: any) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  "@id": `https://tigonnev.com/vehicles/${vehicle.id}#product`,
  "name": vehicle.name,
  "description": vehicle.description,
  "brand": {
    "@type": "Brand",
    "name": vehicle.brand
  },
  "category": vehicle.category,
  "image": vehicle.images?.map((img: string) => `https://tigonnev.com${img}`) || [],
  "offers": {
    "@type": "Offer",
    "price": vehicle.price,
    "priceCurrency": "USD",
    "availability": vehicle.inStock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
    "seller": {
      "@type": "Organization",
      "name": "TIGON NEV"
    },
    "url": `https://tigonnev.com/vehicles/${vehicle.id}`
  },
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "name": "Top Speed",
      "value": vehicle.specifications?.topSpeed
    },
    {
      "@type": "PropertyValue", 
      "name": "Range",
      "value": vehicle.specifications?.range
    },
    {
      "@type": "PropertyValue",
      "name": "Seating Capacity",
      "value": vehicle.specifications?.seatingCapacity
    },
    {
      "@type": "PropertyValue",
      "name": "Battery Type",
      "value": vehicle.specifications?.batteryType
    }
  ],
  "manufacturer": {
    "@type": "Organization",
    "name": vehicle.brand
  }
});

export const generateServiceSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Neighborhood Electric Vehicle Services",
  "description": "Comprehensive neighborhood electric vehicle sales, service, repair, and rental services across North America",
  "provider": {
    "@type": "LocalBusiness",
    "name": "TIGON NEV"
  },
  "areaServed": {
    "@type": "State",
    "name": "New Jersey"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Golf Cart Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Golf Cart Sales",
          "description": "New and used electric golf cart sales"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "Golf Cart Rentals",
          "description": "Daily, weekly, and monthly golf cart rentals"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Golf Cart Service & Repair",
          "description": "Professional maintenance and repair services"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Golf Cart Parts",
          "description": "Genuine parts and accessories"
        }
      }
    ]
  }
});

export const generateOfferCatalogSchema = (vehicles: any[]) => ({
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  "name": "Neighborhood Electric Vehicle Inventory",
  "description": "Complete inventory of neighborhood electric vehicles available for sale",
  "itemListElement": vehicles.map(vehicle => ({
    "@type": "Offer",
    "itemOffered": {
      "@type": "Product",
      "name": vehicle.name,
      "brand": vehicle.brand,
      "image": vehicle.images?.[0] ? `https://tigonnev.com${vehicle.images[0]}` : undefined
    },
    "price": vehicle.price,
    "priceCurrency": "USD",
    "availability": vehicle.inStock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
    "url": `https://tigonnev.com/vehicles/${vehicle.id}`
  }))
});

export const generateContactPageSchema = () => ({
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact TIGON NEV",
  "description": "Get in touch with TIGON for neighborhood electric vehicle sales, service, rentals, and support",
  "url": "https://tigonnev.com/contact",
  "mainEntity": {
    "@type": "Organization",
    "name": "TIGON NEV",
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "1-844-844-6638",
        "contactType": "customer service",
        "areaServed": "US",
        "availableLanguage": "English"
      },
      {
        "@type": "ContactPoint",
        "email": "sales@tigongolfcarts.com",
        "contactType": "sales",
        "areaServed": "US"
      }
    ]
  }
});

export const generateTownPageSchema = (townName: string) => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": `Golf Carts in ${townName}`,
  "description": `Professional golf cart sales, service, and rentals delivered to ${townName}, Pennsylvania, Pennsylvania`,
  "url": `https://tigonnev.com/${townName.toLowerCase().replace(/\s+/g, '-')}-golf-carts`,
  "mainEntity": {
    "@type": "LocalBusiness",
    "name": "Pennsylvania Golf Carts",
    "areaServed": {
      "@type": "City",
      "name": townName,
      "containedInPlace": {
        "@type": "AdministrativeArea",
        "name": "Pennsylvania",
        "containedInPlace": {
          "@type": "State",
          "name": "Pennsylvania"
        }
      }
    }
  },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://tigonnev.com"
      },
      {
        "@type": "ListItem", 
        "position": 2,
        "name": `${townName} Golf Carts`,
        "item": `https://tigonnev.com/${townName.toLowerCase().replace(/\s+/g, '-')}-golf-carts`
      }
    ]
  }
});