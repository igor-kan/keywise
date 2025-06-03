
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bot, Eye, MessageSquare, FileText, Zap, Brain } from 'lucide-react';

const AIFeatures = () => {
  const aiCapabilities = [
    {
      icon: Eye,
      title: "Computer Vision Analysis",
      description: "AI examines property photos to detect structural issues, estimate renovation costs, and identify value-add opportunities.",
      color: "blue"
    },
    {
      icon: MessageSquare,
      title: "Automated Negotiation",
      description: "AI agents communicate with sellers, make offers, and negotiate terms using proven psychological tactics.",
      color: "green"
    },
    {
      icon: FileText,
      title: "Legal Document Generation",
      description: "Automatically generates contracts, lease agreements, and legal documents with local compliance.",
      color: "purple"
    },
    {
      icon: Brain,
      title: "Market Prediction",
      description: "Predicts neighborhood trends, property appreciation, and optimal buy/sell timing using ML models.",
      color: "orange"
    },
    {
      icon: Zap,
      title: "Instant Property Valuation",
      description: "Real-time property valuations using comparable sales, market trends, and condition assessments.",
      color: "red"
    },
    {
      icon: Bot,
      title: "24/7 Agent Operations",
      description: "AI agents work around the clock to find deals, schedule showings, and manage property operations.",
      color: "indigo"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-100 text-blue-600 border-blue-200",
      green: "bg-green-100 text-green-600 border-green-200",
      purple: "bg-purple-100 text-purple-600 border-purple-200",
      orange: "bg-orange-100 text-orange-600 border-orange-200",
      red: "bg-red-100 text-red-600 border-red-200",
      indigo: "bg-indigo-100 text-indigo-600 border-indigo-200"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-indigo-100 text-indigo-800 border-indigo-200">
            Advanced AI Capabilities
          </Badge>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Powered by Cutting-Edge AI Technology
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our AI agents use computer vision, natural language processing, and machine learning 
            to operate at superhuman scale and accuracy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {aiCapabilities.map((capability, index) => (
            <Card key={index} className={`border-2 hover:${getColorClasses(capability.color)} transition-colors`}>
              <CardHeader>
                <div className={`w-16 h-16 ${getColorClasses(capability.color).replace('border-', 'bg-').replace('text-', '').replace('bg-', 'bg-')} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <capability.icon className={`h-8 w-8 ${getColorClasses(capability.color).split(' ')[1]}`} />
                </div>
                <CardTitle className="text-xl text-center">{capability.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-center">
                  {capability.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* AI Performance Stats */}
        <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">AI Performance Metrics</h3>
            <p className="text-slate-600">Real data from our AI-managed operations</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">98.7%</div>
              <div className="text-slate-600">Photo Analysis Accuracy</div>
              <div className="text-sm text-slate-500 mt-1">vs. Professional Inspectors</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">47sec</div>
              <div className="text-slate-600">Avg. Contract Generation</div>
              <div className="text-sm text-slate-500 mt-1">vs. 3-5 days traditional</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">24/7</div>
              <div className="text-slate-600">Active Market Monitoring</div>
              <div className="text-sm text-slate-500 mt-1">Never misses an opportunity</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">85%</div>
              <div className="text-slate-600">Successful Negotiations</div>
              <div className="text-sm text-slate-500 mt-1">Above asking price reductions</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIFeatures;
