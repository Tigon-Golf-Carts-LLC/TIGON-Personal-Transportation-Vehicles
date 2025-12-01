import { Link } from "wouter";
import { Calendar, ArrowLeft, Zap, Leaf, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import { getBlogPostBySlug } from "@/data/blogPosts";
const heroImage = "/attached_assets/TIGON%20Personal%20Transportation%20Vehicles%20Premier%20PTV%20Dealership%20-%20PTV_1764176674271.jpeg";

export default function ElectricPTVs() {
  const post = getBlogPostBySlug("electric-personal-transportation-vehicles");
  if (!post) return null;

  return (
    <div className="min-h-screen bg-white">
      <SEOHead 
        title={post.seoTitle}
        description={post.metaDescription}
        keywords="electric personal transportation vehicles, eco-friendly PTVs, zero emission vehicles, sustainable transportation, electric DENAGO, electric EVOLUTION, green mobility"
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
            Electric personal transportation vehicles represent the future of sustainable local mobility. With zero direct emissions, quiet operation, and remarkably low operating costs, PTVs from DENAGO and EVOLUTION are helping communities across <Link href="/california" className="text-theme-orange hover:underline">California</Link>, <Link href="/florida" className="text-theme-orange hover:underline">Florida</Link>, <Link href="/arizona" className="text-theme-orange hover:underline">Arizona</Link>, and all 50 states embrace eco-friendly transportation.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Benefits of Electric Personal Transportation Vehicles
          </h2>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Zero Direct Emissions
          </h3>
          <p className="mb-4">
            Every electric personal transportation vehicle produces zero tailpipe emissions, contributing to cleaner air in your neighborhood and community. Unlike gas-powered vehicles, PTVs don't release harmful pollutants where you live and drive.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Significantly Lower Carbon Footprint
          </h3>
          <p className="mb-4">
            Even when accounting for electricity generation, electric PTVs produce a fraction of the carbon emissions compared to traditional vehicles. The environmental advantage grows larger as renewable energy sources become more prevalent.
          </p>

          <h4 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
            Environmental Impact Numbers
          </h4>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>CO2 Savings:</strong> Average PTV owner saves 4,000+ lbs of CO2 annually</li>
            <li><strong>Fuel Offset:</strong> Replaces 200+ gallons of gasoline per year</li>
            <li><strong>Noise Reduction:</strong> Near-silent operation reduces community noise pollution</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Renewable Energy Compatibility
          </h3>
          <p className="mb-4">
            Electric personal transportation vehicles can be charged using solar panels, making them truly sustainable transportation options for environmentally conscious owners.
          </p>

          <h5 className="text-lg font-semibold text-gray-900 mt-6 mb-3">
            Solar Charging Options
          </h5>
          <p className="mb-4">
            Many PTV owners install small solar systems to offset their charging costs completely. A modest 2-3 kW solar array can power your personal transportation vehicle indefinitely with zero ongoing energy costs.
          </p>

          <h6 className="text-base font-semibold text-gray-900 mt-4 mb-2">
            Home Charging Made Simple
          </h6>
          <p className="mb-6">
            Standard 110V outlets can charge most PTVs overnight, and 220V connections reduce charging time to just 2-4 hours for full capacity.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Electric PTV Technology Explained
          </h2>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Advanced Battery Systems
          </h3>
          <p className="mb-4">
            Modern personal transportation vehicles use sophisticated battery technology for optimal performance and longevity:
          </p>

          <h4 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
            Lithium-Ion Battery Advantages
          </h4>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>5-7 year lifespan with proper care</li>
            <li>Fast charging capability (2-4 hours)</li>
            <li>Consistent power delivery throughout discharge</li>
            <li>Lightweight for improved efficiency</li>
            <li>Low maintenance requirements</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Electric Motor Efficiency
          </h3>
          <p className="mb-4">
            Electric motors in personal transportation vehicles operate at 85-95% efficiency, compared to 20-30% for internal combustion engines. This translates to:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>More miles per energy unit consumed</li>
            <li>Smooth, quiet acceleration</li>
            <li>Instant torque for responsive handling</li>
            <li>Minimal maintenance requirements</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Top Electric PTVs for Eco-Conscious Buyers
          </h2>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            DENAGO Electric Fleet
          </h3>
          <p className="mb-4">
            Every <Link href="/denago" className="text-theme-orange hover:underline">DENAGO personal transportation vehicle</Link> runs on 100% electric power:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><Link href="/vehicles/denago-ev-nomad" className="text-theme-orange hover:underline">DENAGO EV Nomad</Link> - Efficient compact design</li>
            <li><Link href="/vehicles/denago-ev-rover-xl" className="text-theme-orange hover:underline">DENAGO EV Rover XL</Link> - Extended range utility</li>
            <li><Link href="/vehicles/denago-ev-rover-xxl" className="text-theme-orange hover:underline">DENAGO EV Rover XXL</Link> - Maximum capacity, zero emissions</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            EVOLUTION Electric Lineup
          </h3>
          <p className="mb-4">
            <Link href="/evolution" className="text-theme-orange hover:underline">EVOLUTION</Link> offers over 30 electric personal transportation vehicle models, all featuring zero-emission electric powertrains with advanced battery technology.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Environmental Incentives for Electric PTVs
          </h2>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Federal and State Incentives
          </h3>
          <p className="mb-4">
            Many buyers qualify for <Link href="/blog/neighborhood-electric-vehicle-tax-credits-incentives" className="text-theme-orange hover:underline">tax credits and incentives</Link> when purchasing electric personal transportation vehicles. Programs vary by state, with particularly generous incentives in:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><Link href="/california" className="text-theme-orange hover:underline">California</Link> - State rebates and clean vehicle programs</li>
            <li><Link href="/colorado" className="text-theme-orange hover:underline">Colorado</Link> - Electric vehicle tax credits</li>
            <li><Link href="/new-york" className="text-theme-orange hover:underline">New York</Link> - Drive Clean rebate program</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Utility Company Programs
          </h3>
          <p className="mb-4">
            Many electric utilities offer special programs for electric vehicle owners, including discounted charging rates and time-of-use pricing that reduces costs when charging overnight.
          </p>
        </div>

        <div className="mt-12 p-8 bg-gradient-to-r from-green-600 to-green-800 text-white rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4">Go Green with Electric PTVs</h3>
          <p className="mb-6">Discover eco-friendly personal transportation vehicles and reduce your carbon footprint</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/inventory">
              <Button size="lg" className="bg-theme-orange hover:opacity-90 text-white">
                <Leaf className="w-4 h-4 mr-2" />
                Shop Electric PTVs
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="bg-white text-green-700 hover:bg-gray-100">
                <Phone className="w-4 h-4 mr-2" />
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
