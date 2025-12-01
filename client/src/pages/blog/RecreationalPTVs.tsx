import { Link } from "wouter";
import { Calendar, ArrowLeft, Palmtree, Smile, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import { getBlogPostBySlug } from "@/data/blogPosts";
const heroImage = "/attached_assets/TIGON%20Personal%20Transportation%20Vehicles%20Premier%20PTV%20Dealership%20-%20PTV_1764176674271.jpeg";

export default function RecreationalPTVs() {
  const post = getBlogPostBySlug("recreational-personal-transportation-vehicles");
  if (!post) return null;

  return (
    <div className="min-h-screen bg-white">
      <SEOHead 
        title={post.seoTitle}
        description={post.metaDescription}
        keywords="recreational personal transportation vehicles, fun PTVs, beach PTVs, golf PTVs, resort vehicles, vacation electric vehicles, weekend PTVs"
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
            Personal transportation vehicles bring back the fun in getting around. Whether you're cruising beach towns in <Link href="/florida" className="text-theme-orange hover:underline">Florida</Link>, exploring resort communities in <Link href="/arizona" className="text-theme-orange hover:underline">Arizona</Link>, or enjoying weekend adventures anywhere in North America, recreational PTVs deliver smiles with every mile.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Where to Enjoy Recreational PTVs
          </h2>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Beach Communities
          </h3>
          <p className="mb-4">
            Coastal towns across America embrace personal transportation vehicles for beach-going fun:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Navigate to the beach without parking hassles</li>
            <li>Cruise waterfront boardwalks and promenades</li>
            <li>Access beach restaurants and shops easily</li>
            <li>Perfect for vacation rentals and second homes</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Golf and Country Clubs
          </h3>
          <p className="mb-4">
            PTVs are the vehicle of choice in golf communities:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Course-to-clubhouse transportation</li>
            <li>Navigate the entire community</li>
            <li>Street-legal models for public road access</li>
            <li>Perfect fit in golf community culture</li>
          </ul>

          <h4 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
            Resort Communities
          </h4>
          <p className="mb-4">
            Master-planned resort communities increasingly feature PTV-friendly infrastructure for resident enjoyment.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            RV Parks and Campgrounds
          </h3>
          <p className="mb-4">
            PTVs make the perfect companion vehicle for RV enthusiasts:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Explore campground amenities without driving the RV</li>
            <li>Quick trips to camp stores and facilities</li>
            <li>Easy to tow behind motorhomes</li>
            <li>Fun transportation for the whole family</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Best Recreational Personal Transportation Vehicles
          </h2>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Multi-Passenger Fun: EVOLUTION D5 Maverick 6
          </h3>
          <p className="mb-4">
            The <Link href="/vehicles/evolution-d5-maverick-6" className="text-theme-orange hover:underline">EVOLUTION D5 Maverick 6</Link> brings sport styling and six-passenger capacity for group adventures.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Classic Style: EVOLUTION Classic 4 Plus
          </h3>
          <p className="mb-4">
            The <Link href="/vehicles/evolution-classic-4-plus" className="text-theme-orange hover:underline">EVOLUTION Classic 4 Plus</Link> offers timeless golf cart styling with modern features for relaxed cruising.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Adventure Ready: DENAGO EV Rover XL
          </h3>
          <p className="mb-4">
            The <Link href="/vehicles/denago-ev-rover-xl" className="text-theme-orange hover:underline">DENAGO EV Rover XL</Link> combines recreational fun with utility for beach gear, coolers, and outdoor equipment.
          </p>

          <h5 className="text-lg font-semibold text-gray-900 mt-6 mb-3">
            Off-Road Recreation
          </h5>
          <p className="mb-4">
            For trail adventures and rugged terrain, explore our <Link href="/blog/off-road-personal-transportation-vehicles" className="text-theme-orange hover:underline">off-road capable PTVs</Link> with enhanced suspension and all-terrain tires.
          </p>

          <h6 className="text-base font-semibold text-gray-900 mt-4 mb-2">
            Family-Friendly Options
          </h6>
          <p className="mb-6">
            <Link href="/blog/family-friendly-personal-transportation-vehicles" className="text-theme-orange hover:underline">Family PTVs</Link> bring multi-generational fun with safety features for all ages.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Recreational PTV Features
          </h2>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Audio Systems for Cruising
          </h3>
          <p className="mb-4">
            Enhance your recreational experience with premium audio options featuring Bluetooth connectivity, quality speakers, and easy controls.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Comfort for Long Rides
          </h3>
          <p className="mb-4">
            Recreational PTVs feature comfortable seating, smooth suspension, and ergonomic design for extended cruising enjoyment.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Storage for Gear
          </h3>
          <p className="mb-4">
            Bring along beach chairs, coolers, golf bags, and outdoor equipment with ample storage and cargo options.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            PTV Rentals for Recreation
          </h2>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Try Before You Buy
          </h3>
          <p className="mb-4">
            TIGON offers <Link href="/rentals" className="text-theme-orange hover:underline">PTV rental programs</Link> that let you experience the recreational joy of personal transportation vehicles before purchasing.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Event and Vacation Rentals
          </h3>
          <p className="mb-4">
            Perfect for special occasions, family gatherings, or vacation getaways when you want PTV fun without long-term commitment.
          </p>
        </div>

        <div className="mt-12 p-8 bg-gradient-to-r from-orange-500 to-orange-700 text-white rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4">Start Having Fun Today</h3>
          <p className="mb-6">Find the perfect recreational personal transportation vehicle for your adventures</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/inventory">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
                <Palmtree className="w-4 h-4 mr-2" />
                Browse Fun PTVs
              </Button>
            </Link>
            <Link href="/rentals">
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-orange-600">
                <Phone className="w-4 h-4 mr-2" />
                Rental Options
              </Button>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
