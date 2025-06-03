import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Home, Calendar, FileText, Users, ArrowRight, Star, MapPin, Bath, Square } from 'lucide-react';
import { toast } from "@/components/ui/use-toast";
import PropertyInvestment from "@/components/PropertyInvestment";
import AIFeatures from "@/components/AIFeatures";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    if (searchQuery.trim()) {
      toast({
        title: "AI Search Activated",
        description: `Searching for: "${searchQuery}"`,
      });
    }
  };

  const featuredProperties = [
    {
      id: 1,
      title: "Modern Downtown Loft",
      price: "$850,000",
      location: "Brooklyn, NY",
      beds: 2,
      baths: 2,
      sqft: "1,200",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop",
      aiInsight: "Perfect for young professionals, 15% below market average"
    },
    {
      id: 2,
      title: "Family Home with Garden",
      price: "$1,200,000",
      location: "Austin, TX",
      beds: 4,
      baths: 3,
      sqft: "2,400",
      image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400&h=300&fit=crop",
      aiInsight: "Excellent schools nearby, great investment potential"
    },
    {
      id: 3,
      title: "Luxury Penthouse",
      price: "$2,500,000",
      location: "Miami, FL",
      beds: 3,
      baths: 3,
      sqft: "1,800",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=300&fit=crop",
      aiInsight: "Ocean views, prime location, high rental yield"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Home className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-slate-900">Keywise</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">Buy</a>
              <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">Sell</a>
              <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">Rent</a>
              <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">Invest</a>
              <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">About</a>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" className="hidden sm:inline-flex">Sign In</Button>
              <Button className="bg-blue-600 hover:bg-blue-700">Get Started</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="mb-6 bg-blue-100 text-blue-800 border-blue-200">
            AI-Powered Real Estate Firm
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            The AI real estate agent that works{' '}
            <span className="text-blue-600">24/7</span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
            More than just an agent - we're an AI-managed real estate firm that finds, buys, 
            renovates, and manages properties while helping you buy, sell, or rent.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Try: '2BR under $2500 in Brooklyn' or 'investment properties with 15%+ ROI'"
                className="pl-12 pr-32 h-14 text-lg border-2 border-slate-200 focus:border-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              />
              <Button 
                onClick={handleSearch}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700"
              >
                Search <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">$12K+</div>
              <div className="text-slate-600">Average Savings</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">72hrs</div>
              <div className="text-slate-600">Average Close Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">19.3%</div>
              <div className="text-slate-600">Portfolio Avg ROI</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">98%</div>
              <div className="text-slate-600">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">How Keywise Works</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Our AI handles every step of your real estate journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card className="text-center border-2 hover:border-blue-200 transition-colors">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Search with AI</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Tell our AI what you want in plain English. No complex filters needed.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:border-green-200 transition-colors">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl">Schedule Tours</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  AI coordinates showings with all parties. Book instantly, no phone calls.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:border-purple-200 transition-colors">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Smart Offers</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Generate competitive offers with AI-optimized terms and clauses.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:border-orange-200 transition-colors">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle className="text-xl">Close Fast</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  AI handles paperwork, negotiations, and compliance automatically.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* AI Features Section */}
      <AIFeatures />

      {/* Property Investment Section */}
      <PropertyInvestment />

      {/* Featured Properties */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Featured Properties</h2>
            <p className="text-xl text-slate-600">
              Curated by AI based on market trends and value
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProperties.map((property) => (
              <Card key={property.id} className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group">
                <div className="relative">
                  <img 
                    src={property.image} 
                    alt={property.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4 bg-green-500 text-white">
                    <Star className="h-3 w-3 mr-1" />
                    AI Pick
                  </Badge>
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">{property.title}</CardTitle>
                    <span className="text-2xl font-bold text-blue-600">{property.price}</span>
                  </div>
                  <div className="flex items-center text-slate-600">
                    <MapPin className="h-4 w-4 mr-1" />
                    {property.location}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex space-x-4 text-sm text-slate-600">
                      <span className="flex items-center">
                        <Home className="h-4 w-4 mr-1" />
                        {property.beds} bed
                      </span>
                      <span className="flex items-center">
                        <Bath className="h-4 w-4 mr-1" />
                        {property.baths} bath
                      </span>
                      <span className="flex items-center">
                        <Square className="h-4 w-4 mr-1" />
                        {property.sqft} sqft
                      </span>
                    </div>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="text-sm text-blue-800 font-medium">AI Insight:</p>
                    <p className="text-sm text-blue-700">{property.aiInsight}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Experience the Future of Real Estate?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join our AI-managed platform for buying, selling, renting, and investing
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-4">
              Start Buying
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-4">
              View Investment Opportunities
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Home className="h-6 w-6" />
                <span className="text-xl font-bold">Keywise</span>
              </div>
              <p className="text-slate-400">
                The AI real estate agent that works 24/7 and charges you less.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Buy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sell</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Rent</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Commercial</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-white transition-colors">License</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 Keywise. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
