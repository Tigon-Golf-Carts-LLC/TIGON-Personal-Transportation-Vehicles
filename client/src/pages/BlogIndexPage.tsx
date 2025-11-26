import { Link } from "wouter";
import { Calendar, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import { getAllBlogPosts } from "@/data/blogPosts";
import { blogImages } from "@/data/blogImages";

export default function BlogIndexPage() {
  const blogPosts = getAllBlogPosts();

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead 
        title="Personal Transportation Vehicle Blog | NEV News & Guides"
        description="Expert guides, industry news, and helpful resources about private transportation vehicles. Learn about NEV buying, maintenance, incentives, and more from TIGON's team across Pennsylvania, New Jersey, Delaware, Virginia, and nationwide."
        keywords="private transportation vehicle blog, NEV news, electric vehicle guides, NEV buying tips, Pennsylvania electric vehicles, street legal golf carts information"
        canonicalUrl="https://tigonptv.com/blog"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-theme-primary to-blue-700 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Personal Transportation Vehicle Blog
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Expert insights, buying guides, and industry news to help you make informed decisions about private transportation vehicles
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="hover:shadow-xl transition-shadow overflow-hidden group" data-testid={`blog-card-${post.slug}`}>
                <div className="aspect-video relative overflow-hidden bg-gray-200">
                  <img 
                    src={blogImages[post.slug]} 
                    alt={post.heroImageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <CardHeader>
                  <div className="flex items-center gap-2 mb-3">
                    <Badge className="bg-theme-orange text-white">
                      {post.category}
                    </Badge>
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(post.publishDate).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </div>
                  </div>
                  <CardTitle className="text-xl leading-tight group-hover:text-theme-orange transition-colors">
                    <Link href={`/blog/${post.slug}`} data-testid={`blog-link-${post.slug}`}>
                      {post.title}
                    </Link>
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Link href={`/blog/${post.slug}`}>
                    <Button variant="outline" className="w-full group-hover:bg-theme-orange group-hover:text-white group-hover:border-theme-orange transition-colors" data-testid={`blog-read-more-${post.slug}`}>
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-theme-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Find Your Perfect Personal Transportation Vehicle?
          </h2>
          <p className="text-xl mb-8">
            Visit one of our 30 locations nationwide or browse our inventory online
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/inventory">
              <Button size="lg" className="bg-theme-orange hover:opacity-90 text-white">
                View Inventory
              </Button>
            </Link>
            <Link href="/showroom">
              <Button size="lg" variant="outline" className="bg-white text-theme-primary hover:bg-gray-100">
                Find a Location
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
