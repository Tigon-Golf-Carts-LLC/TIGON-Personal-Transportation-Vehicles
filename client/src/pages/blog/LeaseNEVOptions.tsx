import { Link } from "wouter";
import { Calendar, ArrowLeft, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import { getBlogPostBySlug } from "@/data/blogPosts";
import { blogImages } from "@/data/blogImages";

export default function LeaseNEVOptions() {
  const post = getBlogPostBySlug("lease-neighborhood-electric-vehicle-options");
  if (!post) return null;

  return (
    <div className="min-h-screen bg-white">
      <SEOHead title={post.seoTitle} description={post.metaDescription} keywords="lease NEV, personal transportation vehicle leasing, NEV financing Pennsylvania, DENAGO lease options, EVOLUTION leasing, electric vehicle lease vs buy" canonicalUrl={`https://tigonptv.com/blog/${post.slug}`} />
      <article className="max-w-4xl mx-auto px-4 py-12">
        <Link href="/blog"><Button variant="ghost" className="mb-6" data-testid="back-to-blog"><ArrowLeft className="w-4 h-4 mr-2" />Back to Blog</Button></Link>
        <header className="mb-8">
          <div className="flex items-center gap-4 text-sm text-gray-600 mb-4"><span className="flex items-center"><Calendar className="w-4 h-4 mr-2" />{new Date(post.publishDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span><span>•</span><span>{post.category}</span></div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">{post.title}</h1>
          <div className="aspect-video rounded-lg mb-6 overflow-hidden">
            <img 
              src={blogImages[post.slug]} 
              alt={post.heroImageAlt}
              className="w-full h-full object-cover"
            />
          </div>
        </header>
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-relaxed mb-8">Leasing a personal transportation vehicle through TIGON dealerships in Pennsylvania, New Jersey, Delaware, Virginia, and nationwide locations provides flexibility, lower monthly payments, and the ability to upgrade to newer models every few years. Both personal and commercial leasing programs are available.</p>
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">NEV Leasing Options Through TIGON Dealerships</h2>
          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Personal NEV Leasing Programs</h3>
          <p className="mb-4">TIGON's Hatfield PA, Ocean View NJ, Dover DE, and 27 other locations offer competitive leasing terms for <Link href="/denago" className="text-theme-orange hover:underline">DENAGO</Link> and <Link href="/evolution" className="text-theme-orange hover:underline">EVOLUTION</Link> personal transportation vehicles with approved credit.</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Lease Terms:</strong> 24, 36, or 48-month options</li>
            <li><strong>Monthly Payments:</strong> Starting as low as $199/month</li>
            <li><strong>Mileage Allowances:</strong> 5,000-10,000 miles per year</li>
            <li><strong>Down Payment:</strong> $0-$2,000 depending on credit</li>
            <li><strong>GAP Coverage:</strong> Available for added protection</li>
          </ul>
          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Commercial Fleet Leasing</h3>
          <p className="mb-4">Businesses in Pennsylvania, New Jersey, and nationwide benefit from flexible fleet leasing with tax advantages. Commercial leases available for delivery operations, campus transportation, and municipal applications.</p>
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Lease vs Buy: Which is Right for You?</h2>
          <h4 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Advantages of Leasing a NEV</h4>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Lower Monthly Payments:</strong> 30-40% less than financing purchase</li>
            <li><strong>No Long-Term Commitment:</strong> Return vehicle at lease end</li>
            <li><strong>Always Drive Newest Models:</strong> Upgrade every 2-4 years</li>
            <li><strong>Warranty Coverage:</strong> Most repairs covered during lease term</li>
            <li><strong>No Trade-In Hassle:</strong> Simply return vehicle</li>
            <li><strong>Preserve Capital:</strong> Minimal upfront cost</li>
          </ul>
          <h4 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Advantages of Buying a NEV</h4>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Build Equity:</strong> Own asset after final payment</li>
            <li><strong>No Mileage Limits:</strong> Drive as much as needed</li>
            <li><strong>Customization Freedom:</strong> Modify without restrictions</li>
            <li><strong>Lower Total Cost:</strong> Pay less over long term</li>
            <li><strong>Tax Credits:</strong> Qualify for <Link href="/blog/neighborhood-electric-vehicle-tax-credits-incentives" className="text-theme-orange hover:underline">federal and state incentives</Link></li>
          </ul>
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">End-of-Lease Options</h2>
          <h5 className="text-lg font-semibold text-gray-900 mt-6 mb-3">1. Return and Lease New Model</h5>
          <p className="mb-4">Most Pennsylvania and New Jersey customers choose to return their leased NEV and lease the latest model, enjoying updated features and technology every few years.</p>
          <h5 className="text-lg font-semibold text-gray-900 mt-6 mb-3">2. Purchase Leased Vehicle</h5>
          <p className="mb-4">Buyout your leased NEV at predetermined residual value. Popular option for customers who've grown attached to their vehicle or have maintained it exceptionally well.</p>
          <h5 className="text-lg font-semibold text-gray-900 mt-6 mb-3">3. Extend Lease Term</h5>
          <p className="mb-4">Some TIGON locations offer lease extensions if you need more time to decide or aren't ready for a new vehicle.</p>
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Qualifying for NEV Leasing</h2>
          <h6 className="text-base font-semibold text-gray-900 mt-6 mb-3">Credit Requirements</h6>
          <p className="mb-4">TIGON works with multiple leasing companies to approve customers across all credit tiers. Minimum credit score typically 620 for standard terms, though programs exist for lower scores with larger down payments.</p>
          <h6 className="text-base font-semibold text-gray-900 mt-6 mb-3">Required Documentation</h6>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Valid driver's license</li>
            <li>Proof of income (pay stubs or tax returns)</li>
            <li>Proof of residence (utility bill or lease agreement)</li>
            <li>Auto insurance quote or policy</li>
            <li>References for first-time leasers</li>
          </ul>
          <p className="mb-4"><Link href="/contact" className="text-theme-orange hover:underline">Contact your nearest TIGON dealership</Link> in Hatfield PA, Ocean View NJ, Dover DE, Pocono Pines PA, Scranton PA, or 25 other locations to discuss leasing options and get pre-approved. Browse our <Link href="/inventory" className="text-theme-orange hover:underline">leaseable inventory</Link> and see current lease specials.</p>
        </div>
        <div className="mt-16 pt-8 border-t border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/blog/neighborhood-electric-vehicle-price-range-cost" className="p-4 border border-gray-200 rounded-lg hover:border-theme-orange transition-colors"><h4 className="font-semibold text-theme-primary hover:text-theme-orange mb-2">What is the average price range for new personal transportation vehicles?</h4><p className="text-sm text-gray-600">Compare purchase vs lease total costs</p></Link>
            <Link href="/blog/neighborhood-electric-vehicle-tax-credits-incentives" className="p-4 border border-gray-200 rounded-lg hover:border-theme-orange transition-colors"><h4 className="font-semibold text-theme-primary hover:text-theme-orange mb-2">Are there any incentives or tax credits for buying a personal transportation vehicle?</h4><p className="text-sm text-gray-600">Understand how incentives affect lease vs buy decision</p></Link>
          </div>
        </div>
        <div className="mt-12 p-8 bg-gradient-to-r from-theme-primary to-blue-700 text-white rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4">Get Your Custom Lease Quote</h3>
          <p className="mb-6">See your monthly payment options with no obligation</p>
          <Link href="/contact"><Button size="lg" className="bg-theme-orange hover:opacity-90 text-white"><FileText className="w-4 h-4 mr-2" />Get Lease Quote</Button></Link>
        </div>
      </article>
    </div>
  );
}
