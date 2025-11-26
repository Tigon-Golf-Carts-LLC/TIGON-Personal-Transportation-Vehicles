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
  "name": "TIGON Personal Transportation Vehicles",
  "alternateName": "TIGON PTV",
  "description": "Premier private transportation vehicle dealer specializing in DENAGO and EVOLUTION electric vehicles with sales, service, and rentals across North America.",
  "url": "https://tigonptv.com",
  "logo": "https://tigonptv.com/attached_assets/TIGON%20Neighborhood%20Electric%20Vehicles_1764002910326.png",
  "image": [
    "https://tigonptv.com/attached_assets/TIGON%20Neighborhood%20Electric%20Vehicles_1764002910326.png"
  ],
  "telephone": "1-844-844-6638",
  "email": "info@tigonptv.com",
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
  "slogan": "Premium private transportation vehicles delivered nationwide",
  "brand": ["DENAGO", "EVOLUTION"],
  "sameAs": [
    "https://www.facebook.com/tigonptv",
    "https://www.instagram.com/tigonptv"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Personal Transportation Vehicle Sales and Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "Electric Personal Transportation Vehicles"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Personal Transportation Vehicle Rentals"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Personal Transportation Vehicle Service & Repair"
        }
      }
    ]
  }
});

export const generateLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://tigonptv.com/#localbusiness",
  "name": "TIGON Personal Transportation Vehicles",
  "description": "Premier private transportation vehicle dealer specializing in DENAGO and EVOLUTION electric vehicles with sales, service, and rentals across North America.",
  "url": "https://tigonptv.com",
  "telephone": "1-844-844-6638",
  "email": "info@tigonptv.com",
  "priceRange": "$$$",
  "currenciesAccepted": "USD",
  "paymentAccepted": "Cash, Credit Card, Financing",
  "openingHours": [
    "Mo-Fr 09:00-18:00",
    "Sa 10:00-17:00"
  ],
  "address": {
    "@type": "PostalAddress",
    "addressRegion": "PA",
    "addressCountry": "US",
    "addressLocality": "Hatfield"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 40.2782,
    "longitude": -75.2996
  },
  "areaServed": [
    {
      "@type": "State",
      "name": "Pennsylvania"
    },
    {
      "@type": "State",
      "name": "New Jersey"
    },
    {
      "@type": "State",
      "name": "Delaware"
    },
    {
      "@type": "State",
      "name": "Virginia"
    },
    {
      "@type": "State",
      "name": "Maryland"
    },
    {
      "@type": "State",
      "name": "North Carolina"
    },
    {
      "@type": "State",
      "name": "South Carolina"
    },
    {
      "@type": "State",
      "name": "Florida"
    },
    {
      "@type": "State",
      "name": "Indiana"
    },
    {
      "@type": "State",
      "name": "Ohio"
    },
    {
      "@type": "State",
      "name": "New York"
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Personal Transportation Vehicle Products and Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "DENAGO Electric Personal Transportation Vehicles",
          "brand": "DENAGO"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "EVOLUTION Personal Transportation Vehicles",
          "brand": "EVOLUTION"
        }
      }
    ]
  }
});

export const generateWebsiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://tigonptv.com/#website",
  "name": "TIGON Personal Transportation Vehicles",
  "description": "Premier private transportation vehicle dealer specializing in DENAGO and EVOLUTION electric vehicles with sales, service, and rentals across North America",
  "url": "https://tigonptv.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://tigonptv.com/inventory?search={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  },
  "publisher": {
    "@type": "Organization",
    "name": "TIGON PTV"
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
  "@id": `https://tigonptv.com/vehicles/${vehicle.id}#product`,
  "name": vehicle.name,
  "description": vehicle.description,
  "brand": {
    "@type": "Brand",
    "name": vehicle.brand
  },
  "category": vehicle.category,
  "image": vehicle.images?.map((img: string) => `https://tigonptv.com${img}`) || [],
  "offers": {
    "@type": "Offer",
    "price": vehicle.price,
    "priceCurrency": "USD",
    "availability": vehicle.inStock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
    "seller": {
      "@type": "Organization",
      "name": "TIGON PTV"
    },
    "url": `https://tigonptv.com/vehicles/${vehicle.id}`
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
  "name": "Personal Transportation Vehicle Services",
  "description": "Comprehensive private transportation vehicle sales, service, repair, and rental services across North America",
  "provider": {
    "@type": "LocalBusiness",
    "name": "TIGON PTV"
  },
  "areaServed": [
    {
      "@type": "State",
      "name": "Pennsylvania"
    },
    {
      "@type": "State",
      "name": "New Jersey"
    },
    {
      "@type": "State",
      "name": "Delaware"
    },
    {
      "@type": "State",
      "name": "Virginia"
    },
    {
      "@type": "State",
      "name": "Maryland"
    },
    {
      "@type": "State",
      "name": "North Carolina"
    },
    {
      "@type": "State",
      "name": "South Carolina"
    },
    {
      "@type": "State",
      "name": "Florida"
    },
    {
      "@type": "State",
      "name": "Indiana"
    },
    {
      "@type": "State",
      "name": "Ohio"
    },
    {
      "@type": "State",
      "name": "New York"
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Personal Transportation Vehicle Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Personal Transportation Vehicle Sales",
          "description": "New and used electric private transportation vehicle sales"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "Personal Transportation Vehicle Rentals",
          "description": "Daily, weekly, and monthly private transportation vehicle rentals"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Personal Transportation Vehicle Service & Repair",
          "description": "Professional maintenance and repair services"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Personal Transportation Vehicle Parts",
          "description": "Genuine parts and accessories"
        }
      }
    ]
  }
});

export const generateOfferCatalogSchema = (vehicles: any[]) => ({
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  "name": "Personal Transportation Vehicle Inventory",
  "description": "Complete inventory of private transportation vehicles available for sale",
  "itemListElement": vehicles.map(vehicle => ({
    "@type": "Offer",
    "itemOffered": {
      "@type": "Product",
      "name": vehicle.name,
      "brand": vehicle.brand,
      "image": vehicle.images?.[0] ? `https://tigonptv.com${vehicle.images[0]}` : undefined
    },
    "price": vehicle.price,
    "priceCurrency": "USD",
    "availability": vehicle.inStock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
    "url": `https://tigonptv.com/vehicles/${vehicle.id}`
  }))
});

export const generateContactPageSchema = () => ({
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact TIGON PTV",
  "description": "Get in touch with TIGON for private transportation vehicle sales, service, rentals, and support",
  "url": "https://tigonptv.com/contact",
  "mainEntity": {
    "@type": "Organization",
    "name": "TIGON PTV",
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
        "email": "info@tigonptv.com",
        "contactType": "sales",
        "areaServed": "US"
      }
    ]
  }
});

export const generateTownPageSchema = (townName: string) => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": `Personal Transportation Vehicles in ${townName}`,
  "description": `Professional private transportation vehicle sales, service, and rentals delivered to ${townName}, Pennsylvania, Pennsylvania`,
  "url": `https://tigonptv.com/${townName.toLowerCase().replace(/\s+/g, '-')}-private-transportation-vehicles`,
  "mainEntity": {
    "@type": "LocalBusiness",
    "name": "TIGON PTV",
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
        "item": "https://tigonptv.com"
      },
      {
        "@type": "ListItem", 
        "position": 2,
        "name": `${townName} Personal Transportation Vehicles`,
        "item": `https://tigonptv.com/${townName.toLowerCase().replace(/\s+/g, '-')}-private-transportation-vehicles`
      }
    ]
  }
});