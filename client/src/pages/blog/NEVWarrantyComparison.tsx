import { Link } from "wouter";
import { Calendar, ArrowLeft, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import { getBlogPostBySlug } from "@/data/blogPosts";
import heroImage from "@assets/generated_images/nev_warranty_documents_comparison.png";

export default function NEVWarrantyComparison() {
  const post = getBlogPostBySlug("neighborhood-electric-vehicle-warranty-coverage-comparison");
  if (!post) return null;

  return (
    <div className="min-h-screen bg-white">
      <SEOHead title={post.seoTitle} description={post.metaDescription} keywords="NEV warranty coverage, DENAGO warranty, EVOLUTION warranty, electric vehicle warranty comparison, battery warranty, neighborhood electric vehicle protection plans" canonicalUrl={`https://tigonnev.com/blog/${post.slug}`} />
      <article className="max-w-4xl mx-auto px-4 py-12">
        <Link href="/blog"><Button variant="ghost" className="mb-6" data-testid="back-to-blog"><ArrowLeft className="w-4 h-4 mr-2" />Back to Blog</Button></Link>
        <header className="mb-8">
          <div className="flex items-center gap-4 text-sm text-gray-600 mb-4"><span className="flex items-center"><Calendar className="w-4 h-4 mr-2" />{new Date(post.publishDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span><span>•</span><span>{post.category}</span></div>
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
          <p className="text-xl text-gray-700 leading-relaxed mb-8">Warranty coverage significantly impacts the total cost of neighborhood electric vehicle ownership for Pennsylvania, New Jersey, Delaware, and Virginia buyers. Understanding what each manufacturer covers—and for how long—helps make informed purchasing decisions and budget for potential future expenses.</p>
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">DENAGO Warranty Coverage Overview</h2>
          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Comprehensive Vehicle Warranty</h3>
          <p className="mb-4"><Link href="/denago" className="text-theme-orange hover:underline">DENAGO</Link> neighborhood electric vehicles sold through <Link href="/showroom" className="text-theme-orange hover:underline">TIGON dealerships</Link> in Hatfield PA, Ocean View NJ, Dover DE, and nationwide locations include industry-leading warranty protection.</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Basic Warranty:</strong> 2 years/unlimited miles on all components</li>
            <li><strong>Powertrain Warranty:</strong> 3 years/unlimited miles on motor and controller</li>
            <li><strong>Battery Warranty:</strong> 4 years/unlimited miles on lithium-ion batteries (80% capacity guarantee)</li>
            <li><strong>Frame Warranty:</strong> 5 years/unlimited miles on structural components</li>
            <li><strong>Corrosion Protection:</strong> 5 years against rust-through on body panels</li>
          </ul>
          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">EVOLUTION Warranty Program</h3>
          <p className="mb-4"><Link href="/evolution" className="text-theme-orange hover:underline">EVOLUTION</Link> provides comprehensive coverage with emphasis on premium component protection, available across all TIGON Pennsylvania, New Jersey, Delaware, and Virginia showrooms.</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Bumper-to-Bumper:</strong> 3 years/unlimited miles comprehensive coverage</li>
            <li><strong>Powertrain:</strong> 4 years/unlimited miles on drive system</li>
            <li><strong>Battery:</strong> 5 years/unlimited miles lithium-ion (75% capacity minimum)</li>
            <li><strong>Frame:</strong> Lifetime warranty on chassis and frame</li>
            <li><strong>Paint:</strong> 3 years against defects and fading</li>
          </ul>
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Understanding Battery Warranty Terms</h2>
          <h4 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Capacity vs. Complete Failure Coverage</h4>
          <p className="mb-4">Battery warranties typically guarantee minimum capacity retention (75-80%) rather than complete replacement. For example, if your DENAGO battery retains only 70% capacity within the 4-year warranty period, it qualifies for replacement. Normal degradation to 85% would not be covered.</p>
          <h4 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Pro-Rated vs. Full Replacement</h4>
          <p className="mb-4">Most NEV battery warranties provide full replacement during the initial coverage period. Some manufacturers offer pro-rated coverage extending beyond full-coverage terms, where you pay a percentage of replacement cost based on battery age.</p>
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Extended Warranty Options</h2>
          <h5 className="text-lg font-semibold text-gray-900 mt-6 mb-3">TIGON Protection Plus Plans</h5>
          <p className="mb-4">Available through all 30 TIGON locations, Protection Plus extends coverage beyond manufacturer warranties for Pennsylvania, New Jersey, Delaware, and Virginia buyers seeking maximum peace of mind.</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Platinum Plan:</strong> 6 years/unlimited miles comprehensive coverage</li>
            <li><strong>Gold Plan:</strong> 5 years/unlimited miles major components</li>
            <li><strong>Silver Plan:</strong> 4 years/unlimited miles powertrain and battery</li>
            <li>$0 deductible options available</li>
            <li>Transferable to new owner (adds resale value)</li>
            <li>Rental vehicle reimbursement during covered repairs</li>
          </ul>
          <h5 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Manufacturer-Backed Extended Coverage</h5>
          <p className="mb-4">Both DENAGO and EVOLUTION offer factory-backed extended warranty programs that maintain full manufacturer support and can be purchased at time of sale or before original warranty expires.</p>
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Warranty Service and Claims Process</h2>
          <h6 className="text-base font-semibold text-gray-900 mt-6 mb-3">Where to Get Warranty Service</h6>
          <p className="mb-4">DENAGO and EVOLUTION warranties are honored at all authorized dealers. TIGON's 18 physical service locations in Pennsylvania (Hatfield, Pocono Pines, Long Pond, Scranton), New Jersey (Ocean View, Bayville, Waretown, Pleasantville), Delaware (Dover), Virginia (Gloucester Point, Portsmouth, Virginia Beach), North Carolina (Raleigh), South Carolina (Orangeburg), Florida (Lecanto), Indiana (South Bend), Ohio (Swanton), and Virginia Beach provide convenient access to certified technicians.</p>
          <h6 className="text-base font-semibold text-gray-900 mt-6 mb-3">Warranty Transfer for Used NEVs</h6>
          <p className="mb-4">Most manufacturer warranties transfer to subsequent owners at no cost, adding value to <Link href="/blog/buy-used-neighborhood-electric-vehicles-online" className="text-theme-orange hover:underline">used NEV purchases</Link>. Extended warranties purchased through TIGON typically transfer with a small administrative fee ($50-$100).</p>
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Maximizing Your Warranty Benefits</h2>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Perform all scheduled maintenance at authorized TIGON service centers</li>
            <li>Keep detailed service records and receipts</li>
            <li>Address issues promptly rather than continuing to operate with known problems</li>
            <li>Use only approved parts and accessories</li>
            <li>Follow proper charging and storage procedures</li>
            <li>Register your warranty within required timeframe (typically 30 days)</li>
          </ul>
          <p className="mb-4"><Link href="/contact" className="text-theme-orange hover:underline">Contact your nearest TIGON dealership</Link> to review specific warranty terms for DENAGO and EVOLUTION models or discuss extended coverage options. Visit our <Link href="/showroom" className="text-theme-orange hover:underline">locations</Link> in Pennsylvania, New Jersey, Delaware, Virginia, and beyond for warranty documentation and service scheduling.</p>
        </div>
        <div className="mt-16 pt-8 border-t border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/blog/neighborhood-electric-vehicle-manufacturers-us" className="p-4 border border-gray-200 rounded-lg hover:border-theme-orange transition-colors"><h4 className="font-semibold text-theme-primary hover:text-theme-orange mb-2">Which companies manufacture neighborhood electric vehicles available in the US?</h4><p className="text-sm text-gray-600">Learn about DENAGO and EVOLUTION quality standards</p></Link>
            <Link href="/blog/buy-used-neighborhood-electric-vehicles-online" className="p-4 border border-gray-200 rounded-lg hover:border-theme-orange transition-colors"><h4 className="font-semibold text-theme-primary hover:text-theme-orange mb-2">What are the best online platforms to buy used neighborhood electric vehicles?</h4><p className="text-sm text-gray-600">Understanding warranty transfer for pre-owned NEVs</p></Link>
          </div>
        </div>
        <div className="mt-12 p-8 bg-gradient-to-r from-theme-primary to-blue-700 text-white rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4">Protect Your Investment</h3>
          <p className="mb-6">Explore warranty options and extended coverage plans</p>
          <Link href="/contact"><Button size="lg" className="bg-theme-orange hover:bg-orange-600 text-white"><Shield className="w-4 h-4 mr-2" />Learn About Warranties</Button></Link>
        </div>
      </article>
    </div>
  );
}
