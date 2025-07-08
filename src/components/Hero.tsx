import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero opacity-50" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Hi, I'm{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Mpho
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground mb-6">
              Software Developer Student
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              Passionate PLP (Power Learn Project) student diving deep into the world of 
              software development. Building the future, one line of code at a time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
              <Button variant="outline" size="lg" className="hover:bg-accent hover:text-accent-foreground transition-all duration-300">
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
            </div>
          </div>
          <div className="flex justify-center animate-slide-up">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-accent rounded-full blur-2xl opacity-30 scale-110" />
              <img
                src="/lovable-uploads/f1a05d39-732a-445a-a535-71b0070c6fb4.png"
                alt="Mpho Maphalle"
                className="relative z-10 w-80 h-80 md:w-96 md:h-96 object-cover rounded-full border-4 border-card shadow-2xl"
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;