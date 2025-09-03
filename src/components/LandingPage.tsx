import { ArrowRight, Shield, Eye, Zap, CheckCircle, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const LandingPage = () => {
  const handleWaitlistClick = () => {
    window.open('https://forms.gle/2ZpEbRMnJPoEF41w9', '_blank');
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="container mx-auto px-6 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold bg-cyber-gradient bg-clip-text text-transparent">
              Moat AI
            </span>
          </div>
          <Button 
            variant="outline" 
            onClick={handleWaitlistClick}
            className="border-primary/30 hover:border-primary hover:bg-primary/10 hover:shadow-glow transition-all duration-300"
          >
            Join Waitlist
          </Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="bg-cyber-gradient bg-clip-text text-transparent">
              Secure Your Code
            </span>
            <br />
            <span className="text-foreground">
              Before It Ships
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Moat AI provides automated pentesting and real-time threat monitoring 
            for modern development teams. Catch vulnerabilities before they become breaches.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button 
              size="lg" 
              onClick={handleWaitlistClick}
              className="bg-cyber-gradient hover:shadow-glow-strong transition-all duration-300 text-lg px-8 py-4"
            >
              Join the Waitlist
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Users className="h-4 w-4" />
              <span>500+ developers already signed up</span>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            The Problem with Current Security
          </h2>
          <p className="text-xl text-muted-foreground">
            Traditional security tools can't keep up with modern development velocity
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 pt-8">
            <Card className="p-6 bg-card/50 border-destructive/20">
              <Clock className="h-12 w-12 text-destructive mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Too Slow</h3>
              <p className="text-muted-foreground">Manual security reviews take weeks, slowing down releases</p>
            </Card>
            
            <Card className="p-6 bg-card/50 border-destructive/20">
              <Eye className="h-12 w-12 text-destructive mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Limited Coverage</h3>
              <p className="text-muted-foreground">Static analysis misses runtime vulnerabilities and API threats</p>
            </Card>
            
            <Card className="p-6 bg-card/50 border-destructive/20">
              <Users className="h-12 w-12 text-destructive mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Too Complex</h3>
              <p className="text-muted-foreground">Security tools are built for experts, not development teams</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="bg-cyber-gradient bg-clip-text text-transparent">
              AI-Powered Security
            </span> That Scales
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 pt-8">
            <Card className="p-8 bg-card/80 border-primary/20 hover:border-primary/40 hover:shadow-glow transition-all duration-300">
              <Shield className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Automated Pentesting</h3>
              <p className="text-muted-foreground mb-6">
                Our AI conducts comprehensive security assessments on every deployment, 
                finding vulnerabilities that traditional tools miss.
              </p>
              <ul className="space-y-2 text-left">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>OWASP Top 10 coverage</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>API security testing</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Runtime vulnerability detection</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 bg-card/80 border-primary/20 hover:border-primary/40 hover:shadow-glow transition-all duration-300">
              <Eye className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Real-time Monitoring</h3>
              <p className="text-muted-foreground mb-6">
                Continuous threat detection and incident response for your production 
                applications, powered by AI pattern recognition.
              </p>
              <ul className="space-y-2 text-left">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>24/7 threat monitoring</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Anomaly detection</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Instant alert notifications</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Secure Your Code?
          </h2>
          <p className="text-xl text-muted-foreground">
            Join hundreds of developers already using Moat AI to ship secure code faster.
          </p>
          <Button 
            size="lg" 
            onClick={handleWaitlistClick}
            className="bg-cyber-gradient hover:shadow-glow-strong transition-all duration-300 text-xl px-12 py-6"
          >
            Join the Waitlist
            <ArrowRight className="ml-2 h-6 w-6" />
          </Button>
          <p className="text-sm text-muted-foreground">
            Early access • No credit card required • 30-day free trial
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-12 border-t border-border/50">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2">
            <Shield className="h-6 w-6 text-primary" />
            <span className="text-lg font-semibold bg-cyber-gradient bg-clip-text text-transparent">
              Moat AI
            </span>
          </div>
          <p className="text-muted-foreground text-center">
            © 2025 Moat AI. Securing the future of development.
          </p>
          <div className="flex space-x-6 text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
            <a href="#" className="hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
