import { Link } from "wouter";
import { Calendar, ArrowLeft, Palette, Wrench, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import { getBlogPostBySlug } from "@/data/blogPosts";
const heroImage = "/attached_assets/TIGON%20Personal%20Transportation%20Vehicles%20Premier%20PTV%20Dealership%20-%20PTV_1764176674271.jpeg";

export default function CustomizablePTVs() {
  const post = getBlogPostBySlug("customizable-personal-transportation-vehicles");
  if (!post) return null;

  return (
    <div className="min-h-screen bg-white">
      <SEOHead 
        title={post.seoTitle}
        description={post.metaDescription}
        keywords="customizable personal transportation vehicles, custom PTVs, PTV accessories, personalized electric vehicles, custom DENAGO, custom EVOLUTION, PTV upgrades"
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
            Your personal transportation vehicle should reflect your unique style and meet your specific needs. From custom colors and accessories to performance upgrades and specialty configurations, today's PTVs offer extensive customization options. TIGON helps buyers across all 50 states, Canada, and Mexico create personalized vehicles that stand out.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Color and Appearance Customization
          </h2>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Custom Paint Colors
          </h3>
          <p className="mb-4">
            Move beyond standard color options with custom paint finishes:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Factory custom colors from expanded palettes</li>
            <li>Two-tone color combinations</li>
            <li>Metallic and pearl finishes</li>
            <li>Matte and satin options</li>
            <li>Custom color matching to specifications</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Wheel and Tire Options
          </h3>
          <p className="mb-4">
            Customize your PTV's stance and capability with wheel and tire upgrades:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Alloy wheel designs and finishes</li>
            <li>Lifted suspension packages</li>
            <li>All-terrain tire options</li>
            <li>Low-profile street tire packages</li>
          </ul>

          <h4 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
            Graphics and Decals
          </h4>
          <p className="mb-4">
            Add personality with custom graphics, stripes, logos, and vinyl wraps that make your PTV unique.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Interior Customization Options
          </h2>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Seating Upgrades
          </h3>
          <p className="mb-4">
            Upgrade your interior comfort and style:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Premium leather or vinyl upholstery</li>
            <li>Custom color seat covers</li>
            <li>Contrast stitching options</li>
            <li>Heated seat packages</li>
            <li>Enhanced cushioning and support</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Dashboard and Controls
          </h3>
          <p className="mb-4">
            Personalize your cockpit with upgraded controls and displays:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Digital instrument clusters</li>
            <li>Custom steering wheels</li>
            <li>Upgraded audio systems</li>
            <li>USB and charging port additions</li>
          </ul>

          <h5 className="text-lg font-semibold text-gray-900 mt-6 mb-3">
            Audio and Entertainment
          </h5>
          <p className="mb-4">
            Enhance your riding experience with premium audio upgrades including Bluetooth speakers, amplifiers, and subwoofers.
          </p>

          <h6 className="text-base font-semibold text-gray-900 mt-4 mb-2">
            LED Lighting Packages
          </h6>
          <p className="mb-6">
            Add LED underbody lighting, accent lights, and upgraded headlight assemblies for enhanced visibility and style.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Performance Upgrades
          </h2>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Battery Upgrades
          </h3>
          <p className="mb-4">
            Boost your PTV's range and performance with battery upgrades:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Lithium-ion conversion kits</li>
            <li>Extended capacity battery packs</li>
            <li>High-performance cells for better discharge rates</li>
            <li>See our <Link href="/blog/high-performance-personal-transportation-vehicles" className="text-theme-orange hover:underline">high-performance PTV guide</Link> for details</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Motor and Controller Upgrades
          </h3>
          <p className="mb-4">
            Enhance power and acceleration with drivetrain upgrades for demanding applications.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Suspension Enhancements
          </h3>
          <p className="mb-4">
            Improve ride quality and capability with suspension upgrades, essential for <Link href="/blog/off-road-personal-transportation-vehicles" className="text-theme-orange hover:underline">off-road use</Link>.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Functional Accessories
          </h2>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Weather Protection
          </h3>
          <p className="mb-4">
            Keep comfortable in all conditions with enclosure options:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Full enclosure kits with doors and windows</li>
            <li>Soft enclosures for seasonal use</li>
            <li>Golf-style rain curtains</li>
            <li>Heater packages for cold weather</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Utility Accessories
          </h3>
          <p className="mb-4">
            Add functionality with practical accessories:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Rear cargo boxes and beds</li>
            <li>Roof racks and carriers</li>
            <li>Tow hitches and trailers</li>
            <li>Tool and equipment mounts</li>
            <li>Cooler holders and storage solutions</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Safety Accessories
          </h3>
          <p className="mb-4">
            Enhance safety with additional equipment beyond <Link href="/blog/street-legal-personal-transportation-vehicles" className="text-theme-orange hover:underline">street-legal requirements</Link>:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Backup cameras and sensors</li>
            <li>Additional lighting packages</li>
            <li>Horn upgrades</li>
            <li>First aid and safety kits</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Custom Build Process with TIGON
          </h2>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            How to Order Custom PTVs
          </h3>
          <p className="mb-4">
            TIGON makes custom ordering straightforward:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Consult with our customization specialists</li>
            <li>Review available options for your chosen model</li>
            <li>Receive a detailed quote with all specifications</li>
            <li>Place your order with factory-installed upgrades</li>
            <li>Receive delivery of your personalized PTV</li>
          </ul>
        </div>

        <div className="mt-12 p-8 bg-gradient-to-r from-theme-primary to-blue-700 text-white rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4">Build Your Custom PTV</h3>
          <p className="mb-6">Work with our team to create a personalized personal transportation vehicle</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/showroom">
              <Button size="lg" className="bg-theme-orange hover:opacity-90 text-white">
                <Palette className="w-4 h-4 mr-2" />
                Explore Options
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="bg-white text-theme-primary hover:bg-gray-100">
                <Phone className="w-4 h-4 mr-2" />
                Custom Consultation
              </Button>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
