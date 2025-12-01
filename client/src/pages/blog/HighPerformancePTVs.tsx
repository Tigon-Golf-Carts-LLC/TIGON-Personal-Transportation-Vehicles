import { Link } from "wouter";
import { Calendar, ArrowLeft, Zap, Gauge, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import { getBlogPostBySlug } from "@/data/blogPosts";
import { blogImages } from "@/data/blogImages";

export default function HighPerformancePTVs() {
  const post = getBlogPostBySlug("high-performance-personal-transportation-vehicles");
  if (!post) return null;

  return (
    <div className="min-h-screen bg-white">
      <SEOHead 
        title={post.seoTitle}
        description={post.metaDescription}
        keywords="high performance PTVs, powerful personal transportation vehicles, extended range PTVs, fast electric vehicles, premium DENAGO, EVOLUTION performance models"
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
            For those who demand maximum capability from their personal transportation vehicle, high-performance models deliver extended range, enhanced power, and premium features. From advanced lithium battery systems to upgraded motors, these top-tier PTVs exceed expectations for performance enthusiasts across all 50 states.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            What Makes a High-Performance PTV?
          </h2>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Extended Range Capability
          </h3>
          <p className="mb-4">
            High-performance personal transportation vehicles offer significantly extended range compared to standard models:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Standard PTV Range:</strong> 25-35 miles per charge</li>
            <li><strong>High-Performance Range:</strong> 40-60+ miles per charge</li>
            <li><strong>Premium Lithium Systems:</strong> Extended cycle life and consistent power</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Enhanced Motor Power
          </h3>
          <p className="mb-4">
            Performance models feature upgraded motors that deliver:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Improved acceleration and hill-climbing ability</li>
            <li>Better performance under load (passengers and cargo)</li>
            <li>Smoother power delivery at all speeds</li>
            <li>Enhanced durability for demanding use</li>
          </ul>

          <h4 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
            Advanced Battery Technology
          </h4>
          <p className="mb-4">
            High-performance PTVs utilize advanced lithium-ion battery systems offering:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Faster charging times (2-4 hours vs 8-12 hours)</li>
            <li>Longer overall lifespan (5-7 years)</li>
            <li>Lighter weight for improved efficiency</li>
            <li>Consistent power output throughout discharge cycle</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Top High-Performance Personal Transportation Vehicles
          </h2>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            EVOLUTION D6 Max GT Series - Peak Performance
          </h3>
          <p className="mb-4">
            The <Link href="/vehicles/evolution-d6-max-gt4" className="text-theme-orange hover:underline">EVOLUTION D6 Max GT 4</Link> represents the pinnacle of PTV performance with advanced powertrain technology, premium features, and exceptional build quality.
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Premium lithium battery system with extended range</li>
            <li>High-torque motor for superior performance</li>
            <li>Advanced suspension for smooth handling</li>
            <li>Premium interior appointments</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            DENAGO EV Rover XXL - Maximum Power & Utility
          </h3>
          <p className="mb-4">
            The <Link href="/vehicles/denago-ev-rover-xxl" className="text-theme-orange hover:underline">DENAGO EV Rover XXL</Link> combines high performance with serious utility capability, perfect for demanding commercial and recreational applications.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            EVOLUTION D5 Maverick Performance Models
          </h3>
          <p className="mb-4">
            The Maverick series brings sport performance to personal transportation:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><Link href="/vehicles/evolution-d5-maverick-4" className="text-theme-orange hover:underline">D5 Maverick 4</Link> - Aggressive sport styling</li>
            <li><Link href="/vehicles/evolution-d5-maverick-4-plus" className="text-theme-orange hover:underline">D5 Maverick 4 Plus</Link> - Enhanced performance package</li>
            <li><Link href="/vehicles/evolution-d5-maverick-6-plus" className="text-theme-orange hover:underline">D5 Maverick 6 Plus</Link> - Six-passenger performance</li>
          </ul>

          <h5 className="text-lg font-semibold text-gray-900 mt-6 mb-3">
            Performance Upgrades and Options
          </h5>
          <p className="mb-4">
            Many PTVs can be upgraded with performance enhancements including lithium battery conversions, motor upgrades, and enhanced suspension systems. Our <Link href="/blog/customizable-personal-transportation-vehicles" className="text-theme-orange hover:underline">customization guide</Link> covers available upgrade options.
          </p>

          <h6 className="text-base font-semibold text-gray-900 mt-4 mb-2">
            Factory Performance Packages
          </h6>
          <p className="mb-6">
            TIGON offers factory-installed performance packages that maintain warranty coverage while delivering enhanced capabilities.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Performance Features Comparison
          </h2>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Range Comparison
          </h3>
          <p className="mb-4">
            Extended range matters for property owners, community cruising, and practical daily use. High-performance PTVs deliver 50% or more additional range compared to standard models.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Power and Torque
          </h3>
          <p className="mb-4">
            Enhanced motor systems provide improved performance characteristics:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Better acceleration from standstill</li>
            <li>Improved hill-climbing with full passenger loads</li>
            <li>Consistent speed maintenance on inclines</li>
            <li>Enhanced towing capability for accessories</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Premium Suspension Systems
          </h3>
          <p className="mb-4">
            High-performance PTVs feature upgraded suspension for better handling and comfort, especially important for <Link href="/blog/off-road-personal-transportation-vehicles" className="text-theme-orange hover:underline">off-road capable models</Link>.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Who Benefits from High-Performance PTVs?
          </h2>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Large Property Owners
          </h3>
          <p className="mb-4">
            Extended range is essential for farms, ranches, and large estates where daily driving distances exceed standard PTV capabilities.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Commercial Applications
          </h3>
          <p className="mb-4">
            Businesses relying on PTVs for delivery, security, or maintenance operations benefit from the reliability and extended range of high-performance models.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Demanding Terrain
          </h3>
          <p className="mb-4">
            Hilly communities and challenging terrain require the extra power that high-performance PTVs deliver consistently.
          </p>
        </div>

        <div className="mt-12 p-8 bg-gradient-to-r from-theme-primary to-blue-700 text-white rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4">Experience High-Performance PTVs</h3>
          <p className="mb-6">Discover personal transportation vehicles with power and range to exceed your expectations</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/inventory">
              <Button size="lg" className="bg-theme-orange hover:opacity-90 text-white">
                <Zap className="w-4 h-4 mr-2" />
                View Performance Models
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="bg-white text-theme-primary hover:bg-gray-100">
                <Phone className="w-4 h-4 mr-2" />
                Performance Consultation
              </Button>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
