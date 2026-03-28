import { motion } from "framer-motion";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import avatarImage from "@assets/generated_images/professional_headshot_of_software_developer.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 pb-10 relative overflow-hidden transition-colors duration-500 bg-transparent"
    >
      <div className="container-width relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col justify-center h-full pt-12"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[2px] bg-primary" />
              <span className="text-primary font-medium">Hello!</span>
            </div>

            <h1 className="text-5xl md:text-8xl font-bold leading-tight mb-6 tracking-tight">
              <span className="block text-foreground">My name is</span>
              <span className="block text-primary ml-6">Spenser Mills</span>
            </h1>

            <p className="text-2xl md:text-3xl text-muted-foreground font-medium mb-12">
              Senior Full Stack Developer
            </p>

            <div className="flex items-center gap-6">
              <a
                href="https://www.linkedin.com/in/duane-horton-8ab528234/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors hover:-translate-y-1 transform duration-200"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/DuaneH-www"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors hover:-translate-y-1 transform duration-200"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="mailto:duanehorton728@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors hover:-translate-y-1 transform duration-200"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex flex-col justify-center h-full pt-12"
          >
            <p className="text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed font-light">
             I'm a Senior full stack Developer with 10 years of experience designing and building scalable, high-performance web 
and mobile applications. Expert in React and Next.js, Vue.js for frontend development, Node.js, Python (Django), 
and C#, .NET for backend systems, and React Native for cross-platform mobile solutions.
<br/><br/>
Highly adaptable with a strong growth mindset, consistently embracing complex challenges to enhance technical 
expertise and drive innovation. Recognized for clear communication, accountability, and consistently delivering 
efficient, high-quality solutions in both client-focused and collaborative team environments.
<br/><br/>
If you've got a project that could use my help, feel free to reach out—happy to chat!
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-4 items-center sm:items-start">
              <a
                href="#contact"
                className="w-full sm:w-auto px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:scale-105 transition-all shadow-lg shadow-primary/20 active:scale-95 text-center"
              >
                Contact Me
              </a>
              <a
                href="/resume.pdf"
                className="w-full sm:w-auto px-8 py-3 border border-white/20 bg-transparent hover:bg-white/5 rounded-full font-medium transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
              >
                <Download className="w-5 h-5" /> Download CV
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
