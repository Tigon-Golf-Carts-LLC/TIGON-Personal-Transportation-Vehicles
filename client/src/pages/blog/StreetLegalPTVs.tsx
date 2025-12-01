import { Link } from "wouter";
import { Calendar, ArrowLeft, FileCheck, Scale, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import { getBlogPostBySlug } from "@/data/blogPosts";
const heroImage = "/attached_assets/TIGON%20Personal%20Transportation%20Vehicles%20Premier%20PTV%20Dealership%20-%20PTV_1764176674271.jpeg";

export default function StreetLegalPTVs() {
  const post = getBlogPostBySlug("street-legal-personal-transportation-vehicles");
  if (!post) return null;

  return (
    <div className="min-h-screen bg-white">
      <SEOHead 
        title={post.seoTitle}
        description={post.metaDescription}
        keywords="street legal PTVs, legal personal transportation vehicles, PTV regulations by state, DOT compliant PTVs, neighborhood electric vehicle laws, LSV regulations"
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
            Understanding street-legal requirements for personal transportation vehicles is essential before making a purchase. The good news: most states allow properly equipped PTVs on public roads with speed limits of 35 MPH or less. This comprehensive guide covers federal requirements, state-by-state regulations, and what you need to drive legally.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Federal Street-Legal Requirements for PTVs
          </h2>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            DOT Low Speed Vehicle (LSV) Standards
          </h3>
          <p className="mb-4">
            The National Highway Traffic Safety Administration (NHTSA) classifies personal transportation vehicles as Low Speed Vehicles (LSVs) when they meet specific criteria. All DENAGO and EVOLUTION models sold through TIGON comply with these federal standards.
          </p>

          <h4 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
            Required Safety Equipment
          </h4>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Headlights:</strong> DOT-approved headlamps for visibility</li>
            <li><strong>Taillights:</strong> Red rear lighting visible from 500 feet</li>
            <li><strong>Turn Signals:</strong> Front and rear turn indicators</li>
            <li><strong>Brake Lights:</strong> Illuminate when brakes are applied</li>
            <li><strong>Mirrors:</strong> Rearview mirror (side mirrors in some states)</li>
            <li><strong>Windshield:</strong> Many states require windshield and wipers</li>
            <li><strong>Seatbelts:</strong> 3-point belts for driver and passengers</li>
            <li><strong>Reflectors:</strong> Side and rear reflective markers</li>
            <li><strong>VIN:</strong> 17-character Vehicle Identification Number</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Speed Requirements
          </h3>
          <p className="mb-4">
            LSV/PTV vehicles must be capable of reaching at least 20 MPH but cannot exceed 25 MPH on a paved level surface. This speed range allows operation on roads with posted limits up to 35 MPH in most states.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            State-by-State PTV Regulations
          </h2>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            States with Liberal PTV Laws
          </h3>
          <p className="mb-4">
            These states have comprehensive PTV-friendly regulations:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><Link href="/florida" className="text-theme-orange hover:underline">Florida</Link> - Extensive PTV-designated roads and communities</li>
            <li><Link href="/arizona" className="text-theme-orange hover:underline">Arizona</Link> - Allows PTVs on roads up to 35 MPH</li>
            <li><Link href="/california" className="text-theme-orange hover:underline">California</Link> - Strong LSV infrastructure and regulations</li>
            <li><Link href="/texas" className="text-theme-orange hover:underline">Texas</Link> - County and city-level PTV authorization</li>
            <li><Link href="/north-carolina" className="text-theme-orange hover:underline">North Carolina</Link> - Popular in beach and golf communities</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            States with Moderate PTV Regulations
          </h3>
          <p className="mb-4">
            These states allow PTVs with some restrictions:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><Link href="/pennsylvania" className="text-theme-orange hover:underline">Pennsylvania</Link> - Permitted on certain designated roads</li>
            <li><Link href="/new-york" className="text-theme-orange hover:underline">New York</Link> - Local municipality approval required</li>
            <li><Link href="/ohio" className="text-theme-orange hover:underline">Ohio</Link> - Limited to roads with 35 MPH or less</li>
            <li><Link href="/georgia" className="text-theme-orange hover:underline">Georgia</Link> - County-level authorization needed</li>
          </ul>

          <h5 className="text-lg font-semibold text-gray-900 mt-6 mb-3">
            Check Local Regulations
          </h5>
          <p className="mb-4">
            PTV regulations often vary at the county and city level within states. Contact your local DMV or TIGON's team at 1-844-844-6638 for specific guidance on your area's requirements.
          </p>

          <h6 className="text-base font-semibold text-gray-900 mt-4 mb-2">
            TIGON Compliance Assistance
          </h6>
          <p className="mb-6">
            Our team helps customers understand local regulations and ensures every PTV delivered is properly equipped for street-legal operation in your specific location.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Registration and Insurance Requirements
          </h2>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            PTV Registration Process
          </h3>
          <p className="mb-4">
            Most states require PTVs to be registered and titled like traditional vehicles. The process typically includes:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Manufacturer's Certificate of Origin (MCO)</li>
            <li>VIN verification by authorized inspector</li>
            <li>Proof of insurance</li>
            <li>Title application and fees</li>
            <li>License plate issuance</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Insurance Requirements
          </h3>
          <p className="mb-4">
            Street-legal PTVs require liability insurance in most states. The good news: PTV insurance is typically very affordable, often running $15-50 per month for comprehensive coverage.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Street-Legal PTVs from TIGON
          </h2>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            All Models Meet Federal LSV Standards
          </h3>
          <p className="mb-4">
            Every personal transportation vehicle sold through TIGON meets or exceeds federal LSV requirements:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><Link href="/denago" className="text-theme-orange hover:underline">DENAGO Models</Link> - Full street-legal equipment package</li>
            <li><Link href="/evolution" className="text-theme-orange hover:underline">EVOLUTION Models</Link> - DOT-compliant safety features</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Delivery with Documentation
          </h3>
          <p className="mb-4">
            When you purchase a PTV from TIGON, you receive all documentation needed for registration including MCO, VIN certification, and compliance documentation for your state.
          </p>
        </div>

        <div className="mt-12 p-8 bg-gradient-to-r from-theme-primary to-blue-700 text-white rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4">Get Street-Legal PTV Guidance</h3>
          <p className="mb-6">Our team can help you understand PTV regulations in your state</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/inventory">
              <Button size="lg" className="bg-theme-orange hover:opacity-90 text-white">
                <FileCheck className="w-4 h-4 mr-2" />
                View Street-Legal PTVs
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="bg-white text-theme-primary hover:bg-gray-100">
                <Phone className="w-4 h-4 mr-2" />
                Regulation Questions
              </Button>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
