
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, Calculator, Wrench, DollarSign, Building, BarChart3 } from 'lucide-react';

const PropertyInvestment = () => {
  const investmentProperties = [
    {
      id: 1,
      address: "1247 Oak Street, Austin, TX",
      purchasePrice: "$320,000",
      estimatedValue: "$450,000",
      monthlyRental: "$2,800",
      roi: "18.5%",
      strategy: "BRRRR",
      status: "In Renovation",
      aiInsight: "High ROI potential due to upcoming tech campus development",
      image: "https://images.unsplash.com/photo-1449844908441-8829872d2607?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      address: "892 Pine Avenue, Denver, CO",
      purchasePrice: "$425,000",
      estimatedValue: "$485,000",
      monthlyRental: "$3,200",
      roi: "15.2%",
      strategy: "Buy & Hold",
      status: "Rented",
      aiInsight: "Stable rental market with low vacancy rates",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      address: "2156 Market Street, Phoenix, AZ",
      purchasePrice: "$285,000",
      estimatedValue: "$365,000",
      monthlyRental: "$2,400",
      roi: "22.1%",
      strategy: "Flip",
      status: "For Sale",
      aiInsight: "Recent neighborhood gentrification driving appreciation",
      image: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=400&h=300&fit=crop"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-green-100 text-green-800 border-green-200">
            AI Investment Platform
          </Badge>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            PropBot: AI-Managed Real Estate Portfolio
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our AI doesn't just help you find properties—it actively manages a portfolio 
            of investments, finding deals, managing renovations, and maximizing ROI.
          </p>
        </div>

        {/* Investment Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="text-center border-2 hover:border-green-200 transition-colors">
            <CardHeader>
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
              <CardTitle className="text-xl">Market Intelligence</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                AI scans 10,000+ listings daily, analyzing ROI potential, neighborhood trends, 
                and cash flow projections in real-time.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center border-2 hover:border-blue-200 transition-colors">
            <CardHeader>
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calculator className="h-8 w-8 text-blue-600" />
              </div>
              <CardTitle className="text-xl">ROI Optimization</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Advanced algorithms determine optimal strategy: flip, BRRRR, buy & hold, 
                or Airbnb arbitrage for maximum returns.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center border-2 hover:border-purple-200 transition-colors">
            <CardHeader>
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="h-8 w-8 text-purple-600" />
              </div>
              <CardTitle className="text-xl">Renovation AI</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Computer vision analyzes property photos to estimate repair costs 
                and suggest value-add improvements.
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* Portfolio Properties */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            Current AI-Managed Portfolio
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {investmentProperties.map((property) => (
              <Card key={property.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative">
                  <img 
                    src={property.image} 
                    alt={property.address}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className={`absolute top-4 left-4 ${
                    property.status === 'Rented' ? 'bg-green-500' :
                    property.status === 'In Renovation' ? 'bg-yellow-500' :
                    'bg-blue-500'
                  } text-white`}>
                    {property.status}
                  </Badge>
                  <Badge className="absolute top-4 right-4 bg-white text-slate-800">
                    {property.strategy}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{property.address}</CardTitle>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-600">Purchase: {property.purchasePrice}</span>
                    <span className="text-lg font-bold text-green-600">{property.roi} ROI</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between">
                      <span className="text-sm text-slate-600">Current Value:</span>
                      <span className="font-semibold">{property.estimatedValue}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-slate-600">Monthly Rent:</span>
                      <span className="font-semibold">{property.monthlyRental}</span>
                    </div>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="text-sm text-blue-800 font-medium">AI Analysis:</p>
                    <p className="text-sm text-blue-700">{property.aiInsight}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Investment Dashboard Preview */}
        <Card className="bg-gradient-to-r from-slate-900 to-blue-900 text-white">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl mb-4">PropBot Investment Dashboard</CardTitle>
            <CardDescription className="text-blue-100 text-lg">
              Real-time portfolio analytics and AI recommendations
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Building className="h-6 w-6 mr-2" />
                  <span className="text-2xl font-bold">24</span>
                </div>
                <p className="text-blue-200">Active Properties</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <DollarSign className="h-6 w-6 mr-2" />
                  <span className="text-2xl font-bold">$47K</span>
                </div>
                <p className="text-blue-200">Monthly Revenue</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <TrendingUp className="h-6 w-6 mr-2" />
                  <span className="text-2xl font-bold">19.3%</span>
                </div>
                <p className="text-blue-200">Avg ROI</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <BarChart3 className="h-6 w-6 mr-2" />
                  <span className="text-2xl font-bold">$2.1M</span>
                </div>
                <p className="text-blue-200">Portfolio Value</p>
              </div>
            </div>
            <div className="text-center">
              <Button size="lg" className="bg-white text-slate-900 hover:bg-blue-50">
                Access PropBot Dashboard
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default PropertyInvestment;
