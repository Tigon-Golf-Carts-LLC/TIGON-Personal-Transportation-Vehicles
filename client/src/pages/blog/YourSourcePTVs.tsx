import { Link } from "wouter";
import { Calendar, ArrowLeft, Building2, Globe, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import { getBlogPostBySlug } from "@/data/blogPosts";
import { blogImages } from "@/data/blogImages";

export default function YourSourcePTVs() {
  const post = getBlogPostBySlug("your-source-for-personal-transportation-vehicles");
  if (!post) return null;

  return (
    <div className="min-h-screen bg-white">
      <SEOHead 
        title={post.seoTitle}
        description={post.metaDescription}
        keywords="TIGON personal transportation vehicles, PTV dealer nationwide, DENAGO dealer, EVOLUTION dealer, buy PTVs USA, nationwide PTV sales, PTV service support"
        canonicalUrl={`https://tigonptv.com/blog/${post.slug}`}
      />
      <article className="max-w-4xl mx-auto px-4 py-12">
        <Link href="/blog">
          <Button variant="ghost" className="mb-6" data-testid="back-to-blog">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Button>
        </Link>

        <header className="mb-8">
          <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
            <span className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              {new Date(post.publishDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </span>
            <span>•</span>
            <span>{post.category}</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="aspect-video rounded-lg mb-6 overflow-hidden">
            <img 
              src={blogImages[post.slug]} 
              alt={post.heroImageAlt}
              className="w-full h-full object-cover"
            />
          </div>
        </header>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            TIGON Personal Transportation Vehicles is your complete source for PTVs across North America. From sales and financing to service and support, we provide everything you need to enjoy personal transportation vehicle ownership. Serving all 50 US states, Canada, and Mexico with premium DENAGO and EVOLUTION vehicles.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Why Choose TIGON?
          </h2>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            North America's Premier PTV Dealership
          </h3>
          <p className="mb-4">
            TIGON has established itself as the leading personal transportation vehicle dealership in North America through:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Largest selection of DENAGO and EVOLUTION models</li>
            <li>Nationwide shipping to your doorstep</li>
            <li>Competitive pricing with price-match guarantee</li>
            <li>Expert customer service and support</li>
            <li>Comprehensive warranty and service programs</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Complete Inventory Selection
          </h3>
          <p className="mb-4">
            Browse our extensive <Link href="/inventory" className="text-theme-orange hover:underline">inventory</Link> featuring:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><Link href="/denago" className="text-theme-orange hover:underline">DENAGO Models</Link> - EV Nomad, EV Rover XL, EV Rover XXL series</li>
            <li><Link href="/evolution" className="text-theme-orange hover:underline">EVOLUTION Models</Link> - 30+ configurations including Classic, D5, D6 Max series</li>
            <li>New and certified pre-owned vehicles</li>
            <li>All passenger configurations (2-8 passengers)</li>
          </ul>

          <h4 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
            Nationwide Delivery
          </h4>
          <p className="mb-4">
            We deliver personal transportation vehicles anywhere in the United States, Canada, and Mexico. Learn about <Link href="/blog/personal-transportation-vehicles-for-sale-nationwide" className="text-theme-orange hover:underline">nationwide deals and shipping</Link>.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Comprehensive Services
          </h2>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Sales Excellence
          </h3>
          <p className="mb-4">
            Our sales team helps you find the perfect PTV:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Expert guidance on model selection</li>
            <li>Feature and specification comparisons</li>
            <li>Test drive arrangements</li>
            <li>Custom configuration assistance</li>
            <li><Link href="/blog/buy-personal-transportation-vehicles-online" className="text-theme-orange hover:underline">Online purchasing options</Link></li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Flexible Financing
          </h3>
          <p className="mb-4">
            TIGON offers <Link href="/blog/personal-transportation-vehicles-financing-options" className="text-theme-orange hover:underline">comprehensive financing programs</Link> including:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Competitive rates with multiple lender options</li>
            <li>Flexible terms from 24-72 months</li>
            <li>Quick approval process</li>
            <li>Financing for all credit profiles</li>
            <li><Link href="/blog/lease-neighborhood-electric-vehicle-options" className="text-theme-orange hover:underline">Lease options</Link> available</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Service and Support
          </h3>
          <p className="mb-4">
            Our commitment continues after your purchase:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Comprehensive <Link href="/blog/neighborhood-electric-vehicle-warranty-coverage-comparison" className="text-theme-orange hover:underline">warranty programs</Link></li>
            <li>Factory-trained service technicians</li>
            <li>Genuine DENAGO and EVOLUTION parts</li>
            <li>Phone and email technical support</li>
            <li><Link href="/services" className="text-theme-orange hover:underline">Full service offerings</Link></li>
          </ul>

          <h5 className="text-lg font-semibold text-gray-900 mt-6 mb-3">
            Rental Programs
          </h5>
          <p className="mb-4">
            Try before you buy with our <Link href="/rentals" className="text-theme-orange hover:underline">rental programs</Link> for events, vacations, and extended test experiences.
          </p>

          <h6 className="text-base font-semibold text-gray-900 mt-4 mb-2">
            Parts and Accessories
          </h6>
          <p className="mb-6">
            Access genuine parts and <Link href="/blog/customizable-personal-transportation-vehicles" className="text-theme-orange hover:underline">customization accessories</Link> to personalize and maintain your PTV.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Serving All 50 States and Beyond
          </h2>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Popular Destinations
          </h3>
          <p className="mb-4">
            TIGON delivers personal transportation vehicles to communities across North America including:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><Link href="/florida" className="text-theme-orange hover:underline">Florida</Link> - Beach and retirement communities</li>
            <li><Link href="/california" className="text-theme-orange hover:underline">California</Link> - Coastal towns and planned communities</li>
            <li><Link href="/arizona" className="text-theme-orange hover:underline">Arizona</Link> - Golf and resort communities</li>
            <li><Link href="/texas" className="text-theme-orange hover:underline">Texas</Link> - Ranch properties and suburbs</li>
            <li><Link href="/pennsylvania" className="text-theme-orange hover:underline">Pennsylvania</Link> - Our home base with multiple locations</li>
            <li>Plus 45 more states, Canada, and Mexico</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Contact Information
          </h3>
          <p className="mb-4">
            Reach our team for sales, service, and support:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Phone:</strong> 1-844-844-6638</li>
            <li><strong>Email:</strong> info@tigonptv.com</li>
            <li><strong>Website:</strong> <a href="https://tigonptv.com" className="text-theme-orange hover:underline">tigonptv.com</a></li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Start Your PTV Journey
          </h2>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Resources to Help You
          </h3>
          <p className="mb-4">
            Explore our guides and resources:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><Link href="/blog/personal-transportation-vehicles-buyers-guide" className="text-theme-orange hover:underline">Complete Buyer's Guide</Link></li>
            <li><Link href="/blog/top-personal-transportation-vehicles-2025" className="text-theme-orange hover:underline">2025 Model Comparisons</Link></li>
            <li><Link href="/blog/street-legal-personal-transportation-vehicles" className="text-theme-orange hover:underline">Street-Legal Requirements</Link></li>
            <li><Link href="/blog" className="text-theme-orange hover:underline">Full Blog Archive</Link></li>
          </ul>
        </div>

        <div className="mt-12 p-8 bg-gradient-to-r from-theme-primary to-blue-700 text-white rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4">Your PTV Source Awaits</h3>
          <p className="mb-6">Contact TIGON today to start your personal transportation vehicle journey</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/showroom">
              <Button size="lg" className="bg-theme-orange hover:opacity-90 text-white">
                <Building2 className="w-4 h-4 mr-2" />
                Visit Showroom
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="bg-white text-theme-primary hover:bg-gray-100">
                <Phone className="w-4 h-4 mr-2" />
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
