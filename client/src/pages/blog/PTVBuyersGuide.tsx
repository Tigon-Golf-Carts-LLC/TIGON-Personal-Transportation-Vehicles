import { Link } from "wouter";
import { Calendar, ArrowLeft, BookOpen, CheckCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import { getBlogPostBySlug } from "@/data/blogPosts";
const heroImage = "/attached_assets/TIGON%20Personal%20Transportation%20Vehicles%20Premier%20PTV%20Dealership%20-%20PTV_1764176674271.jpeg";

export default function PTVBuyersGuide() {
  const post = getBlogPostBySlug("personal-transportation-vehicles-buyers-guide");
  if (!post) return null;

  return (
    <div className="min-h-screen bg-white">
      <SEOHead 
        title={post.seoTitle}
        description={post.metaDescription}
        keywords="personal transportation vehicles buyers guide, PTV buying tips, how to buy PTV, PTV selection guide, DENAGO buying guide, EVOLUTION buying guide, PTV purchase advice"
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
            Purchasing a personal transportation vehicle is an exciting decision that requires careful consideration. This comprehensive buyer's guide covers everything you need to know before making your purchase, from understanding your needs to choosing the right model and completing your transaction with confidence.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Step 1: Assess Your Transportation Needs
          </h2>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            How Will You Use Your PTV?
          </h3>
          <p className="mb-4">
            Understanding your primary use case helps narrow down the right model:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Daily Commuting:</strong> <Link href="/blog/daily-commuter-personal-transportation-vehicles" className="text-theme-orange hover:underline">Commuter-focused models</Link> prioritize range and comfort</li>
            <li><strong>Family Transportation:</strong> <Link href="/blog/family-friendly-personal-transportation-vehicles" className="text-theme-orange hover:underline">Family PTVs</Link> offer multi-passenger capacity and safety</li>
            <li><strong>Work/Utility:</strong> Cargo-focused models like <Link href="/vehicles/denago-ev-rover-xl" className="text-theme-orange hover:underline">DENAGO EV Rover XL</Link> provide hauling capability</li>
            <li><strong>Recreation:</strong> <Link href="/blog/recreational-personal-transportation-vehicles" className="text-theme-orange hover:underline">Recreational PTVs</Link> deliver fun and versatility</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            How Many Passengers?
          </h3>
          <p className="mb-4">
            Passenger capacity ranges from 2 to 8 seats depending on the model. Consider your typical usage, not just maximum needs.
          </p>

          <h4 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
            Storage and Cargo Requirements
          </h4>
          <p className="mb-4">
            Consider what you'll need to carry regularly - groceries, tools, sports equipment, or work supplies.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Step 2: Understand Your Local Regulations
          </h2>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Street-Legal Requirements
          </h3>
          <p className="mb-4">
            Before purchasing, understand your state and local <Link href="/blog/street-legal-personal-transportation-vehicles" className="text-theme-orange hover:underline">street-legal PTV regulations</Link>. Most states allow properly equipped PTVs on roads with speed limits of 35 MPH or less.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Registration and Insurance
          </h3>
          <p className="mb-4">
            Most states require PTV registration and liability insurance. TIGON's team can guide you through requirements for <Link href="/pennsylvania" className="text-theme-orange hover:underline">Pennsylvania</Link>, <Link href="/florida" className="text-theme-orange hover:underline">Florida</Link>, <Link href="/texas" className="text-theme-orange hover:underline">Texas</Link>, and all 50 states.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Step 3: Set Your Budget
          </h2>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Purchase Price Ranges
          </h3>
          <p className="mb-4">
            Personal transportation vehicles span a wide price range based on features and capabilities:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Entry Level:</strong> $8,000-$12,000 for basic models</li>
            <li><strong>Mid-Range:</strong> $12,000-$18,000 for enhanced features</li>
            <li><strong>Premium:</strong> $18,000-$25,000+ for <Link href="/blog/luxury-personal-transportation-vehicles" className="text-theme-orange hover:underline">luxury models</Link></li>
            <li><strong>Budget Options:</strong> <Link href="/blog/best-value-personal-transportation-vehicles-under-5000" className="text-theme-orange hover:underline">Used PTVs under $5,000</Link></li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Financing Options
          </h3>
          <p className="mb-4">
            Don't let upfront cost deter you. <Link href="/blog/personal-transportation-vehicles-financing-options" className="text-theme-orange hover:underline">Flexible financing</Link> makes PTV ownership accessible with monthly payments often under $200.
          </p>

          <h5 className="text-lg font-semibold text-gray-900 mt-6 mb-3">
            Total Cost of Ownership
          </h5>
          <p className="mb-4">
            Factor in ongoing costs including charging ($5-10/month), insurance ($15-50/month), and minimal maintenance.
          </p>

          <h6 className="text-base font-semibold text-gray-900 mt-4 mb-2">
            Potential Savings
          </h6>
          <p className="mb-6">
            Consider <Link href="/blog/neighborhood-electric-vehicle-tax-credits-incentives" className="text-theme-orange hover:underline">available incentives</Link> that can reduce your purchase price through federal and state programs.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Step 4: Compare Models and Features
          </h2>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Key Features to Compare
          </h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Range:</strong> How far can it travel on a single charge?</li>
            <li><strong>Battery Type:</strong> Lead-acid vs. lithium-ion</li>
            <li><strong>Passenger Capacity:</strong> 2, 4, 6, or 8 passengers</li>
            <li><strong>Cargo Space:</strong> Storage and hauling capability</li>
            <li><strong>Street-Legal Equipment:</strong> Lights, signals, mirrors, seatbelts</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Brand Comparison
          </h3>
          <p className="mb-4">
            Explore the leading brands available through TIGON:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><Link href="/denago" className="text-theme-orange hover:underline">DENAGO</Link> - Premium quality and innovation</li>
            <li><Link href="/evolution" className="text-theme-orange hover:underline">EVOLUTION</Link> - Extensive model selection and value</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Step 5: Make Your Purchase
          </h2>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Where to Buy
          </h3>
          <p className="mb-4">
            TIGON offers multiple purchasing options:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><Link href="/showroom" className="text-theme-orange hover:underline">Visit our showroom</Link> for in-person experience</li>
            <li><Link href="/blog/buy-personal-transportation-vehicles-online" className="text-theme-orange hover:underline">Buy online</Link> with nationwide delivery</li>
            <li>Call 1-844-844-6638 for phone ordering</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            What's Included
          </h3>
          <p className="mb-4">
            Every TIGON PTV purchase includes:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Complete documentation for registration</li>
            <li>Manufacturer warranty coverage</li>
            <li>Delivery and setup (nationwide shipping available)</li>
            <li>Customer support and service access</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Questions to Ask Before Buying
          </h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>What warranty coverage is included?</li>
            <li>What financing options are available?</li>
            <li>How is delivery handled?</li>
            <li>What service and support is available post-purchase?</li>
            <li>Are there any current promotions or incentives?</li>
          </ul>
        </div>

        <div className="mt-12 p-8 bg-gradient-to-r from-theme-primary to-blue-700 text-white rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Start Shopping?</h3>
          <p className="mb-6">Use this buyer's guide to find your perfect personal transportation vehicle</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/inventory">
              <Button size="lg" className="bg-theme-orange hover:opacity-90 text-white">
                <BookOpen className="w-4 h-4 mr-2" />
                Browse Inventory
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="bg-white text-theme-primary hover:bg-gray-100">
                <Phone className="w-4 h-4 mr-2" />
                Expert Consultation
              </Button>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
