import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Code, Target, Briefcase } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="bg-gradient-accent bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A dedicated software development student with a passion for creating innovative solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold mb-6">My Journey</h3>
            <p className="text-muted-foreground leading-relaxed">
              Currently pursuing my software development journey through the Power Learn Project (PLP), 
              where I'm building a strong foundation in programming fundamentals and modern development practices.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I'm passionate about learning new technologies and applying them to solve real-world problems. 
              My goal is to become a skilled full-stack developer who can contribute meaningfully to innovative projects.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">PLP</div>
                <div className="text-sm text-muted-foreground">Student</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">Full-Stack</div>
                <div className="text-sm text-muted-foreground">Focus</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">2025</div>
                <div className="text-sm text-muted-foreground">Started</div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <GraduationCap className="h-8 w-8 text-primary mt-1" />
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Education</h4>
                    <p className="text-muted-foreground">
                      Power Learn Project (PLP) - Software Development Program
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-accent">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Briefcase className="h-8 w-8 text-accent mt-1" />
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Experience</h4>
                    <p className="text-muted-foreground">
                      IT Technician at Makro Silverlakes
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Code className="h-8 w-8 text-primary mt-1" />
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Focus Areas</h4>
                    <p className="text-muted-foreground">
                      Web Development, Programming Fundamentals, Problem Solving
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Target className="h-8 w-8 text-primary mt-1" />
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Goals</h4>
                    <p className="text-muted-foreground">
                      Become a skilled full-stack developer and contribute to innovative projects
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;