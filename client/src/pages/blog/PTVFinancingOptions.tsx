import { Link } from "wouter";
import { Calendar, ArrowLeft, DollarSign, CreditCard, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import { getBlogPostBySlug } from "@/data/blogPosts";
import { blogImages } from "@/data/blogImages";

export default function PTVFinancingOptions() {
  const post = getBlogPostBySlug("personal-transportation-vehicles-financing-options");
  if (!post) return null;

  return (
    <div className="min-h-screen bg-white">
      <SEOHead 
        title={post.seoTitle}
        description={post.metaDescription}
        keywords="personal transportation vehicle financing, PTV payment plans, electric vehicle loans, DENAGO financing, EVOLUTION financing, low APR PTV loans, flexible PTV payments"
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
            Financing makes personal transportation vehicle ownership accessible to everyone. TIGON offers flexible payment plans with competitive rates designed to fit any budget. Whether you're purchasing a <Link href="/blog/affordable-personal-transportation-vehicles" className="text-theme-orange hover:underline">budget-friendly model</Link> or a <Link href="/blog/luxury-personal-transportation-vehicles" className="text-theme-orange hover:underline">luxury PTV</Link>, financing options help you drive home today.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            PTV Financing Options Available
          </h2>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Traditional Financing
          </h3>
          <p className="mb-4">
            Standard loan financing for personal transportation vehicles works similarly to auto loans:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Term Options:</strong> 24, 36, 48, 60, or 72 months</li>
            <li><strong>Down Payment:</strong> As low as 10% with approved credit</li>
            <li><strong>Interest Rates:</strong> Competitive APR based on credit profile</li>
            <li><strong>Monthly Payments:</strong> Fixed payments for the life of the loan</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Lease Options
          </h3>
          <p className="mb-4">
            <Link href="/blog/lease-neighborhood-electric-vehicle-options" className="text-theme-orange hover:underline">Leasing a PTV</Link> offers lower monthly payments with flexible end-of-term options:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Lower monthly payments than financing</li>
            <li>Drive a new PTV every 2-4 years</li>
            <li>Purchase option at lease end</li>
            <li>Warranty coverage throughout lease term</li>
          </ul>

          <h4 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
            Buy Here Pay Here Programs
          </h4>
          <p className="mb-4">
            For buyers with credit challenges, in-house financing programs may be available with weekly or bi-weekly payment options.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            How to Qualify for PTV Financing
          </h2>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Credit Requirements
          </h3>
          <p className="mb-4">
            Financing is available across the credit spectrum:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Excellent Credit (720+):</strong> Best rates and terms available</li>
            <li><strong>Good Credit (680-719):</strong> Competitive rates with standard terms</li>
            <li><strong>Fair Credit (620-679):</strong> Financing available with adjusted terms</li>
            <li><strong>Credit Challenges (Below 620):</strong> Alternative financing programs available</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Documentation Needed
          </h3>
          <p className="mb-4">
            Prepare the following for a smooth financing application:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Valid driver's license or ID</li>
            <li>Proof of income (pay stubs or tax returns)</li>
            <li>Proof of residence</li>
            <li>Social Security number</li>
            <li>References (for some programs)</li>
          </ul>

          <h5 className="text-lg font-semibold text-gray-900 mt-6 mb-3">
            Pre-Approval Process
          </h5>
          <p className="mb-4">
            Get pre-approved online in minutes without affecting your credit score. Know your budget before you shop for the perfect PTV.
          </p>

          <h6 className="text-base font-semibold text-gray-900 mt-4 mb-2">
            Instant Decisions Available
          </h6>
          <p className="mb-6">
            Many applications receive instant approval decisions, allowing you to move forward with your purchase immediately.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Sample Monthly Payment Examples
          </h2>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Entry-Level PTV ($10,000)
          </h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>36 months:</strong> Approximately $300/month</li>
            <li><strong>48 months:</strong> Approximately $230/month</li>
            <li><strong>60 months:</strong> Approximately $190/month</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Mid-Range PTV ($15,000)
          </h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>36 months:</strong> Approximately $450/month</li>
            <li><strong>48 months:</strong> Approximately $350/month</li>
            <li><strong>60 months:</strong> Approximately $285/month</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Premium PTV ($20,000)
          </h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>36 months:</strong> Approximately $600/month</li>
            <li><strong>48 months:</strong> Approximately $460/month</li>
            <li><strong>60 months:</strong> Approximately $380/month</li>
          </ul>

          <p className="text-sm text-gray-500 mb-6">
            *Payment examples based on 6.9% APR with 10% down payment. Actual rates and payments vary based on credit profile and terms.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Financing Benefits at TIGON
          </h2>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Why Finance Through TIGON?
          </h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Multiple lender relationships for best rate matching</li>
            <li>Fast approval process (often same-day)</li>
            <li>Flexible terms tailored to your budget</li>
            <li>No prepayment penalties</li>
            <li>Financing experts who understand PTV purchases</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Special Financing Promotions
          </h3>
          <p className="mb-4">
            TIGON periodically offers special financing promotions including:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>0% APR promotional periods</li>
            <li>Reduced rate specials</li>
            <li>Extended term options</li>
            <li>First-time buyer programs</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Nationwide Financing
          </h3>
          <p className="mb-4">
            Financing is available for customers across all 50 US states, whether you're in <Link href="/california" className="text-theme-orange hover:underline">California</Link>, <Link href="/florida" className="text-theme-orange hover:underline">Florida</Link>, <Link href="/texas" className="text-theme-orange hover:underline">Texas</Link>, or anywhere else in North America.
          </p>
        </div>

        <div className="mt-12 p-8 bg-gradient-to-r from-green-600 to-green-800 text-white rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4">Get Pre-Approved Today</h3>
          <p className="mb-6">Apply for PTV financing and know your budget in minutes</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-theme-orange hover:opacity-90 text-white">
                <CreditCard className="w-4 h-4 mr-2" />
                Apply for Financing
              </Button>
            </Link>
            <Link href="/inventory">
              <Button size="lg" variant="outline" className="bg-white text-green-700 hover:bg-gray-100">
                <Phone className="w-4 h-4 mr-2" />
                Browse Inventory
              </Button>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
