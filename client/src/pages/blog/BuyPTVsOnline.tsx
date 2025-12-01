import { Link } from "wouter";
import { Calendar, ArrowLeft, ShoppingCart, Monitor, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import { getBlogPostBySlug } from "@/data/blogPosts";
const heroImage = "/attached_assets/TIGON%20Personal%20Transportation%20Vehicles%20Premier%20PTV%20Dealership%20-%20PTV_1764176674271.jpeg";

export default function BuyPTVsOnline() {
  const post = getBlogPostBySlug("buy-personal-transportation-vehicles-online");
  if (!post) return null;

  return (
    <div className="min-h-screen bg-white">
      <SEOHead 
        title={post.seoTitle}
        description={post.metaDescription}
        keywords="buy PTV online, personal transportation vehicles online, new PTVs USA, used PTVs for sale, online PTV shopping, DENAGO online, EVOLUTION online purchase"
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
            The digital age has transformed how Americans shop for personal transportation vehicles. Today, you can browse, compare, and purchase a new or used PTV from the comfort of your home, with delivery straight to your doorstep anywhere in the United States, Canada, or Mexico. TIGON's online shopping experience makes buying a personal transportation vehicle easier than ever.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            How to Buy Personal Transportation Vehicles Online
          </h2>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Step-by-Step Online PTV Shopping Guide
          </h3>
          <p className="mb-4">
            Purchasing a personal transportation vehicle online is straightforward when you follow these steps:
          </p>

          <h4 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
            1. Browse the Online Inventory
          </h4>
          <p className="mb-4">
            Start by exploring our complete <Link href="/inventory" className="text-theme-orange hover:underline">PTV inventory</Link>. Filter by brand, price, features, and passenger capacity to find vehicles that match your needs.
          </p>

          <h4 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
            2. Compare Models and Features
          </h4>
          <p className="mb-4">
            Use our detailed specifications and photos to compare models. Check out our <Link href="/blog/top-personal-transportation-vehicles-2025" className="text-theme-orange hover:underline">2025 model comparison guide</Link> for expert insights on the best options available.
          </p>

          <h4 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
            3. Apply for Financing Online
          </h4>
          <p className="mb-4">
            Get pre-approved for <Link href="/blog/personal-transportation-vehicles-financing-options" className="text-theme-orange hover:underline">PTV financing</Link> in minutes with our secure online application. Flexible terms and competitive rates make ownership affordable.
          </p>

          <h4 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
            4. Complete Your Purchase
          </h4>
          <p className="mb-4">
            Our secure checkout process guides you through purchase completion, including payment options, delivery scheduling, and warranty selection.
          </p>

          <h5 className="text-lg font-semibold text-gray-900 mt-6 mb-3">
            Virtual Tours and Detailed Photos
          </h5>
          <p className="mb-4">
            Every personal transportation vehicle in our online inventory includes high-resolution photos from multiple angles, 360-degree interior views, and detailed feature descriptions so you know exactly what you're buying.
          </p>

          <h6 className="text-base font-semibold text-gray-900 mt-4 mb-2">
            Video Walkthroughs Available
          </h6>
          <p className="mb-6">
            Request a personalized video walkthrough of any PTV from our sales team. We'll show you the vehicle's features, condition, and operation via live video call.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            New Personal Transportation Vehicles Available Online
          </h2>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            2025 DENAGO Models
          </h3>
          <p className="mb-4">
            Shop the latest DENAGO personal transportation vehicles with full manufacturer warranty and the newest features:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><Link href="/vehicles/denago-ev-nomad" className="text-theme-orange hover:underline">DENAGO EV Nomad</Link> - Starting at competitive pricing</li>
            <li><Link href="/vehicles/denago-ev-rover-xl" className="text-theme-orange hover:underline">DENAGO EV Rover XL</Link> - Work-ready utility</li>
            <li><Link href="/denago" className="text-theme-orange hover:underline">View All DENAGO Models</Link></li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            2025 EVOLUTION Models
          </h3>
          <p className="mb-4">
            Explore the complete EVOLUTION lineup with over 30 configurations available for online purchase:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><Link href="/vehicles/evolution-classic-4-plus" className="text-theme-orange hover:underline">EVOLUTION Classic 4 Plus</Link> - Timeless design</li>
            <li><Link href="/vehicles/evolution-d5-maverick-4" className="text-theme-orange hover:underline">EVOLUTION D5 Maverick 4</Link> - Sport styling</li>
            <li><Link href="/evolution" className="text-theme-orange hover:underline">View All EVOLUTION Models</Link></li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Used Personal Transportation Vehicles Online
          </h2>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Certified Pre-Owned PTV Program
          </h3>
          <p className="mb-4">
            Save money with our certified pre-owned personal transportation vehicles. Each used PTV undergoes a comprehensive inspection and comes with warranty coverage for peace of mind. Learn more about <Link href="/blog/buy-used-neighborhood-electric-vehicles-online" className="text-theme-orange hover:underline">buying used PTVs online</Link>.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Benefits of Buying Used PTVs Online
          </h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Significant savings compared to new vehicle prices</li>
            <li>Certified inspection and reconditioning</li>
            <li>Extended warranty options available</li>
            <li>Complete vehicle history and documentation</li>
            <li>Same free delivery as new vehicles</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Online PTV Shopping by State
          </h2>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Popular Delivery Destinations
          </h3>
          <p className="mb-4">
            TIGON delivers personal transportation vehicles to customers across North America. Some of our most popular delivery destinations include:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><Link href="/florida" className="text-theme-orange hover:underline">Florida</Link> - Retirement communities and beach towns</li>
            <li><Link href="/arizona" className="text-theme-orange hover:underline">Arizona</Link> - Desert communities and golf resorts</li>
            <li><Link href="/california" className="text-theme-orange hover:underline">California</Link> - Coastal towns and planned communities</li>
            <li><Link href="/texas" className="text-theme-orange hover:underline">Texas</Link> - Ranch properties and suburbs</li>
            <li><Link href="/north-carolina" className="text-theme-orange hover:underline">North Carolina</Link> - Mountain and beach communities</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Secure Online PTV Transactions
          </h2>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Payment Security and Protection
          </h3>
          <p className="mb-4">
            TIGON uses industry-standard encryption and secure payment processing for all online transactions. Your personal and financial information is protected with the same security measures used by major banks and retailers.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Satisfaction Guarantee
          </h3>
          <p className="mb-4">
            Shop with confidence knowing your online PTV purchase is backed by TIGON's satisfaction guarantee. If your personal transportation vehicle doesn't meet expectations, we'll work with you to make it right.
          </p>
        </div>

        <div className="mt-12 p-8 bg-gradient-to-r from-theme-primary to-blue-700 text-white rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4">Start Shopping for Your PTV Today</h3>
          <p className="mb-6">Browse our complete online inventory of new and used personal transportation vehicles</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/inventory">
              <Button size="lg" className="bg-theme-orange hover:opacity-90 text-white">
                <ShoppingCart className="w-4 h-4 mr-2" />
                Shop Online Now
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="bg-white text-theme-primary hover:bg-gray-100">
                <Phone className="w-4 h-4 mr-2" />
                Speak with Expert
              </Button>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
