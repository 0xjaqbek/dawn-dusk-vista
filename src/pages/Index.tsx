import { Activity, BookOpen, Heart, Shield, Users, Zap, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Link } from "react-router-dom";

const Index = () => {
  const features = [
    {
      icon: Activity,
      title: "Real-time Vital Signs",
      description: "Monitor patient vitals with dynamic, responsive displays designed for emergency scenarios.",
      color: "text-critical"
    },
    {
      icon: BookOpen,
      title: "Scenario Library",
      description: "Access a comprehensive collection of medical emergency scenarios for practical training.",
      color: "text-primary"
    },
    {
      icon: Shield,
      title: "Evidence-based Training",
      description: "Learn from protocols aligned with current medical guidelines and best practices.",
      color: "text-stable"
    },
    {
      icon: Zap,
      title: "Instant Feedback",
      description: "Receive immediate performance analysis to improve decision-making skills.",
      color: "text-warning"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Train with partners and practice essential communication in emergency situations.",
      color: "text-accent"
    },
    {
      icon: Heart,
      title: "Patient-Centered Care",
      description: "Develop comprehensive assessment and treatment skills for better patient outcomes.",
      color: "text-critical"
    }
  ];

  const stats = [
    { value: "10K+", label: "Training Sessions", color: "border-primary" },
    { value: "95%", label: "Pass Rate", color: "border-stable" },
    { value: "50+", label: "Scenarios", color: "border-warning" },
    { value: "24/7", label: "Available", color: "border-critical" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <Activity className="h-6 w-6 text-critical" />
            <span className="text-xl font-bold">ParaMed AI</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Link to="/login">
              <Button variant="ghost" className="hidden sm:inline-flex">
                Sign In
              </Button>
            </Link>
            <Link to="/pricing">
              <Button className="bg-primary hover:bg-primary/90">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.primary/10),transparent)]" />
        
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-8 inline-flex items-center rounded-full border border-border bg-muted px-4 py-1.5 text-sm">
              <Shield className="mr-2 h-4 w-4 text-stable" />
              <span>Emergency Medical Training Platform</span>
            </div>
            
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl">
              Train for
              <span className="block bg-gradient-to-r from-critical via-warning to-stable bg-clip-text text-transparent">
                Life-Saving Moments
              </span>
            </h1>
            
            <p className="mb-10 text-lg text-muted-foreground sm:text-xl">
              Master emergency medical procedures with AI-powered simulations. 
              Practice critical decisions in a safe, realistic environment.
            </p>
            
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link to="/scenarios">
                <Button size="lg" className="w-full bg-primary hover:bg-primary/90 sm:w-auto">
                  Start Training
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/pricing">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  View Plans
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y border-border bg-muted/50 py-12">
        <div className="container">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className={`flex flex-col items-center justify-center rounded-lg border-2 ${stat.color} bg-card p-6 transition-all hover:shadow-md`}
              >
                <div className="text-3xl font-bold sm:text-4xl">{stat.value}</div>
                <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 sm:py-32">
        <div className="container">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold sm:text-5xl">
              Everything You Need to Excel
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Comprehensive training tools designed specifically for paramedics and emergency medical professionals
            </p>
          </div>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <Card key={index} className="group transition-all hover:shadow-lg">
                <CardHeader>
                  <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 ${feature.color}`}>
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="border-y border-border bg-muted/30 py-20 sm:py-32">
        <div className="container">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold sm:text-5xl">
              Simple, Effective Training
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Get started in minutes and begin improving your emergency response skills
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Choose a Scenario",
                description: "Select from cardiac arrest, trauma, respiratory emergencies, and more",
                color: "border-primary"
              },
              {
                step: "02",
                title: "Practice Response",
                description: "Make decisions, perform procedures, and manage patient care in real-time",
                color: "border-warning"
              },
              {
                step: "03",
                title: "Review Performance",
                description: "Get detailed feedback, identify areas for improvement, and track progress",
                color: "border-stable"
              }
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className={`mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full border-4 ${item.color} bg-background text-2xl font-bold`}>
                  {item.step}
                </div>
                <h3 className="mb-3 text-xl font-semibold">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
                
                {index < 2 && (
                  <ArrowRight className="absolute -right-4 top-8 hidden text-muted-foreground md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-32">
        <div className="container">
          <Card className="overflow-hidden border-2 border-primary">
            <CardContent className="p-8 sm:p-12">
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
                  Ready to Elevate Your Skills?
                </h2>
                <p className="mb-8 text-lg text-muted-foreground">
                  Join thousands of paramedics improving their emergency response capabilities
                </p>
                
                <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:justify-center sm:gap-6">
                  {[
                    "Unlimited practice scenarios",
                    "Real-time performance tracking",
                    "Expert-reviewed content"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center justify-center gap-2 text-sm">
                      <CheckCircle2 className="h-5 w-5 text-stable" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
                
                <Link to="/pricing">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Start Free Trial
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30 py-12">
        <div className="container">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div>
              <div className="mb-4 flex items-center space-x-2">
                <Activity className="h-5 w-5 text-critical" />
                <span className="font-bold">ParaMed AI</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Professional emergency medical training powered by AI
              </p>
            </div>
            
            <div>
              <h3 className="mb-4 text-sm font-semibold">Product</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/scenarios" className="hover:text-foreground">Scenarios</Link></li>
                <li><Link to="/pricing" className="hover:text-foreground">Pricing</Link></li>
                <li><Link to="/dashboard" className="hover:text-foreground">Dashboard</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="mb-4 text-sm font-semibold">Company</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground">About</a></li>
                <li><a href="#" className="hover:text-foreground">Contact</a></li>
                <li><a href="#" className="hover:text-foreground">Support</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="mb-4 text-sm font-semibold">Legal</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground">Privacy</a></li>
                <li><a href="#" className="hover:text-foreground">Terms</a></li>
                <li><a href="#" className="hover:text-foreground">License</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>© 2025 ParaMed AI Trainer. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
