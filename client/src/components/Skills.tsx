import { motion, useAnimation } from "framer-motion";
import { useState, useEffect, ElementType } from "react";
import { 
  Code2, 
  Database, 
  Cloud, 
  Layout, 
  Cpu, 
  ShieldCheck 
} from "lucide-react";
import { 
  SiPython, 
  SiNodedotjs, 
  SiSharp, 
  SiGo, 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiDotnet, 
  SiOracle, 
  SiMysql, 
  SiPostgresql, 
  SiAmazon, 
  SiDocker, 
  SiKubernetes, 
  SiTailwindcss, 
  SiVuedotjs, 
  SiAngular, 
  SiLaravel, 
  SiFlask, 
  SiDjango, 
  SiMongodb, 
  SiRedis, 
  SiApachekafka, 
  SiShopify, 
  SiWordpress, 
  SiPhp, 
  SiSpringboot, 
  SiRust, 
  SiCplusplus, 
  SiOpenai 
} from "react-icons/si";

const skillCategories = [
  {
    title: "Backend & Systems",
    icon: Database,
    skills: [
      { name: "Python", icon: SiPython },
  
      { name: "Node.js", icon: SiNodedotjs },
      { name: "C#", icon: SiSharp },
      { name: "Microservices", icon: Cpu },
      { name: "REST", icon: Code2 },


    ]
  },
  {
    title: "Frontend",
    icon: Layout,
    skills: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Vue.js", icon: SiVuedotjs },
      { name: "Angular", icon: SiAngular },
      { name: "TailwindCSS", icon: SiTailwindcss }
    ]
  },
  {
    title: "AI & Data Engineering",
    icon: Cpu,
    skills: [
      { name: "AI", icon: SiOpenai },
      { name: "LLMs", icon: SiOpenai },
      { name: "LangChain", icon: Code2 },
      { name: "ML", icon: Cpu },
      { name: "Airflow", icon: Cloud },
      { name: "PyTorch", icon: Code2 },
      { name: "TensorFlow", icon: Code2 },
    ]
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: [
      { name: "AWS", icon: SiAmazon },
      { name: "Azure", icon: Cloud },
      { name: "GCP", icon: Cloud },
      { name: "Kubernetes", icon: SiKubernetes },
      { name: "Docker", icon: SiDocker },
      { name: "Terraform", icon: Code2 },
      { name: "CI/CD", icon: Code2 },
      { name: "PostgreSQL", icon: SiPostgresql },
    ]
  },
  {
    title: "CMS & E-Commerce",
    icon: Code2,
    skills: [
      { name: "Shopify", icon: SiShopify },
      { name: "Wordpress", icon: SiWordpress },
      { name: "Liquid", icon: Code2 },
      { name: "Drupal", icon: Code2 },
      { name: "PHP", icon: SiPhp },
      { name: "SEO", icon: Layout },
      { name: "Laravel", icon: SiLaravel },
      { name: "Magento", icon: Code2 },
      { name: "Contentful", icon: Code2 },
      { name: "Strapi", icon: Code2 }
    ]
  }
];

function SkillCard({ skill, idx }: { skill: { name: string; icon: ElementType }; idx: number }) {
  const [hovered, setHovered] = useState(false);
  const [count, setCount] = useState(0);
  const barControls = useAnimation();
  const glowControls = useAnimation();

  useEffect(() => {
    if (!hovered) {
      setCount(0);
      barControls.start({ width: "0%", transition: { duration: 0.15 } });
      return;
    }

    // Bar sweep 0 → 100%
    barControls.start({
      width: "100%",
      transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
    });

    // Glow pulse on completion
    glowControls.start({
      boxShadow: ["0 0 0px rgba(34,197,94,0)", "0 0 16px rgba(34,197,94,0.7)", "0 0 6px rgba(34,197,94,0.3)"],
      transition: { duration: 0.9, times: [0, 0.8, 1] },
    });

    // Count 0 → 100
    let start = 0;
    const step = Math.ceil(100 / 40);
    const timer = setInterval(() => {
      start = Math.min(start + step, 100);
      setCount(start);
      if (start >= 100) clearInterval(timer);
    }, 22);
    return () => clearInterval(timer);
  }, [hovered]);

  return (
    <motion.div
      key={skill.name}
      initial={{ opacity: 0, y: 30, scale: 0.92 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ y: -4, scale: 1.04 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: idx * 0.04 }}
      animate={glowControls}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="flex flex-col p-4 bg-white/5 backdrop-blur-md rounded-lg border border-white/10 hover:border-primary/50 transition-colors cursor-default group"
    >
      <div className="flex items-center gap-3 mb-3">
        <motion.div
          animate={hovered ? { rotate: 360, backgroundColor: "rgba(34,197,94,0.2)" } : { rotate: 0, backgroundColor: "rgba(255,255,255,0.1)" }}
          transition={{ duration: 0.6 }}
          className="w-8 h-8 rounded flex items-center justify-center text-primary shrink-0"
        >
          <skill.icon className="w-5 h-5" />
        </motion.div>
        <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground group-hover:text-foreground transition-colors">
          {skill.name}
        </span>
      </div>
      <div className="relative flex items-center">
        <div className="flex-1 h-1.5 rounded-full bg-white/10 overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{ background: "linear-gradient(90deg, #16a34a, #22c55e, #86efac)" }}
            animate={barControls}
            initial={{ width: "0%" }}
          />
        </div>
        <motion.div
          animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 4 }}
          transition={{ duration: 0.2 }}
          className="absolute -top-7 right-0 pointer-events-none"
        >
          <span className="text-[10px] font-bold text-white bg-primary px-2 py-0.5 rounded shadow-lg whitespace-nowrap">
            {count}%
          </span>
          <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-primary" />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-transparent relative overflow-hidden">
      <div className="container-width">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
        >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Technical Mastery</h2>
            <div className="h-1 w-20 bg-primary rounded-full mb-8" />
            <p className="text-muted-foreground text-lg leading-relaxed max-w-4xl font-light">
              A decade of engineering excellence across the full stack. Specializing in high-performance distributed systems, enterprise AI integration, and fluid mobile experiences.
            </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {skillCategories.flatMap(cat => cat.skills).map((skill, idx) => (
            <SkillCard key={skill.name} skill={skill} idx={idx} />
          ))}
        </div>

        {/* Scrolling Banner with Icons ONLY */}
        <div className="mt-16 overflow-hidden relative">
          <div className="flex animate-marquee whitespace-nowrap gap-24 py-12 opacity-50 grayscale hover:grayscale-0 transition-all">
             {[...skillCategories, ...skillCategories, ...skillCategories].map((cat, i) => (
               <motion.div 
                 key={i} 
                 whileHover={{ scale: 1.3, color: "#22c55e" }}
                 className="flex items-center justify-center"
               >
                 <cat.icon className="w-16 h-16 text-primary" />
               </motion.div>
             ))}
          </div>
        </div>

        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-32"
        >
            <h3 className="text-3xl font-bold mb-12 flex items-center gap-4 tracking-tight">
              <ShieldCheck className="w-8 h-8 text-primary" />
              Academic Foundation
            </h3>
            <div className="grid md:grid-cols-2 gap-6 relative">
                {/* Master's */}
            
                {/* Bachelor's */}
                <div className="p-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl hover:border-primary/30 transition-all shadow-xl relative z-20">
                    <div className="flex justify-between items-baseline mb-4">
                      <h4 className="font-bold text-2xl tracking-tight">Bachelor of Science</h4>
                      <span className="text-primary font-bold bg-primary/10 px-4 py-1 rounded-full text-xs tracking-wider uppercase">20010 ~ 2014</span>
                    </div>
                    <p className="text-xl font-medium mb-1 text-foreground">Computer Science</p>
                    <p className="text-muted-foreground text-sm uppercase tracking-wider font-light">West Chester University of Pennsylvania</p>
                </div>
            </div>
        </motion.div>
      </div>
    </section>
  );
}
