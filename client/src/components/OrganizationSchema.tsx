import { useEffect } from "react";

interface OrganizationSchemaProps {
  pageType?: "home" | "about" | "contact" | "services";
}

export default function OrganizationSchema({ pageType = "home" }: OrganizationSchemaProps) {
  useEffect(() => {
    const baseStructuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "TIGON Neighborhood Electric Vehicles",
      "description": "Premier neighborhood electric vehicle dealership specializing in electric NEV sales, service, rentals, and financing across North America.",
      "url": "https://tigonnev.com",
      "logo": "https://tigonnev.com/attached_assets/TIGON - MEDIUM SPEED VEHICLE_1763145320465.png",
      "image": "https://tigonnev.com/attached_assets/TIGON - MEDIUM SPEED VEHICLE_1763145320465.png",
      "telephone": "1-844-844-6638",
      "email": "info@tigonnev.com",
      "openingHours": [
        "Mo-Fr 09:00-18:00",
        "Sa 09:00-17:00"
      ],
      "serviceArea": [
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
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Neighborhood Electric Vehicle Services & Products",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Product",
              "name": "Denago Electric Neighborhood Electric Vehicles",
              "category": "Electric Neighborhood Electric Vehicles"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Product",
              "name": "Evolution Electric Neighborhood Electric Vehicles",
              "category": "Electric Neighborhood Electric Vehicles"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Neighborhood Electric Vehicle Sales",
              "category": "Sales Service"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Neighborhood Electric Vehicle Rentals",
              "category": "Rental Service"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Neighborhood Electric Vehicle Maintenance & Repair",
              "category": "Maintenance Service"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Neighborhood Electric Vehicle Financing",
              "category": "Financial Service"
            }
          }
        ]
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "127",
        "bestRating": "5",
        "worstRating": "1"
      },
      "sameAs": [
        "https://www.facebook.com/tigonnev",
        "https://www.instagram.com/tigonnev",
        "https://www.linkedin.com/company/tigonnev"
      ]
    };

    // Add page-specific schema
    let structuredData = baseStructuredData;
    
    if (pageType === "about") {
      structuredData = {
        ...baseStructuredData,
        "@type": "Organization",
        "foundingDate": "2015",
        "numberOfEmployees": "15-25"
      } as any;
    } else if (pageType === "contact") {
      structuredData = {
        ...baseStructuredData,
        "@type": "Organization",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "1-844-844-6638",
          "contactType": "customer service",
          "availableLanguage": "English"
        }
      } as any;
    } else if (pageType === "services") {
      structuredData = {
        ...baseStructuredData,
        "@type": "Organization",
        "provider": {
          "@type": "Organization",
          "name": "TIGON Neighborhood Electric Vehicles"
        }
      } as any;
    }
    
    const existingScript = document.querySelector('script[type="application/ld+json"][data-organization]');
    if (existingScript) {
      existingScript.textContent = JSON.stringify(structuredData);
    } else {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-organization", "true");
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }

    return () => {
      const scriptToRemove = document.querySelector('script[type="application/ld+json"][data-organization]');
      if (scriptToRemove) {
        document.head.removeChild(scriptToRemove);
      }
    };
  }, [pageType]);

  return null;
}