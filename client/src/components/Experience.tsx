import { motion } from "framer-motion";

const experiences = [
  {
    period: "Oct 2022 - Present",
    role: "Senior Full Stack Developer",
    company: "Insquad",
  },
  {
    period: "Jun 2019 - Aug 2022",
    role: "Senior Full Stack Developer",
    company: "Atlasiko Inc",
  },
  {
    period: "Dec 2017 - Jun 2019",
    role: "Senior Full Stack Developer",
    company: "Atlasiko Inc",
  },
  {
    period: "Oct 2014 - Nov 2017",
    role: "Full Stack Developer",
    company: "Bluestone Apps",
  },
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
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-left">My Experience</h2>
          <div className="h-1 w-20 bg-primary rounded-full" />
        </motion.div>

        <div className="w-full">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="grid grid-cols-3 items-center py-6 border-b border-white/10"
            >
              <span className="text-sm text-muted-foreground">{exp.period}</span>
              <span className="text-sm font-semibold text-foreground text-center">{exp.role}</span>
              <span className="text-sm text-muted-foreground text-right">{exp.company}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
