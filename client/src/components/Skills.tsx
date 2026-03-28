import { motion } from "framer-motion";
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
      { name: "GoLang", icon: SiGo },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "C#", icon: SiSharp },
      { name: "Java", icon: SiSharp }, // Using SiSharp as a fallback or if Si icon is missing for Java
      { name: "Microservices", icon: Cpu },
      { name: "REST", icon: Code2 },
      { name: "Rust", icon: SiRust },
      { name: "C++", icon: SiCplusplus },
      { name: "Spring Boot", icon: SiSpringboot }
    ]
  },
  {
    title: "Frontend & Mobile",
    icon: Layout,
    skills: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "React Native", icon: SiReact },
      { name: "Swift", icon: Code2 },
      { name: "Kotlin", icon: Code2 },
      { name: "Flutter", icon: Code2 },
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
      { name: "Vector DBs", icon: Database },
      { name: "Airflow", icon: Cloud },
      { name: "PyTorch", icon: Code2 },
      { name: "TensorFlow", icon: Code2 },
      { name: "Pandas", icon: Code2 },
      { name: "Scikit", icon: Code2 }
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
      { name: "Redis", icon: SiRedis },
      { name: "Kafka", icon: SiApachekafka }
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
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="flex items-center gap-3 p-4 bg-white/5 backdrop-blur-md rounded-lg border border-white/10 hover:border-primary/30 transition-all group"
            >
              <div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <skill.icon className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground group-hover:text-foreground transition-colors">
                {skill.name}
              </span>
            </motion.div>
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
                      <span className="text-primary font-bold bg-primary/10 px-4 py-1 rounded-full text-xs tracking-wider uppercase">2010 - 2013</span>
                    </div>
                    <p className="text-xl font-medium mb-1 text-foreground">Computer Science</p>
                    <p className="text-muted-foreground text-sm uppercase tracking-wider font-light">Northeastern University</p>
                </div>
            </div>
        </motion.div>
      </div>
    </section>
  );
}
