import { motion } from "framer-motion";

const experiences = [
  {
    period: "2022.10 -2026.2",
    role: "Senior Full Stack Developer",
    company: "Insquad ",
    location: "",
    skills: [""],
    description: ""
  },
  
  {
    period: "2019.6 - 2022.8",
    role: "Senior Full Stack Developer",
    company: "Atlasiko Ink",
     location: "",
    skills: [""],
    description: ""
  },
  {
    period: "2017.12 - 2019.6",
    role: "Senior Full Stack Python Developer",
    company: "Atlasiko Ink",
     location: "",
    skills: [""],
    description: ""
  },
  {
    period: "2014.10 - 2017.11",
    role: "Full Stack Developer",
    company: "Bluestone Apps",
     location: "",
    skills: [""],
    description: ""
  }
];

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-background relative overflow-hidden transition-colors duration-300">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Work Experiences</h2>
          <div className="h-1 w-20 bg-primary rounded-full" />
        </motion.div>

        <div className="relative space-y-12 before:absolute before:left-4 md:before:left-8 before:top-0 before:bottom-0 before:w-0.5 before:bg-white/10">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative pl-12 md:pl-24 group"
            >
              {/* Timeline Indicator */}
              <div className="absolute left-4 md:left-8 top-0 -translate-x-1/2 w-8 h-8 rounded-full bg-background border-2 border-white/20 z-10 flex items-center justify-center">
                <div className="w-4 h-[2px] bg-white/40" />
              </div>
              
              <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                {/* Left Side: Role and Company Info */}
                <div className="w-full md:w-64 shrink-0">
                   <h3 className="text-lg md:text-xl font-bold text-foreground mb-3 md:mb-4">{exp.role}</h3>
                   <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-background font-bold text-xs uppercase overflow-hidden shrink-0">
                        {/* Mock Logo using Company Initials if no image */}
                        {exp.company.substring(0, 2)}
                      </div>
                      <div className="min-w-0">
                        <p className="font-bold text-foreground truncate">{exp.company}</p>
                        <p className="text-sm text-muted-foreground truncate">{exp.location}</p>
                      </div>
                   </div>
                   <p className="text-sm font-medium text-muted-foreground mb-1">{exp.period}</p>
                   <p className="text-xs text-muted-foreground/60 uppercase tracking-wider">[Full Time] [Remote]</p>
                </div>

                {/* Right Side: Description */}
                <div className="w-full flex-1 bg-white/5 backdrop-blur-sm p-5 md:p-6 rounded-xl border border-white/5 hover:border-white/10 transition-all">
                  <div className="mb-6">
                    <ul className="space-y-3 md:space-y-4">
                      {exp.description.split('. ').map((point, pIdx) => (
                        <li key={pIdx} className="flex gap-3 md:gap-4 text-foreground/80 text-sm md:text-base leading-relaxed font-light">
                          <span className="text-primary mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-primary" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                    {exp.skills.map((skill, sIdx) => (
                      <span key={sIdx} className="text-[9px] md:text-[10px] px-2 md:px-3 py-1 rounded-full bg-primary/10 text-primary font-bold border border-primary/20 uppercase tracking-wider">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
