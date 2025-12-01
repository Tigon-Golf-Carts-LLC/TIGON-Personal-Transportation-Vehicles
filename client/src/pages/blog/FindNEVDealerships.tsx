import { Link } from "wouter";
import { Calendar, ArrowLeft, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import { getBlogPostBySlug } from "@/data/blogPosts";
const heroImage = "/attached_assets/TIGON%20Personal%20Transportation%20Vehicles%20Premier%20PTV%20Dealership%20-%20PTV_1764176674271.jpeg";

export default function FindNEVDealerships() {
  const post = getBlogPostBySlug("find-neighborhood-electric-vehicle-dealerships-near-me");
  
  if (!post) return null;

  return (
    <div className="min-h-screen bg-white">
      <SEOHead 
        title={post.seoTitle}
        description={post.metaDescription}
        keywords="PTV dealerships near me, personal transportation vehicle dealers, TIGON locations, Pennsylvania NEV dealers, New Jersey electric vehicle showrooms, Delaware NEV stores, Virginia PTV dealerships"
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
            Finding a trusted personal transportation vehicle dealership near you is the first step toward enjoying the benefits of NEV ownership. With TIGON's 30-location network spanning Pennsylvania, New Jersey, Delaware, Virginia, North Carolina, South Carolina, Florida, Indiana, Ohio, Maryland, and New York, quality NEV sales and service are closer than you think.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            TIGON's Comprehensive Dealership Network
          </h2>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Pennsylvania PTV Dealerships - 4 Locations
          </h3>
          <p className="mb-4">
            <strong>TIGON Hatfield PA</strong><br />
            2333 Bethlehem Pike, Hatfield, PA 19440<br />
            Phone: <a href="tel:18448446638" className="text-theme-orange hover:underline">1-844-844-6638</a><br />
            Serving: Montgomery County, Bucks County, Philadelphia suburbs<br />
            <Link href="/showroom" className="text-theme-orange hover:underline">View location details and directions</Link>
          </p>
          <p className="mb-4">
            <strong>TIGON Pocono Pines PA</strong><br />
            1712 Pennsylvania 940, Pocono Pines, PA 18350<br />
            Phone: <a href="tel:18448446638" className="text-theme-orange hover:underline">1-844-844-6638</a><br />
            Serving: Monroe County, Pocono Mountains region
          </p>
          <p className="mb-4">
            <strong>TIGON Long Pond PA</strong><br />
            4738 PA-115, Long Pond, PA 18334<br />
            Phone: <a href="tel:18448446638" className="text-theme-orange hover:underline">1-844-844-6638</a><br />
            Serving: Eastern Pennsylvania, Pocono region
          </p>
          <p className="mb-4">
            <strong>TIGON Scranton-Wilkes-Barre PA</strong><br />
            1225 N Keyser Ave #2, Scranton, PA 18504<br />
            Phone: <a href="tel:18448446638" className="text-theme-orange hover:underline">1-844-844-6638</a><br />
            Serving: Lackawanna County, Northeastern Pennsylvania
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            New Jersey PTV Dealerships - 4 Locations
          </h3>
          <p className="mb-4">
            <strong>TIGON Ocean View NJ</strong><br />
            101 NJ-50, Ocean View, NJ 08230<br />
            Phone: <a href="tel:18448446638" className="text-theme-orange hover:underline">1-844-844-6638</a><br />
            Serving: Cape May County, South Jersey shore communities
          </p>
          <p className="mb-4">
            <strong>TIGON Bayville NJ</strong><br />
            155 Atlantic City Blvd, Bayville, NJ 08721<br />
            Phone: <a href="tel:18448446638" className="text-theme-orange hover:underline">1-844-844-6638</a><br />
            Serving: Ocean County, Central Jersey
          </p>
          <p className="mb-4">
            <strong>TIGON Waretown NJ</strong><br />
            526 US-9, Waretown, NJ 08758<br />
            Phone: <a href="tel:18448446638" className="text-theme-orange hover:underline">1-844-844-6638</a><br />
            Serving: Ocean County coastal communities
          </p>
          <p className="mb-4">
            <strong>TIGON Pleasantville NJ</strong><br />
            7000 Black Horse Pike, Pleasantville, NJ 08232<br />
            Phone: <a href="tel:18448446638" className="text-theme-orange hover:underline">1-844-844-6638</a><br />
            Serving: Atlantic County, Greater Atlantic City area
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Delaware PTV Dealership
          </h3>
          <p className="mb-4">
            <strong>TIGON Dover DE</strong><br />
            5158 N Dupont Hwy, Dover, DE 19901<br />
            Phone: <a href="tel:18448446638" className="text-theme-orange hover:underline">1-844-844-6638</a><br />
            Serving: Kent County, Central Delaware, Dover Air Force Base area
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Virginia PTV Dealerships - 3 Locations
          </h3>
          <p className="mb-4">
            <strong>TIGON Gloucester Point VA</strong><br />
            2810 George Washington Memorial Hwy, Gloucester Point, VA 23072<br />
            Phone: <a href="tel:18448446638" className="text-theme-orange hover:underline">1-844-844-6638</a><br />
            Serving: Gloucester County, York County, Hampton Roads
          </p>
          <p className="mb-4">
            <strong>TIGON Portsmouth VA</strong><br />
            2008 Portsmouth Blvd, Portsmouth, VA 23704<br />
            Phone: <a href="tel:18448446638" className="text-theme-orange hover:underline">1-844-844-6638</a><br />
            Serving: Portsmouth, Chesapeake, Norfolk area
          </p>
          <p className="mb-4">
            <strong>TIGON Virginia Beach VA</strong><br />
            1101 Virginia Beach Blvd, Virginia Beach, VA 23451<br />
            Phone: <a href="tel:18448446638" className="text-theme-orange hover:underline">1-844-844-6638</a><br />
            Serving: Virginia Beach, Oceanfront communities
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Additional TIGON Locations Across America
          </h2>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>North Carolina:</strong> Raleigh (1-844-844-6638)</li>
            <li><strong>South Carolina:</strong> Orangeburg (1-844-844-6638)</li>
            <li><strong>Florida:</strong> Lecanto (1-844-844-6638)</li>
            <li><strong>Indiana:</strong> South Bend (1-844-844-6638)</li>
            <li><strong>Ohio:</strong> Swanton (1-844-844-6638)</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Online Stores Serving Entire States
          </h2>
          <p className="mb-4">
            Can't visit a physical showroom? TIGON's online stores provide full-service NEV sales with home delivery available across:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Pennsylvania - <Link href="/pennsylvania" className="text-theme-orange hover:underline">tigonptv.com/pennsylvania</Link></li>
            <li>New Jersey - <Link href="/new-jersey" className="text-theme-orange hover:underline">tigonptv.com/new-jersey</Link></li>
            <li>Delaware - <Link href="/delaware" className="text-theme-orange hover:underline">tigonptv.com/delaware</Link></li>
            <li>Virginia - <Link href="/virginia" className="text-theme-orange hover:underline">tigonptv.com/virginia</Link></li>
            <li>Maryland - <Link href="/maryland" className="text-theme-orange hover:underline">tigonptv.com/maryland</Link></li>
            <li>New York - <Link href="/new-york" className="text-theme-orange hover:underline">tigonptv.com/new-york</Link></li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            What to Expect at a TIGON Dealership
          </h2>

          <h4 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
            Full Inventory Display
          </h4>
          <p className="mb-4">
            Our physical showrooms feature complete lineups of <Link href="/denago" className="text-theme-orange hover:underline">DENAGO</Link> and <Link href="/evolution" className="text-theme-orange hover:underline">EVOLUTION</Link> personal transportation vehicles. See, touch, and test drive multiple models to find your perfect match.
          </p>

          <h4 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
            Expert Consultation
          </h4>
          <p className="mb-4">
            Our NEV specialists understand local regulations and can help you select the right vehicle for your Pennsylvania, New Jersey, Delaware, or Virginia community. We provide guidance on street-legal requirements, insurance, and registration.
          </p>

          <h4 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
            On-Site Service Departments
          </h4>
          <p className="mb-4">
            Most TIGON locations offer comprehensive service departments staffed by certified technicians trained on DENAGO and EVOLUTION models. From routine maintenance to warranty repairs, we keep your NEV running smoothly.
          </p>

          <h5 className="text-lg font-semibold text-gray-900 mt-6 mb-3">
            Financing and Leasing Services
          </h5>
          <p className="mb-4">
            Every TIGON dealership provides access to competitive <Link href="/blog/lease-neighborhood-electric-vehicle-options" className="text-theme-orange hover:underline">financing and leasing options</Link>. Our finance teams work with multiple lenders to secure the best rates for qualified buyers across all credit levels.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            How to Choose the Right Dealership for You
          </h2>
          <p className="mb-4">
            Consider these factors when selecting your TIGON location:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Proximity:</strong> Choose a location convenient for test drives and future service visits</li>
            <li><strong>Inventory:</strong> Call ahead to ensure your preferred models are in stock</li>
            <li><strong>Service Hours:</strong> Verify service department hours align with your schedule</li>
            <li><strong>Online vs. In-Person:</strong> Decide if you prefer showroom experience or online convenience</li>
          </ul>

          <h6 className="text-base font-semibold text-gray-900 mt-6 mb-3">
            Schedule Your Visit Today
          </h6>
          <p className="mb-4">
            Ready to experience TIGON's personal transportation vehicle expertise? <Link href="/contact" className="text-theme-orange hover:underline">Contact your nearest location</Link> to schedule a test drive, ask questions, or explore our complete <Link href="/inventory" className="text-theme-orange hover:underline">NEV inventory</Link>.
          </p>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/blog/best-neighborhood-electric-vehicles-city-commuting" className="p-4 border border-gray-200 rounded-lg hover:border-theme-orange transition-colors">
              <h4 className="font-semibold text-theme-primary hover:text-theme-orange mb-2">
                What are the best personal transportation vehicles for city commuting?
              </h4>
              <p className="text-sm text-gray-600">Discover the top PTV models for urban driving</p>
            </Link>
            <Link href="/blog/neighborhood-electric-vehicle-price-range-cost" className="p-4 border border-gray-200 rounded-lg hover:border-theme-orange transition-colors">
              <h4 className="font-semibold text-theme-primary hover:text-theme-orange mb-2">
                What is the average price range for new personal transportation vehicles?
              </h4>
              <p className="text-sm text-gray-600">2025 NEV pricing guide and cost breakdown</p>
            </Link>
          </div>
        </div>

        <div className="mt-12 p-8 bg-gradient-to-r from-theme-primary to-blue-700 text-white rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4">Find Your Nearest TIGON Location</h3>
          <p className="mb-6">30 locations nationwide ready to serve you</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/showroom">
              <Button size="lg" className="bg-theme-orange hover:opacity-90 text-white">
                <MapPin className="w-4 h-4 mr-2" />
                View All Locations
              </Button>
            </Link>
            <a href="tel:18448446638">
              <Button size="lg" variant="outline" className="bg-white text-theme-primary hover:bg-gray-100">
                <Phone className="w-4 h-4 mr-2" />
                Call 1-844-844-6638
              </Button>
            </a>
          </div>
        </div>
      </article>
    </div>
  );
}
