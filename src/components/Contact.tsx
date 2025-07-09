import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "mpho.maphalle@gmail.com",
      link: "mailto:mpho.maphalle@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+27 61 371 6818",
      link: "tel:+27613716818"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "South Africa",
      link: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      name: "GitHub",
      link: "https://github.com/maphal-2025",
      color: "hover:text-foreground"
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      link: "#",
      color: "hover:text-blue-600"
    },
    {
      icon: Twitter,
      name: "Twitter",
      link: "#",
      color: "hover:text-blue-400"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="bg-gradient-accent bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's connect! I'm always open to discussing new opportunities and collaborations
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Let's Work Together</h3>
              <p className="text-muted-foreground mb-6">
                I'm actively seeking internship opportunities and entry-level positions where I can 
                apply my skills and continue learning. Whether you have a project idea, want to 
                collaborate, or just want to say hello, I'd love to hear from you!
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-4">
                      <a href={info.link} className="flex items-center space-x-4 group">
                        <div className="p-3 bg-gradient-primary rounded-lg text-primary-foreground">
                          <IconComponent className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="font-semibold group-hover:text-primary transition-colors">
                            {info.title}
                          </h4>
                          <p className="text-muted-foreground">{info.value}</p>
                        </div>
                      </a>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.link}
                      className={`p-3 bg-card rounded-lg border hover:shadow-lg transition-all duration-300 hover:scale-110 ${social.color}`}
                      title={social.name}
                    >
                      <IconComponent className="h-6 w-6" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-6">Send a Message</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full p-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full p-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea
                      rows={4}
                      className="w-full p-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                      placeholder="Tell me about your project or opportunity..."
                    />
                  </div>
                  <Button className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300">
                    <Mail className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;