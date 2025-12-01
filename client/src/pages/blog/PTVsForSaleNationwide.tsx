import { Link } from "wouter";
import { Calendar, ArrowLeft, Truck, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import { getBlogPostBySlug } from "@/data/blogPosts";
const heroImage = "/attached_assets/TIGON%20Personal%20Transportation%20Vehicles%20Premier%20PTV%20Dealership%20-%20PTV_1764176674271.jpeg";

export default function PTVsForSaleNationwide() {
  const post = getBlogPostBySlug("personal-transportation-vehicles-for-sale-nationwide");
  if (!post) return null;

  return (
    <div className="min-h-screen bg-white">
      <SEOHead 
        title={post.seoTitle}
        description={post.metaDescription}
        keywords="personal transportation vehicles for sale, PTV deals nationwide, buy PTV online, DENAGO for sale, EVOLUTION for sale, PTV shipping USA, nationwide PTV delivery"
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
              src={heroImage} 
              alt={post.heroImageAlt}
              className="w-full h-full object-cover"
            />
          </div>
        </header>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            Finding the perfect personal transportation vehicle for sale has never been easier. TIGON offers an extensive selection of DENAGO and EVOLUTION PTVs with nationwide shipping to all 50 US states, Canada, and Mexico. Whether you're looking for a compact city cruiser or a family-sized utility vehicle, our inventory has something for every need and budget.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Browse Personal Transportation Vehicles for Sale Online
          </h2>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            DENAGO Personal Transportation Vehicles Available Now
          </h3>
          <p className="mb-4">
            DENAGO offers a premium lineup of personal transportation vehicles designed for performance and reliability. Browse our current inventory featuring:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><Link href="/vehicles/denago-ev-nomad" className="text-theme-orange hover:underline">DENAGO EV Nomad</Link> - Compact and versatile for everyday use</li>
            <li><Link href="/vehicles/denago-ev-nomad-xl" className="text-theme-orange hover:underline">DENAGO EV Nomad XL</Link> - Extended passenger capacity</li>
            <li><Link href="/vehicles/denago-ev-rover-xl" className="text-theme-orange hover:underline">DENAGO EV Rover XL</Link> - Utility and cargo capability</li>
            <li><Link href="/vehicles/denago-ev-rover-xl6" className="text-theme-orange hover:underline">DENAGO EV Rover XL6</Link> - Six-passenger configuration</li>
            <li><Link href="/vehicles/denago-ev-rover-xxl" className="text-theme-orange hover:underline">DENAGO EV Rover XXL</Link> - Maximum capacity for work and play</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            EVOLUTION Personal Transportation Vehicles in Stock
          </h3>
          <p className="mb-4">
            EVOLUTION brings cutting-edge design and exceptional value to the personal transportation vehicle market. Explore our <Link href="/evolution" className="text-theme-orange hover:underline">complete EVOLUTION inventory</Link> featuring over 30 models.
          </p>

          <h4 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
            Popular EVOLUTION Models for Sale
          </h4>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><Link href="/vehicles/evolution-d5-maverick-4" className="text-theme-orange hover:underline">EVOLUTION D5 Maverick 4</Link> - Sport performance styling</li>
            <li><Link href="/vehicles/evolution-d6-max-gt4" className="text-theme-orange hover:underline">EVOLUTION D6 Max GT 4</Link> - Premium features and power</li>
            <li><Link href="/vehicles/evolution-carrier-6-plus" className="text-theme-orange hover:underline">EVOLUTION Carrier 6 Plus</Link> - Commercial utility</li>
            <li><Link href="/vehicles/evolution-forester-4-plus" className="text-theme-orange hover:underline">EVOLUTION Forester 4 Plus</Link> - All-terrain capability</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Nationwide PTV Deals and Shipping Options
          </h2>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Free Delivery Across the United States
          </h3>
          <p className="mb-4">
            TIGON provides free doorstep delivery for personal transportation vehicles purchased through our nationwide network. Our logistics team ensures your PTV arrives safely, whether you're in <Link href="/california" className="text-theme-orange hover:underline">California</Link>, <Link href="/texas" className="text-theme-orange hover:underline">Texas</Link>, <Link href="/florida" className="text-theme-orange hover:underline">Florida</Link>, or anywhere in between.
          </p>

          <h4 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
            Shipping Timeline by Region
          </h4>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>East Coast:</strong> 3-5 business days to Pennsylvania, New York, Florida, and surrounding states</li>
            <li><strong>Midwest:</strong> 5-7 business days to Ohio, Illinois, Indiana, and neighboring states</li>
            <li><strong>West Coast:</strong> 7-10 business days to California, Washington, Oregon, and Pacific states</li>
            <li><strong>Canada & Mexico:</strong> 10-14 business days with customs coordination included</li>
          </ul>

          <h5 className="text-lg font-semibold text-gray-900 mt-6 mb-3">
            White Glove Delivery Service
          </h5>
          <p className="mb-4">
            Our premium delivery service includes complete vehicle inspection upon arrival, battery charging, and a walkthrough of all features and controls. Your personal transportation vehicle will be ready to drive the moment it arrives.
          </p>

          <h6 className="text-base font-semibold text-gray-900 mt-4 mb-2">
            Delivery Inspection Checklist
          </h6>
          <p className="mb-6">
            Every PTV delivery includes a comprehensive 25-point inspection covering battery health, tire pressure, brake function, lights, signals, and all safety features.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Current Deals and Promotions on PTVs
          </h2>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Seasonal Sales Events
          </h3>
          <p className="mb-4">
            TIGON offers regular sales events with significant savings on personal transportation vehicles. Visit our <Link href="/inventory" className="text-theme-orange hover:underline">current inventory page</Link> for the latest deals and special pricing.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Financing Options for Every Budget
          </h3>
          <p className="mb-4">
            Don't let budget constraints stop you from owning a personal transportation vehicle. Explore our <Link href="/blog/personal-transportation-vehicles-financing-options" className="text-theme-orange hover:underline">flexible financing options</Link> with competitive rates and terms designed for all credit profiles.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Why Buy Personal Transportation Vehicles from TIGON?
          </h2>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Trusted Nationwide PTV Dealer
          </h3>
          <p className="mb-4">
            As North America's premier personal transportation vehicle dealership, TIGON has served thousands of satisfied customers across all 50 states. Our commitment to quality, service, and customer satisfaction sets us apart from the competition.
          </p>

          <h4 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
            TIGON Advantage
          </h4>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Largest selection of DENAGO and EVOLUTION PTVs in North America</li>
            <li>Free nationwide shipping to your doorstep</li>
            <li>Competitive pricing with price-match guarantee</li>
            <li>Comprehensive warranty coverage and support</li>
            <li>Expert customer service available at 1-844-844-6638</li>
          </ul>
        </div>

        <div className="mt-12 p-8 bg-gradient-to-r from-theme-primary to-blue-700 text-white rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Find Your Perfect PTV?</h3>
          <p className="mb-6">Browse our nationwide inventory and discover amazing deals on personal transportation vehicles</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/inventory">
              <Button size="lg" className="bg-theme-orange hover:opacity-90 text-white">
                <Truck className="w-4 h-4 mr-2" />
                View Inventory
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="bg-white text-theme-primary hover:bg-gray-100">
                <Phone className="w-4 h-4 mr-2" />
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
