import { Link } from "wouter";
import { Calendar, ArrowLeft, Minimize2, Home, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import { getBlogPostBySlug } from "@/data/blogPosts";
import { blogImages } from "@/data/blogImages";

export default function CompactPTVs() {
  const post = getBlogPostBySlug("compact-personal-transportation-vehicles");
  if (!post) return null;

  return (
    <div className="min-h-screen bg-white">
      <SEOHead 
        title={post.seoTitle}
        description={post.metaDescription}
        keywords="compact personal transportation vehicles, small PTVs, city PTVs, easy storage PTVs, urban electric vehicles, apartment-friendly PTVs, space-saving PTVs"
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
            City living and compact spaces demand smart transportation solutions. Compact personal transportation vehicles offer the perfect balance of functionality and space efficiency, fitting easily in small garages, storage areas, and tight parking spaces. Whether you live in <Link href="/new-york" className="text-theme-orange hover:underline">New York</Link>, <Link href="/california" className="text-theme-orange hover:underline">California</Link>, or any urban area, compact PTVs make electric mobility accessible.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Benefits of Compact Personal Transportation Vehicles
          </h2>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Easy Garage Storage
          </h3>
          <p className="mb-4">
            Compact PTVs fit comfortably in standard single-car garages alongside other vehicles, tools, and storage:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Typical compact PTV dimensions: 8-10 feet long, 4-5 feet wide</li>
            <li>Fits in standard 12x20 foot single garage</li>
            <li>Room remaining for workbench, storage, and other items</li>
            <li>Many fit in oversized storage sheds</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Excellent Maneuverability
          </h3>
          <p className="mb-4">
            Compact personal transportation vehicles excel in tight spaces with tight turning radius and easy handling that larger vehicles can't match.
          </p>

          <h4 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
            Urban Driving Advantages
          </h4>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Navigate narrow streets and alleys</li>
            <li>Easy parallel parking in tight spots</li>
            <li>Maneuver through crowded areas safely</li>
            <li>Access paths too narrow for cars</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Lower Operating Costs
          </h3>
          <p className="mb-4">
            Smaller PTVs typically offer even lower operating costs than larger models:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Lower purchase price entry point</li>
            <li>Reduced electricity consumption per charge</li>
            <li>Less expensive replacement parts</li>
            <li>Lower insurance premiums</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Best Compact Personal Transportation Vehicles
          </h2>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            DENAGO EV Nomad - Ultimate Compact PTV
          </h3>
          <p className="mb-4">
            The <Link href="/vehicles/denago-ev-nomad" className="text-theme-orange hover:underline">DENAGO EV Nomad</Link> sets the standard for compact personal transportation with its space-efficient design that doesn't sacrifice comfort or capability.
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Compact footprint ideal for small garages</li>
            <li>Full-size adult seating comfort</li>
            <li>Excellent range for size class</li>
            <li>Quality construction and features</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            EVOLUTION Classic 2 Plus - Compact Classic
          </h3>
          <p className="mb-4">
            The <Link href="/vehicles/evolution-classic-2-plus" className="text-theme-orange hover:underline">EVOLUTION Classic 2 Plus</Link> brings traditional styling to a compact package, perfect for couples and individuals seeking space-efficient transportation.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            EVOLUTION D5 Ranger 2+2 - Compact Sport
          </h3>
          <p className="mb-4">
            The <Link href="/vehicles/evolution-d5-ranger-2-2" className="text-theme-orange hover:underline">EVOLUTION D5 Ranger 2+2</Link> offers compact dimensions with occasional rear seating for flexibility when you need to bring guests.
          </p>

          <h5 className="text-lg font-semibold text-gray-900 mt-6 mb-3">
            Comparing Compact PTV Dimensions
          </h5>
          <p className="mb-4">
            When storage space is at a premium, every inch matters. Compare compact models by overall dimensions to find the perfect fit for your space.
          </p>

          <h6 className="text-base font-semibold text-gray-900 mt-4 mb-2">
            Measuring Your Storage Space
          </h6>
          <p className="mb-6">
            Before purchasing, measure your available storage space including door clearance height and width. TIGON's team can help you find a PTV that fits perfectly.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Compact PTVs for City Living
          </h2>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Apartment and Condo Friendly
          </h3>
          <p className="mb-4">
            Many apartment complexes and condominiums allow compact PTVs in designated parking areas or personal storage spaces. Their small footprint makes them ideal for:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Underground parking garages</li>
            <li>Covered parking spaces</li>
            <li>Secure storage areas</li>
            <li>Community charging stations</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Perfect for Daily Commuting
          </h3>
          <p className="mb-4">
            Compact PTVs excel for <Link href="/blog/daily-commuter-personal-transportation-vehicles" className="text-theme-orange hover:underline">daily commuting</Link> in urban and suburban environments. Their size makes navigation and parking effortless.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Ideal for Retirement Communities
          </h3>
          <p className="mb-4">
            <Link href="/blog/personal-transportation-vehicles-for-seniors" className="text-theme-orange hover:underline">Senior-friendly compact PTVs</Link> offer easy operation and storage for active adults in planned communities with limited garage space.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Compact vs. Full-Size PTV Considerations
          </h2>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            When to Choose Compact
          </h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Limited storage space available</li>
            <li>Primarily 1-2 passengers</li>
            <li>Urban/city driving focus</li>
            <li>Budget-conscious purchase</li>
            <li>Easy maneuverability priority</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            When Full-Size Makes Sense
          </h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Regular family transportation needs</li>
            <li>Cargo and utility requirements</li>
            <li>Ample storage space available</li>
            <li>Extended range priorities</li>
          </ul>
        </div>

        <div className="mt-12 p-8 bg-gradient-to-r from-theme-primary to-blue-700 text-white rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4">Find Your Perfect Compact PTV</h3>
          <p className="mb-6">Discover space-efficient personal transportation vehicles ideal for city living</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/inventory">
              <Button size="lg" className="bg-theme-orange hover:opacity-90 text-white">
                <Minimize2 className="w-4 h-4 mr-2" />
                View Compact PTVs
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="bg-white text-theme-primary hover:bg-gray-100">
                <Phone className="w-4 h-4 mr-2" />
                Size Consultation
              </Button>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
