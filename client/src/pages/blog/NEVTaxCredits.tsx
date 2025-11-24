import { Link } from "wouter";
import { Calendar, ArrowLeft, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import { getBlogPostBySlug } from "@/data/blogPosts";
import heroImage from "@assets/generated_images/tax_credits_incentives_infographic.png";

export default function NEVTaxCredits() {
  const post = getBlogPostBySlug("neighborhood-electric-vehicle-tax-credits-incentives");
  if (!post) return null;

  return (
    <div className="min-h-screen bg-white">
      <SEOHead 
        title={post.seoTitle}
        description={post.metaDescription}
        keywords="NEV tax credits, electric vehicle incentives 2025, Pennsylvania EV rebates, New Jersey electric vehicle tax credits, Delaware NEV incentives, federal EV tax credit"
        canonicalUrl={`https://tigonnev.com/blog/${post.slug}`}
      />
      <article className="max-w-4xl mx-auto px-4 py-12">
        <Link href="/blog">
          <Button variant="ghost" className="mb-6" data-testid="back-to-blog">
            <ArrowLeft className="w-4 h-4 mr-2" />Back to Blog
          </Button>
        </Link>
        <header className="mb-8">
          <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
            <span className="flex items-center"><Calendar className="w-4 h-4 mr-2" />{new Date(post.publishDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            <span>•</span><span>{post.category}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">{post.title}</h1>
          <div className="aspect-video rounded-lg mb-6 overflow-hidden">
            <img 
              src={heroImage} 
              alt={post.heroImageAlt}
              className="w-full h-full object-cover"
            />
          </div>
        </header>
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-relaxed mb-8">Federal tax credits, state rebates, and local utility incentives can reduce the cost of your neighborhood electric vehicle purchase by thousands of dollars. Pennsylvania, New Jersey, Delaware, Virginia, and buyers nationwide should explore all available savings opportunities before purchasing their NEV in 2025.</p>
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Federal Tax Credits for Neighborhood Electric Vehicles</h2>
          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Clean Vehicle Credit - Up to $7,500</h3>
          <p className="mb-4">The federal Clean Vehicle Credit provides up to $7,500 for qualifying new electric vehicles, including certain neighborhood electric vehicles. Eligibility depends on vehicle specifications, manufacturer, and buyer income limits.</p>
          <p className="mb-4"><strong>2025 Eligibility Requirements:</strong></p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Vehicle must be new and purchased from authorized dealer like <Link href="/showroom" className="text-theme-orange hover:underline">TIGON locations</Link></li>
            <li>MSRP caps: $80,000 for vans/SUVs/trucks, $55,000 for other vehicles</li>
            <li>Income limits: $300,000 married/$225,000 head of household/$150,000 single</li>
            <li>Vehicle must meet domestic assembly requirements</li>
            <li>Credit can be applied at point of sale through participating dealers</li>
          </ul>
          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Used Clean Vehicle Credit - Up to $4,000</h3>
          <p className="mb-4">Qualified buyers can claim up to $4,000 (or 30% of sale price, whichever is less) for <Link href="/blog/buy-used-neighborhood-electric-vehicles-online" className="text-theme-orange hover:underline">used NEV purchases</Link>. Requirements include sale price under $25,000 and income limits of $150,000 married/$112,500 head of household/$75,000 single.</p>
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Pennsylvania State Incentives</h2>
          <h4 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Pennsylvania Alternative Fuel Vehicle Rebate</h4>
          <p className="mb-4">Pennsylvania offers rebates through various programs for electric vehicle purchases. Check with TIGON dealerships in Hatfield, Pocono Pines, Long Pond, or Scranton-Wilkes-Barre for current Pennsylvania rebate programs and application assistance.</p>
          <h4 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Municipal and Utility Programs</h4>
          <p className="mb-4">Many Pennsylvania municipalities and electric utilities offer additional incentives:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>PECO Energy - Rebates for customers in Southeast Pennsylvania</li>
            <li>PPL Electric - Incentives for customers in Central/Eastern PA</li>
            <li>Philadelphia EV charging incentives for city residents</li>
          </ul>
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">New Jersey Electric Vehicle Programs</h2>
          <h4 className="text-xl font-semibold text-gray-900 mt-6 mb-3">NJ Charge Up Program</h4>
          <p className="mb-4">New Jersey offers point-of-sale rebates for electric vehicle purchases. Ocean View, Bayville, Waretown, and Pleasantville residents can receive instant savings when purchasing qualified NEVs at TIGON New Jersey locations.</p>
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Delaware and Virginia Incentives</h2>
          <h5 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Delaware Clean Transportation Incentive Program</h5>
          <p className="mb-4">Delaware offers rebates up to $2,500 for new electric vehicle purchases. Contact TIGON Dover DE for application assistance and current rebate amounts.</p>
          <h5 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Virginia Clean Special Fuel Vehicle License Tax</h5>
          <p className="mb-4">Virginia provides tax exemptions and reduced registration fees for electric vehicles. TIGON's Gloucester Point, Portsmouth, and Virginia Beach locations assist with Virginia-specific incentive programs.</p>
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">How to Maximize Your NEV Incentive Savings</h2>
          <h6 className="text-base font-semibold text-gray-900 mt-6 mb-3">Stack Multiple Programs</h6>
          <p className="mb-4">Combining federal tax credits with state rebates and utility incentives can reduce your total NEV cost by $5,000-$10,000. For example, a Pennsylvania buyer might receive $7,500 federal credit plus $1,000-$2,000 in state/utility rebates.</p>
          <h6 className="text-base font-semibold text-gray-900 mt-6 mb-3">Work with Knowledgeable Dealers</h6>
          <p className="mb-4">TIGON's finance specialists across all 30 locations stay current on available incentives and help buyers navigate application processes. We can apply federal credits at point of sale and assist with state rebate paperwork.</p>
          <p className="mb-4"><Link href="/contact" className="text-theme-orange hover:underline">Contact your nearest TIGON location</Link> to discuss current incentives and determine your total potential savings on <Link href="/denago" className="text-theme-orange hover:underline">DENAGO</Link> and <Link href="/evolution" className="text-theme-orange hover:underline">EVOLUTION</Link> neighborhood electric vehicles. Browse our <Link href="/inventory" className="text-theme-orange hover:underline">inventory</Link> and see final pricing after incentives.</p>
        </div>
        <div className="mt-16 pt-8 border-t border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/blog/neighborhood-electric-vehicle-price-range-cost" className="p-4 border border-gray-200 rounded-lg hover:border-theme-orange transition-colors">
              <h4 className="font-semibold text-theme-primary hover:text-theme-orange mb-2">What is the average price range for new neighborhood electric vehicles?</h4>
              <p className="text-sm text-gray-600">2025 NEV pricing before incentives</p>
            </Link>
            <Link href="/blog/lease-neighborhood-electric-vehicle-options" className="p-4 border border-gray-200 rounded-lg hover:border-theme-orange transition-colors">
              <h4 className="font-semibold text-theme-primary hover:text-theme-orange mb-2">Can I lease a neighborhood electric vehicle instead of buying one?</h4>
              <p className="text-sm text-gray-600">Leasing vs buying with incentives</p>
            </Link>
          </div>
        </div>
        <div className="mt-12 p-8 bg-gradient-to-r from-theme-primary to-blue-700 text-white rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4">Calculate Your Total Savings Today</h3>
          <p className="mb-6">Get personalized incentive information for your state and situation</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact"><Button size="lg" className="bg-theme-orange hover:opacity-90 text-white"><DollarSign className="w-4 h-4 mr-2" />Calculate Savings</Button></Link>
            <Link href="/inventory"><Button size="lg" variant="outline" className="bg-white text-theme-primary hover:bg-gray-100">View Inventory</Button></Link>
          </div>
        </div>
      </article>
    </div>
  );
}
