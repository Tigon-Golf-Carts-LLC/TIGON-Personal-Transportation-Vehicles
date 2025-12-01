import { Link } from "wouter";
import { Calendar, ArrowLeft, Crown, Sparkles, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import { getBlogPostBySlug } from "@/data/blogPosts";
import { blogImages } from "@/data/blogImages";

export default function LuxuryPTVs() {
  const post = getBlogPostBySlug("luxury-personal-transportation-vehicles");
  if (!post) return null;

  return (
    <div className="min-h-screen bg-white">
      <SEOHead 
        title={post.seoTitle}
        description={post.metaDescription}
        keywords="luxury personal transportation vehicles, premium PTVs, high-end electric vehicles, luxury DENAGO, premium EVOLUTION, leather PTV, custom PTVs"
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
            For discerning buyers who appreciate the finer things, luxury personal transportation vehicles offer premium materials, advanced technology, and sophisticated design. These top-tier PTVs deliver an elevated riding experience that rivals luxury automobiles, serving prestigious communities across <Link href="/florida" className="text-theme-orange hover:underline">Florida</Link>, <Link href="/california" className="text-theme-orange hover:underline">California</Link>, <Link href="/arizona" className="text-theme-orange hover:underline">Arizona</Link>, and beyond.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            What Defines a Luxury PTV?
          </h2>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Premium Interior Materials
          </h3>
          <p className="mb-4">
            Luxury personal transportation vehicles feature interior appointments that exceed standard expectations:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Premium Leather:</strong> Genuine or high-quality synthetic leather seating</li>
            <li><strong>Wood Trim:</strong> Authentic wood or premium woodgrain accents</li>
            <li><strong>Brushed Metal:</strong> Aluminum and chrome detail work</li>
            <li><strong>Custom Stitching:</strong> Contrast stitching and premium upholstery</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Advanced Technology Features
          </h3>
          <p className="mb-4">
            Technology distinguishes luxury PTVs from standard models:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Digital touchscreen displays for controls and information</li>
            <li>Premium audio systems with multiple speakers</li>
            <li>Bluetooth connectivity for music and calls</li>
            <li>USB charging ports for all passengers</li>
            <li>LED ambient lighting with color options</li>
          </ul>

          <h4 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
            Comfort and Convenience
          </h4>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Multi-adjustable seating positions</li>
            <li>Enhanced suspension for smooth rides</li>
            <li>Climate-controlled enclosure options</li>
            <li>Heated seats (select models)</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Top Luxury Personal Transportation Vehicles
          </h2>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            EVOLUTION D6 Max GT Series - Flagship Luxury
          </h3>
          <p className="mb-4">
            The <Link href="/vehicles/evolution-d6-max-gt4" className="text-theme-orange hover:underline">EVOLUTION D6 Max GT 4</Link> and <Link href="/vehicles/evolution-d6-max-gt6" className="text-theme-orange hover:underline">D6 Max GT 6</Link> represent the pinnacle of personal transportation vehicle luxury with premium appointments throughout.
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Premium leather seating surfaces</li>
            <li>Digital instrument cluster</li>
            <li>Premium audio system</li>
            <li>LED lighting package</li>
            <li>Advanced lithium battery technology</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            EVOLUTION Classic Pro Series - Refined Elegance
          </h3>
          <p className="mb-4">
            The <Link href="/vehicles/evolution-classic-4-pro" className="text-theme-orange hover:underline">EVOLUTION Classic 4 Pro</Link> brings understated luxury to the traditional PTV design, perfect for buyers who appreciate classic styling with premium upgrades.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            DENAGO Premium Configurations
          </h3>
          <p className="mb-4">
            <Link href="/denago" className="text-theme-orange hover:underline">DENAGO</Link> offers premium configuration options across their lineup that elevate any model to luxury status with upgraded interiors and enhanced features.
          </p>

          <h5 className="text-lg font-semibold text-gray-900 mt-6 mb-3">
            Custom Luxury Options
          </h5>
          <p className="mb-4">
            TIGON offers <Link href="/blog/customizable-personal-transportation-vehicles" className="text-theme-orange hover:underline">custom configuration options</Link> that allow buyers to create bespoke luxury PTVs tailored to their exact preferences.
          </p>

          <h6 className="text-base font-semibold text-gray-900 mt-4 mb-2">
            Popular Luxury Upgrades
          </h6>
          <p className="mb-6">
            Custom paint colors, upgraded audio, premium enclosures, and unique accessories transform any PTV into a personalized luxury vehicle.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Luxury PTV Ownership Experience
          </h2>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            White Glove Delivery Service
          </h3>
          <p className="mb-4">
            Luxury PTV purchases include enhanced delivery service with detailed orientation, accessory installation, and personalized setup for your specific needs.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Extended Warranty Coverage
          </h3>
          <p className="mb-4">
            Protect your investment with comprehensive <Link href="/blog/neighborhood-electric-vehicle-warranty-coverage-comparison" className="text-theme-orange hover:underline">warranty coverage</Link> that includes premium components and features.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Financing for Luxury Models
          </h3>
          <p className="mb-4">
            <Link href="/blog/personal-transportation-vehicles-financing-options" className="text-theme-orange hover:underline">Flexible financing options</Link> make luxury PTV ownership accessible with competitive rates and flexible terms.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Where Luxury PTVs Shine
          </h2>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Exclusive Communities
          </h3>
          <p className="mb-4">
            Upscale planned communities and private neighborhoods appreciate the sophistication luxury PTVs bring to local transportation.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Golf and Country Clubs
          </h3>
          <p className="mb-4">
            Luxury personal transportation vehicles complement the lifestyle of premier golf and country club members.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Resort Properties
          </h3>
          <p className="mb-4">
            Vacation homes and resort properties deserve the refined transportation that luxury PTVs provide.
          </p>
        </div>

        <div className="mt-12 p-8 bg-gradient-to-r from-gray-900 to-gray-700 text-white rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4">Experience Luxury PTVs</h3>
          <p className="mb-6">Discover premium personal transportation vehicles with sophisticated style and comfort</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/showroom">
              <Button size="lg" className="bg-theme-orange hover:opacity-90 text-white">
                <Crown className="w-4 h-4 mr-2" />
                View Luxury Models
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="bg-white text-gray-900 hover:bg-gray-100">
                <Phone className="w-4 h-4 mr-2" />
                Luxury Consultation
              </Button>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
