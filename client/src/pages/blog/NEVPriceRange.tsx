import { Link } from "wouter";
import { Calendar, ArrowLeft, MapPin, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import { getBlogPostBySlug } from "@/data/blogPosts";
import { blogImages } from "@/data/blogImages";

export default function NEVPriceRange() {
  const post = getBlogPostBySlug("neighborhood-electric-vehicle-price-range-cost");
  
  if (!post) return null;

  return (
    <div className="min-h-screen bg-white">
      <SEOHead 
        title={post.seoTitle}
        description={post.metaDescription}
        keywords="NEV prices 2025, personal transportation vehicle cost, DENAGO prices, EVOLUTION NEV cost, electric vehicle pricing Pennsylvania, NEV financing, street legal golf cart prices"
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
            Understanding personal transportation vehicle pricing helps Pennsylvania, New Jersey, Delaware, and Virginia buyers budget effectively and make informed purchasing decisions. In 2025, NEV prices range from approximately $8,000 for basic models to $25,000+ for premium configurations with advanced features.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            2025 NEV Price Ranges by Category
          </h2>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Entry-Level Personal Transportation Vehicles ($8,000 - $12,000)
          </h3>
          <p className="mb-4">
            Basic 2-passenger models perfect for simple transportation needs in Hatfield PA, Ocean View NJ, and similar communities. These vehicles offer essential features without luxury amenities.
          </p>
          <p className="mb-4">
            <strong>Typical Features:</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>20-25 mile range per charge</li>
            <li>Basic battery system (lead-acid)</li>
            <li>Standard seating for 2 passengers</li>
            <li>Essential safety features</li>
            <li>Limited warranty coverage</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Mid-Range NEVs ($12,000 - $18,000)
          </h3>
          <p className="mb-4">
            This category includes popular models like the <Link href="/denago-ev-city" className="text-theme-orange hover:underline">DENAGO EV City</Link> and <Link href="/evolution-classic-2-plus" className="text-theme-orange hover:underline">EVOLUTION Classic 2 Plus</Link>. These vehicles balance affordability with quality features, making them bestsellers across TIGON's Pennsylvania and New Jersey dealerships.
          </p>
          <p className="mb-4">
            <strong>Enhanced Features:</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>30-40 mile range with lithium-ion batteries</li>
            <li>Upgraded seating materials</li>
            <li>LED lighting systems</li>
            <li>USB charging ports</li>
            <li>Improved suspension for comfort</li>
            <li>Extended manufacturer warranty</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Premium and Utility NEVs ($18,000 - $25,000+)
          </h3>
          <p className="mb-4">
            Top-tier models like the <Link href="/evolution-d6-max-gt-4" className="text-theme-orange hover:underline">EVOLUTION D6 Max GT 4</Link> and <Link href="/denago-ev-rover-xxl" className="text-theme-orange hover:underline">DENAGO EV Rover XXL</Link> cater to buyers seeking maximum performance, cargo capacity, or luxury features. Popular for commercial use in Dover DE and business applications throughout Virginia.
          </p>
          <p className="mb-4">
            <strong>Premium Features:</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>40+ mile range capability</li>
            <li>Heavy-duty construction</li>
            <li>6-passenger seating or large cargo beds</li>
            <li>Advanced suspension systems</li>
            <li>Premium audio systems</li>
            <li>Custom paint options</li>
            <li>Comprehensive warranty packages</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Factors That Affect NEV Pricing
          </h2>

          <h4 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
            Battery Technology
          </h4>
          <p className="mb-4">
            Lithium-ion batteries add $2,000-$4,000 to vehicle cost compared to lead-acid alternatives, but provide longer range, faster charging, and extended lifespan—typically 5-8 years vs. 2-3 years for lead-acid. Pennsylvania and New Jersey buyers consistently choose lithium-ion for long-term value.
          </p>

          <h4 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
            Passenger and Cargo Capacity
          </h4>
          <p className="mb-4">
            Each additional seating position typically adds $1,500-$2,500 to the base price. Cargo bed configurations for commercial use in Scranton, Raleigh, or Orangeburg markets command premium pricing due to reinforced frames and utility features.
          </p>

          <h4 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
            Brand and Warranty
          </h4>
          <p className="mb-4">
            Established manufacturers like <Link href="/denago" className="text-theme-orange hover:underline">DENAGO</Link> and <Link href="/evolution" className="text-theme-orange hover:underline">EVOLUTION</Link> command higher prices but include comprehensive <Link href="/blog/neighborhood-electric-vehicle-warranty-coverage-comparison" className="text-theme-orange hover:underline">warranty coverage</Link> and dealer support through TIGON's 30-location network.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Total Cost of Ownership Considerations
          </h2>

          <h5 className="text-lg font-semibold text-gray-900 mt-6 mb-3">
            Operating Costs (Annual Estimates)
          </h5>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Electricity:</strong> $150-$300 (based on Pennsylvania/New Jersey rates)</li>
            <li><strong>Maintenance:</strong> $200-$400 (significantly less than gasoline vehicles)</li>
            <li><strong>Insurance:</strong> $300-$600 (varies by state and coverage)</li>
            <li><strong>Registration:</strong> $25-$100 (check Delaware, Virginia regulations)</li>
          </ul>

          <h5 className="text-lg font-semibold text-gray-900 mt-6 mb-3">
            Long-Term Savings vs. Gasoline Vehicles
          </h5>
          <p className="mb-4">
            NEV owners in Pennsylvania typically save $1,200-$2,000 annually on fuel costs alone. With minimal maintenance requirements and available <Link href="/blog/neighborhood-electric-vehicle-tax-credits-incentives" className="text-theme-orange hover:underline">tax incentives</Link>, many buyers recoup the initial investment within 3-5 years.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Financing Options Available Through TIGON
          </h2>

          <h4 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
            Traditional Auto Loans
          </h4>
          <p className="mb-4">
            TIGON dealerships work with multiple lenders to secure competitive rates for NEV purchases across all credit tiers. Typical terms:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Loan terms: 36-72 months</li>
            <li>Interest rates: 4.9%-12.9% APR (credit dependent)</li>
            <li>Down payment: $0-20% recommended</li>
            <li>Available at all Pennsylvania, New Jersey, Delaware, and Virginia locations</li>
          </ul>

          <h4 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
            Leasing Programs
          </h4>
          <p className="mb-4">
            <Link href="/blog/lease-neighborhood-electric-vehicle-options" className="text-theme-orange hover:underline">Leasing</Link> reduces monthly payments and provides flexibility. Example: A $15,000 NEV might lease for $249/month with approved credit.
          </p>

          <h6 className="text-base font-semibold text-gray-900 mt-6 mb-3">
            Get Accurate Pricing for Your Area
          </h6>
          <p className="mb-4">
            NEV pricing can vary by location, available incentives, and current promotions. <Link href="/contact" className="text-theme-orange hover:underline">Contact your nearest TIGON dealership</Link> in Hatfield PA, Ocean View NJ, Dover DE, or any of our 30 locations for accurate pricing and current specials in your area. Browse our complete <Link href="/inventory" className="text-theme-orange hover:underline">inventory</Link> to compare models and features.
          </p>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/blog/neighborhood-electric-vehicle-tax-credits-incentives" className="p-4 border border-gray-200 rounded-lg hover:border-theme-orange transition-colors">
              <h4 className="font-semibold text-theme-primary hover:text-theme-orange mb-2">
                Are there any incentives or tax credits for buying a personal transportation vehicle?
              </h4>
              <p className="text-sm text-gray-600">Maximize savings with federal and state incentives</p>
            </Link>
            <Link href="/blog/lease-neighborhood-electric-vehicle-options" className="p-4 border border-gray-200 rounded-lg hover:border-theme-orange transition-colors">
              <h4 className="font-semibold text-theme-primary hover:text-theme-orange mb-2">
                Can I lease a personal transportation vehicle instead of buying one?
              </h4>
              <p className="text-sm text-gray-600">Explore flexible leasing options and benefits</p>
            </Link>
          </div>
        </div>

        <div className="mt-12 p-8 bg-gradient-to-r from-theme-primary to-blue-700 text-white rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4">Get Your Personalized Quote Today</h3>
          <p className="mb-6">Contact us for current pricing and available incentives in your area</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/inventory">
              <Button size="lg" className="bg-theme-orange hover:opacity-90 text-white">
                <DollarSign className="w-4 h-4 mr-2" />
                View Pricing
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="bg-white text-theme-primary hover:bg-gray-100">
                Request Quote
              </Button>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
