import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code2, 
  Database, 
  Globe, 
  Smartphone, 
  GitBranch, 
  Palette,
  Server,
  Brain
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Programming Languages",
      skills: ["JavaScript", "Python", "HTML5", "CSS3", "TypeScript", "Java"],
      color: "primary"
    },
    {
      icon: Globe,
      title: "Web Development",
      skills: ["React", "Node.js", "Express", "Next.js", "Tailwind CSS", "Bootstrap"],
      color: "accent"
    },
    {
      icon: Database,
      title: "Database & Backend",
      skills: ["MongoDB", "PostgreSQL", "MySQL", "REST APIs", "GraphQL"],
      color: "primary"
    },
    {
      icon: GitBranch,
      title: "Tools & Version Control",
      skills: ["Git", "GitHub", "VS Code", "npm", "Webpack", "Vite"],
      color: "accent"
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      skills: ["React Native", "Flutter (Learning)", "Progressive Web Apps"],
      color: "primary"
    },
    {
      icon: Brain,
      title: "Soft Skills",
      skills: ["Problem Solving", "Team Collaboration", "Critical Thinking", "Communication"],
      color: "accent"
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="bg-gradient-primary bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I'm learning and working with as a PLP student
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={index} 
                className={`hover:shadow-lg transition-all duration-300 group hover:scale-105 ${
                  category.color === 'primary' ? 'hover:shadow-glow' : 'hover:shadow-accent'
                }`}
              >
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`p-2 rounded-lg ${
                      category.color === 'primary' 
                        ? 'bg-gradient-primary text-primary-foreground' 
                        : 'bg-gradient-accent text-accent-foreground'
                    }`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant={category.color === 'primary' ? 'default' : 'secondary'}
                        className={`transition-all duration-300 hover:scale-110 ${
                          category.color === 'primary' 
                            ? 'bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground' 
                            : 'bg-accent/10 text-accent hover:bg-accent hover:text-accent-foreground'
                        }`}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-hero rounded-2xl p-8 border">
            <h3 className="text-2xl font-bold mb-4">Currently Learning</h3>
            <p className="text-muted-foreground mb-6">
              As a PLP student, I'm continuously expanding my skill set and staying updated with the latest technologies
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {["React Native", "Docker", "AWS", "Machine Learning", "DevOps", "Microservices"].map((skill, index) => (
                <Badge key={index} variant="outline" className="text-sm py-2 px-4 hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                  {skill} 📚
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;