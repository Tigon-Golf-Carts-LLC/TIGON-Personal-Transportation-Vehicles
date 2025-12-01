import { Link } from "wouter";
import { Calendar, ArrowLeft, Mountain, Compass, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import { getBlogPostBySlug } from "@/data/blogPosts";
const heroImage = "/attached_assets/TIGON%20Personal%20Transportation%20Vehicles%20Premier%20PTV%20Dealership%20-%20PTV_1764176674271.jpeg";

export default function OffRoadPTVs() {
  const post = getBlogPostBySlug("off-road-personal-transportation-vehicles");
  if (!post) return null;

  return (
    <div className="min-h-screen bg-white">
      <SEOHead 
        title={post.seoTitle}
        description={post.metaDescription}
        keywords="off-road personal transportation vehicles, rugged PTVs, all-terrain electric vehicles, trail PTVs, farm PTVs, hunting electric vehicles, adventure PTVs"
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
            When your adventures take you beyond paved roads, off-road capable personal transportation vehicles deliver the rugged performance you need. From farm and ranch work to hunting trails and outdoor exploration, these enhanced PTVs tackle challenging terrain while maintaining the electric efficiency and low operating costs you expect.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Off-Road PTV Capabilities
          </h2>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Enhanced Suspension Systems
          </h3>
          <p className="mb-4">
            Off-road personal transportation vehicles feature upgraded suspension for rough terrain:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Increased suspension travel for obstacle clearance</li>
            <li>Heavy-duty shock absorbers for rough conditions</li>
            <li>Lifted configurations for additional ground clearance</li>
            <li>Reinforced components for durability</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            All-Terrain Tires
          </h3>
          <p className="mb-4">
            Specialized tire packages provide traction on varied surfaces:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Aggressive tread patterns for mud and dirt</li>
            <li>Larger tire sizes for improved ground clearance</li>
            <li>Reinforced sidewalls for puncture resistance</li>
            <li>Options for specific terrain types (sand, rock, trail)</li>
          </ul>

          <h4 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
            Rugged Construction
          </h4>
          <p className="mb-4">
            Off-road PTVs feature strengthened frames, protected undercarriages, and heavy-duty components designed for demanding use.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Best Off-Road Personal Transportation Vehicles
          </h2>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            EVOLUTION Forester Series
          </h3>
          <p className="mb-4">
            The <Link href="/vehicles/evolution-forester-4-plus" className="text-theme-orange hover:underline">EVOLUTION Forester 4 Plus</Link> and <Link href="/vehicles/evolution-forester-6-plus" className="text-theme-orange hover:underline">Forester 6 Plus</Link> are purpose-built for off-road adventure with enhanced ground clearance, rugged tires, and durable construction.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            DENAGO EV Rover XL
          </h3>
          <p className="mb-4">
            The <Link href="/vehicles/denago-ev-rover-xl" className="text-theme-orange hover:underline">DENAGO EV Rover XL</Link> combines utility capability with off-road options, perfect for property owners needing a versatile work vehicle.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            DENAGO EV Rover XXL
          </h3>
          <p className="mb-4">
            The <Link href="/vehicles/denago-ev-rover-xxl" className="text-theme-orange hover:underline">DENAGO EV Rover XXL</Link> offers maximum cargo capacity paired with available off-road packages for serious work in challenging environments.
          </p>

          <h5 className="text-lg font-semibold text-gray-900 mt-6 mb-3">
            Off-Road Lift Kits
          </h5>
          <p className="mb-4">
            Many PTVs can be upgraded with lift kits and off-road packages through our <Link href="/blog/customizable-personal-transportation-vehicles" className="text-theme-orange hover:underline">customization program</Link>.
          </p>

          <h6 className="text-base font-semibold text-gray-900 mt-4 mb-2">
            Factory vs. Aftermarket Upgrades
          </h6>
          <p className="mb-6">
            Factory-installed off-road packages maintain warranty coverage, while aftermarket upgrades offer additional customization options.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Off-Road PTV Applications
          </h2>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Farm and Ranch Use
          </h3>
          <p className="mb-4">
            Agricultural operations benefit from quiet electric operation and rugged capability:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Check livestock without disturbing animals</li>
            <li>Navigate between fields and buildings</li>
            <li>Transport tools, feed, and supplies</li>
            <li>Low operating costs for daily use</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Hunting and Outdoor Recreation
          </h3>
          <p className="mb-4">
            Hunters appreciate the quiet operation that doesn't spook game:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Silent approach to hunting areas</li>
            <li>Transport gear and harvested game</li>
            <li>Navigate hunting trails and fire roads</li>
            <li>No fuel odors to alert wildlife</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Large Property Management
          </h3>
          <p className="mb-4">
            Property owners with acreage use off-road PTVs for efficient land management and maintenance access.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Trail Exploration
          </h3>
          <p className="mb-4">
            <Link href="/blog/recreational-personal-transportation-vehicles" className="text-theme-orange hover:underline">Recreational users</Link> explore trails, parks, and natural areas with off-road capable PTVs.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Choosing the Right Off-Road PTV
          </h2>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Terrain Considerations
          </h3>
          <p className="mb-4">
            Match your PTV to your specific terrain challenges:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Hills and slopes:</strong> Prioritize power and traction</li>
            <li><strong>Rocky terrain:</strong> Focus on ground clearance and durability</li>
            <li><strong>Mud and soft ground:</strong> Choose appropriate tire tread</li>
            <li><strong>Sandy areas:</strong> Consider paddle tires and wider stance</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Passenger and Cargo Needs
          </h3>
          <p className="mb-4">
            Balance off-road capability with practical capacity requirements. Larger utility beds may be essential for work applications.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Street-Legal Considerations
          </h3>
          <p className="mb-4">
            Many off-road PTVs remain <Link href="/blog/street-legal-personal-transportation-vehicles" className="text-theme-orange hover:underline">street-legal</Link>, allowing travel on public roads to reach trail access points.
          </p>
        </div>

        <div className="mt-12 p-8 bg-gradient-to-r from-green-700 to-green-900 text-white rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4">Ready for Adventure</h3>
          <p className="mb-6">Explore off-road capable personal transportation vehicles built for tough terrain</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/inventory">
              <Button size="lg" className="bg-theme-orange hover:opacity-90 text-white">
                <Mountain className="w-4 h-4 mr-2" />
                View Off-Road PTVs
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="bg-white text-green-700 hover:bg-gray-100">
                <Phone className="w-4 h-4 mr-2" />
                Off-Road Consultation
              </Button>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
