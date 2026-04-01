import { motion } from "framer-motion";
import { Link, useRoute } from "wouter";
import { ArrowLeft, ExternalLink, Github, Calendar, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import { useEffect } from "react";
import project1 from "@assets/generated_images/2.png";
import project2 from "@assets/generated_images/3.png";
import project3 from "@assets/generated_images/1.png";
import project4 from "@assets/generated_images/5.png";
import project5 from "@assets/generated_images/6.png";
import project6 from "@assets/generated_images/4.png";
import project7 from "@assets/generated_images/7.png";
import project8 from "@assets/generated_images/8.png";
import project9 from "@assets/generated_images/9.png";
import project10 from "@assets/generated_images/10.png";
import project11 from "@assets/generated_images/11.png";
import project12 from "@assets/generated_images/12.png";
import project13 from "@assets/generated_images/13.png";
import project14 from "@assets/generated_images/14.png";
// Project data store - typically this would be in a separate data file or fetched
const projectsData = {
  "enterprise-ai": {
    title: "Earth Hero",
    company: "E-Commerce",
    date: "",
    image: project3,
    description: "EarthHero is an online marketplace dedicated to making sustainable shopping simple and accessible. The platform curates a wide range of eco-friendly and ethically sourced products, providing detailed information on environmental impact, packaging, and sourcing practices. By partnering with brands committed to sustainability, EarthHero helps consumers make conscious purchasing decisions while reducing their ecological footprint.",
    role: "Senior Full Stack Developer",
    technologies: ["Shopify / Shopify Plus", "Liquid", "JavaScript", "REST / GraphQL API integration", "Responsive design & UI/UX", "SEO (on-page optimization, metadata, structured data)"],
    features: [
      "In this project, I was primarily responsible for customizing and developing the Shopify storefront. This included modifying Shopify themes with Liquid, TailwinCSS JavaScript features, and implementing SEO best practices to improve search engine visibility, optimize page load speed, and enhance metadata for products and categories.",
      "One of the key features I worked on was the product filtering and discovery system, which allowed users to search and sort products based on sustainability attributes, categories, and environmental certifications. I also integrated Shopify APIs to fetch product data and ensure smooth functionality across the site.",
      "Overall, working on EarthHero strengthened my skills in Shopify theme development, frontend interactivity, API integration, responsive design, and SEO optimization, creating a user-friendly and discoverable e-commerce experience.",

    ],
    links: { demo: "https://earthhero.com/", github: "#" }
  },
  "vehicle-claims": {
    title: "BackRoads",
    company: "Traveling",
    date: "",
    image: project1,
    description: "Backroads is an active travel website specializing in biking, hiking, walking, and multi-adventure tours across the globe. The platform provides detailed travel itineraries, booking capabilities, and rich content to help users plan and enjoy immersive adventure experiences while ensuring seamless access to travel information and services.",
    role: "Senior Wordpress Developer",
    technologies: ["Drupal (CMS development)", "PHP", "WordPress", "JavaScript & JS libraries", "SEO optimization", "Analytics"],
    features: [
      "In this project, I was primarily responsible for enhancing and customizing the Backroads digital platform. This included developing and modifying Drupal and WordPress templates, implementing interactive features with JavaScript, and integrating analytics tools to track user behavior and engagement. I also focused on SEO optimization and responsive design, ensuring the site delivered a fast, accessible, and discoverable experience across devices.",
      "One of the key features I worked on was the interactive trip search and filtering system, which allowed users to explore trips based on destination, activity type, and travel dates. I also integrated analytics tools such as Google Analytics and Facebook Pixel to provide insights into user interactions and conversion metrics.",
      "Overall, working on Backroads strengthened my skills in CMS customization, full-stack web enhancements, interactive UI development, SEO optimization, and analytics integration, enabling a scalable and engaging platform for adventure travelers worldwide.",
      
    ],
    links: { demo: "https://www.backroads.com/", github: "#" }
  },
  "chatbot-system": {
    title: "KHealth",
    company: "HealthCare",
    date: "",
    image: project2,
    description: "K Health is a clinical artificial intelligence (AI) platform that provides personalized virtual primary care and health insights. It combines AI‑driven symptom analysis with real medical data and licensed clinicians to deliver 24/7 access to medical guidance, diagnoses, treatment options, and ongoing care plans via mobile and web applications. The AI system leverages large datasets of anonymized patient records to generate data‑driven insights and support both patients and physicians in delivering high‑quality healthcare.",
    role: "Full Stack Developer",
    technologies: ["AI/ML integration", "Python", "Django", "React", "React Native","REST API development","Cloud Platforms","AWS", "Docker","Typescript", "PostgreSQL"],
    features: [
      "In this project, I was primarily responsible for integrating AI-driven features and backend data workflows that powered the clinical intelligence of the platform. I implemented machine learning model integration, built robust data pipelines to process patient information securely, and developed backend services to deliver real-time predictions and personalized health guidance.",
      "One of the key features I worked on was the AI symptom analysis and recommendation system, which required processing large datasets and connecting predictive outputs to both web and mobile interfaces. I also ensured the system adhered to HIPAA-compliant security standards, allowing safe handling of sensitive health data.",
      "Overall, working on K Health strengthened my skills in AI/ML integration, Python backend development, React frontend interfaces, database management, API development, cloud deployment, and secure handling of sensitive healthcare data. This experience gave me deep insight into building scalable, intelligent healthcare platforms that combine machine learning with user-facing applications.",
      "Multi-channel support (Web, Messenger, WhatsApp)",
      "Automated ticket creation in CRM"
    ],
    links: { demo: "https://www.khealth.com/", github: "#" }
  },
  "mobile-arch": {
    title: "Just-Eat-Food-Delivery",
    company: "Food Delivery | Restaurant",
    date: "",
    image: project4,
    description: "Just Eat is a leading food and grocery delivery platform that enables users to browse menus from thousands of local restaurants, supermarkets, and stores, place orders for food or essentials, and have them delivered directly to their doorstep. The app provides a seamless on‑demand ordering experience with restaurant discovery, personalized offers, real‑time tracking, and multiple payment options for users in numerous markets. ",
    role: "Senior Android & Mobile Developer",
    technologies: ["Swift", "Kotlin", "React Native",  "JavaScript / TypeScript", "Push Notifications", "GPS / Location Services", "Payment Gateway Integration","UI/UX Design","Testing / QA","Clean Architecture"],
    features: [
      "In this project, I was responsible for developing the entire mobile application from start to finish, including both frontend and backend components. I implemented the restaurant discovery and search interface, integrated real-time order tracking with GPS services, and developed push notification workflows to update users on order status, driver assignments, and delivery progress.",
      "I also handled secure payment processing, supporting multiple payment methods, and optimized the checkout and ordering flow for seamless user experience. From UI/UX design to API integration and backend services, I built the app end-to-end to ensure smooth performance, responsiveness, and scalability.",
      "One of the key features I implemented was the real-time order tracking system, providing users with accurate ETAs and live updates from order confirmation to delivery. I also designed and developed the app’s intuitive navigation and responsive UI, ensuring high user engagement and satisfaction.",
      "Overall, building Just Eat from the ground up strengthened my expertise in full-stack mobile development, real-time systems, API integration, geolocation services, secure payment workflows, and user-centric design, delivering a high-scale, consumer-facing delivery platform.",
    
    ],
    links: { demo: "https://apps.apple.com/us/app/just-eat-food-delivery/id566347057", github: "#" }
  },
  "cloud-infra": {
    title: "Smith & Real Estate",
    company: "Real Estate",
    date: "",
    image: project5,
    description: "Smith & Associates is a real estate brokerage serving clients with personalized property services, market insights, and client‑focused real estate solutions. The company embraces digital tools and advertising platforms to showcase properties, support agents with automated marketing campaigns, and strengthen its online presence in a competitive market.",
    role: "Full Stack & AI developer",
    technologies: ["AI Chatbot", "Google Cloud CDN", "PHP", "Bootstrap", "Python"],
    features: [
      "In this project, I was responsible for developing and enhancing the company website from start to finish. I built a responsive, user‑friendly web interface using modern web technologies and ensured the site delivered strong performance, cross‑device compatibility, and integrated analytics to support marketing and business goals.",
      "One of the key focuses was implementing interactive UI components and layouts with Bootstrap to ensure the site scaled well across desktop and mobile. I also integrated Google Analytics and Google Ads tracking to measure user behavior and support targeted marketing campaigns. In addition, I implemented real‑time live chat support using Tawk.to and ensured the site was served through a fast CDN (Google Cloud CDN) for optimal performance.",
      "Security and performance were integral parts of the project, including implementing HSTS for HTTPS enforcement and optimizing assets with Webpack and lazy loading strategies (e.g., LazySizes) to improve load times.",
      "Overall, working on Smith & Associates’ website strengthened my skills in modern frontend development, third‑party integration, responsive design, performance optimization, and analytics implementation, resulting in a professional, scalable web presence for a client‑focused real estate firm.",
    ],
    links: { demo: "https://www.smithandassociates.com/", github: "#" }
  },
  "data-pipelines": {
    title: "Monzo",
    company: "Finance",
    date: "2017",
    image: project6,
    description: "Monzo is a British digital bank (neobank) that operates entirely online, offering mobile-first banking services including current accounts, payments, savings, and advanced financial tools. It stands out for its intuitive app experience, real-time transaction processing, savings features, budgeting tools, and transparency in financial services all without physical branch infrastructure. ",
    role: "Backend & API Developer (Golang) – Fintech / Banking Platform",
    technologies: ["Python", "Go (Golang)", "Microservices Architecture","RESTful API Development", "PostgreSQL", "AWS", "Data Consistency & Security", "Financial Systems Security", "High-Performance Backend Systems"],
    features: [
      "In this project, I was responsible for contributing to both backend and API development for Monzo’s banking platform. I worked on building and scaling microservices using Go (Golang) to handle high-volume real-time transactions and banking operations. These services were designed to be highly available, reliable, and compliant with financial regulations, running on cloud infrastructure (AWS) for scalability and operational resilience. ",
      "In addition, I collaborated with cross-functional teams to build and maintain RESTful APIs that power both the mobile applications (iOS/Android) and internal services. I ensured strict security, compliance (including banking regulations), and performance standards were met throughout the system.",
      "One of the core systems I helped develop was the transaction processing and event streaming pipeline, which used Apache Kafka to ensure real-time updates across the platform  such as instantaneous balance changes, notifications, and analytics tracking. I also contributed to database design and integration using PostgreSQL to support consistent and secure financial data storage.",
      "Overall, working on Monzo strengthened my skills in building secure, scalable backend systems, real-time distributed services, cloud infrastructure, and high-performance APIs for a production-grade fintech platform used by millions of customers."
    ],
    links: { demo: "https://monzo.com", github: "#" }
  },

  "data-pipelines1": {
    title: "Aily - Real Time Intelligence For Employee",
    company: "AI Platform",
    date: "",
    image: project7,
    description: "Aily Labs is an AI-powered Decision Intelligence platform designed to help enterprises turn complex data into actionable insights, optimize resources, and make smarter decisions across multiple business functions.",
    role: "AI & Full Stack Engineer",
    technologies: ["AI/ML model integration, data processing pipelines","Data Integration", "Real-time insights dashboards, data visualization", "Node.js, backend integration","Python", "SQL", "Airflow", "Data Processing Pipelines","Enterprise Data Workflows"],
    features: [
    
      "In this project, I was primarily responsible for implementing AI-driven features and data processing workflows. This involved integrating machine learning models, designing data pipelines, and building systems to deliver real-time, actionable insights to decision-makers.",
      "One of the key features I worked on was the real-time insights dashboard, which processed complex datasets using AI algorithms and presented the results through intuitive visualizations. I also contributed to optimizing model integration and ensuring reliable data flow between the backend and the interface.",
      "Overall, working on this project strengthened my skills in AI/ML integration, data workflow design, and building intelligent systems for enterprise-scale decision-making.",
      
    ],
    links: { demo: "https://www.ailylabs.com/", github: "#" }
  },

  "data-pipelines9": {
    title: "BrightHive",
    company: "",
    date: "",
    image: project9,
    description: "BrightHive is a platform that enables secure data sharing, workflow design, and real-time monitoring through a user-friendly full-stack interface.",
    role: "",
    technologies:["React", "Node.js"],
    features: [
    
      "BrightHive is a platform designed to unify and automate critical processes for trusted data sharing and management. It aims to fill the sharing and collaboration gap in modern data stacks. BrightHive enables data teams to connect and collaborate, allowing them to build impactful data products in half the time.",
      "The platform provides a secure and governed workspace for metadata sharing, data workflow design, trusted execution, and monitored use. It's designed to increase the reach and impact of existing data stacks by combining them with others in a trusted environment.",
      "In this project, I was responsible for developing a user-friendly interface using React for the frontend. This involved creating various features such as user authentication, data workflow design interfaces, and system monitoring dashboards.",
      "On the backend, I used Node.js to build a robust and scalable server that could handle multiple requests simultaneously. I implemented various APIs for different functionalities such as user authentication, metadata management, and data workflow execution. I also integrated a database to store and manage user data and metadata.",
      "One of the key features I worked on was the data workflow design system. This involved creating a drag-and-drop interface for users to design their data workflows, and implementing a system on the backend to execute these workflows in a trusted environment.",
      "I also worked on the system monitoring dashboard, which involved creating real-time visualizations of system usage and performance. This required a deep understanding of both the technical aspects of system monitoring and the user requirements for this feature.",
      "Overall, working on this project gave me a deep understanding of the challenges and opportunities in the data management space, and I believe this experience would be valuable in future projects in this area."
      
    ],
    links: { demo: "https://www.brighthive.io/", github: "#" }
  },
  "data-pipelines10": {
    title: "NextME",
    company: "NextME",
    date: "",
    image: project10,
    description: "NextME is a comprehensive appointment, waitlist, and queue management system designed for businesses. It enables efficient management of waitlists and appointments, provides real-time guest engagement, and offers tools to enhance customer service and business growth.",
    role: "Senior Full Stack Web & Mobile APP Developer",
    technologies: ["React", "React Native"],
    features: [
    
      "My role involved using React, a popular library for building UIs, to develop the user interface components for the app. My tasks encompassed the creation of interactive features like check-in kiosks and virtual waiting rooms, the integration of APIs to facilitate data synchronization across various devices, and the establishment of reporting mechanisms for producing comprehensive daily, weekly, and monthly customer service reports. The aim of these responsibilities was to ensure a fluid user experience, enhance application performance, and maintain platform reliability.",
      
    ],
    links: { demo: "https://nextmeapp.com/", github: "#" }
  },
  "data-pipelines11": {
    title: "KnoCommerce",
    company:"E-Commerce",
    date: "",
    image: project11,
    description: "KnoCommerce is a customer survey platform specifically designed for eCommerce brands. It provides a suite of tools to help businesses understand their customers better, with features like abandoned cart, attribution, and post-purchase surveys. The platform integrates with popular eCommerce platforms like Shopify and Klaviyo, and it's used by over 1,800 direct-to-consumer brands.",
    role: "Full Stack Developer",
    technologies: ["Vue", "Node"],
    features: [
    
      "On the frontend, I used Vue.js to create interactive and dynamic user interfaces for the survey tools and reporting dashboards. This involves creating components for different question types, response analytics, and data visualization.",
      "On the backend, using Node.js, I worked on building secure and scalable APIs to handle data transactions. This includes managing survey data, user responses, and integrations with other platforms. I also participated in the development of the platform's distinctive features, such as multi-touch attribution templates, advanced audience segmentation, and automatic generation of promotional codes.",
      "Overall, working on this platform provided me with a deep understanding of both the technical aspects of web development and the business needs of eCommerce brands.",
      
    ],
    links: { demo: "https://knocommerce.com/", github: "#" }
  },
  "data-pipelines12": {
    title: "Breakthru",
    company: "",
    date: "",
    image: project12,
    description: "The Breakthru app is a specialized educational tool designed for students. It offers insights into various companies, initiatives, products, and job opportunities. What sets Breakthru apart is its unique feature that allows students to earn money as they learn about these topics. This feature could be especially advantageous for students who are saving for college-related expenses or other needs.",
    role: "Senior React Native Developer",
    technologies: ["React Native"],
    features: [
    
      "Working on the Breakthru app was a rewarding and challenging experience. React Native was a great choice for this project due to its cross-platform capabilities, allowing us to develop the app for both iOS and Android simultaneously. This saved us a significant amount of time and resources.",
      "The app's unique feature of allowing students to earn money while learning about various companies and initiatives required careful planning and implementation. We had to ensure the app was not only educational but also engaging and user-friendly to keep the students motivated.",
      "One of my challenges was integrating the 'earn and daily opportunity' feature. It required me to create a system that could regularly update and provide new learning opportunities while also tracking the earnings of each user accurately.",
      "Despite the challenges, seeing the app come to life and provide value to students made the experience worthwhile. The feedback from users, especially from students who were able to save for their college expenses, was particularly rewarding."

      
    ],
    links: { demo: "https://www.joinbreakthru.com/", github: "#" }
  },
  "data-pipelines13": {
    title: "Tax Function",
    company: "AI Platform",
    date: "",
    image: project13,
    description: "TFLLC Tax function is a platform that has been developed to provide companies with effective solutions for their tax planning and documentation, so as to save time and human mistakes.",
    role: "Full Stack .NET Engineer",
    technologies: ["React", "Kendo UI", ".NET Core"],
    features: [
    
      "The system can be used by multiple companies at the same time and within each company, multiple user types can be defined.",
      "The project addressed challenges like tenant configuration, Azure Logic App integration, and Azure Portal settings by enabling AD user login, providing a prebuilt login UI, and scheduling tasks with Logic Apps.",
      "This resulted in over 90% website performance, optimized reports, 24/7 support, complex calculation reports, and a responsive UI managed with Bootstrap CSS."
      
    ],
    links: { demo: "https://www.taxfunction.com/", github: "#" }
  },
  
   "data-pipelines14": {
    title: "Twilio SMS Platform",
    company: "Financial",
    date: "",
    image: project14,
    description: "SCL Twilio SMS Platform is a high-volume, fully compliant outbound messaging system for financial services, enabling 20,000+ daily messages, real-time monitoring, and end-to-end campaign management.",
    role: "Senior Full-Stack Developer",
    technologies:  ["React","Twilio", "A2P 10 DLC", "TypeScript", "SMS", "Node.js"],
    features: [
      "A2P 10 DLC registeration, approved",
      "Built  a high-volume, fully compliant outbound messaging system for financial services,Daily 20000 Messages, Real Time Monitoring"
     
    ],
    links: { demo: "https://app.sclcapital.io/", github: "#" }
  }
};

export default function ProjectDetail() {
  const [match, params] = useRoute("/project/:id");
  const projectId = params?.id;
  const project = projectId ? projectsData[projectId as keyof typeof projectsData] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Project Not Found</h2>
          <Link href="/">
            <a className="text-primary hover:underline">Return Home</a>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Navbar />
      
      <main className="pt-24 pb-20">
        <div className="container-width">
          <Link href="/#projects">
            <a className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 group">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Projects
            </a>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Header */}
            <div className="mb-10">
              <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                <h1 className="text-4xl md:text-5xl font-bold font-heading">{project.title}</h1>
                <div className="hidden md:block w-px h-8 bg-border"></div>
                <div className="text-xl text-primary font-medium">{project.company}</div>
              </div>
              
              <div className="flex flex-wrap gap-6 text-muted-foreground text-sm">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {project.date}
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-foreground">Role:</span> {project.role}
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="rounded-2xl overflow-hidden border border-border/50 shadow-2xl mb-12 bg-secondary/20 aspect-video relative flex items-center justify-center">
              <img 
                src={project.image} 
                alt={project.title} 
                className="max-w-full max-h-full object-contain"
              />
            </div>

            <div className="grid lg:grid-cols-[1fr_400px] gap-12">
              {/* Main Content */}
              <div className="space-y-16">
                <section className="relative">
                  <div className="absolute -left-6 top-0 bottom-0 w-1 bg-primary/20 rounded-full" />
                  <h2 className="text-3xl font-bold mb-6 tracking-tight">Project Overview</h2>
                  <p className="text-xl text-muted-foreground leading-relaxed font-light">
                    <span className="inline-block w-[2ch]" />{project.description}
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-bold mb-8 tracking-tight">Core Implementation</h2>
                  <div className="grid gap-6">
                    {project.features.map((feature, idx) => (
                      <motion.div 
                        key={idx} 
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex gap-4 p-6 rounded-2xl bg-secondary/10 border border-border/30 hover:bg-secondary/20 transition-colors group"
                      >
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                          <CheckCircle2 className="w-5 h-5 text-primary" />
                        </div>
                        <span className="text-foreground/90 text-lg leading-snug">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </section>
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                <div className="p-8 rounded-2xl bg-card/50 backdrop-blur-md border border-border shadow-xl sticky top-24">
                  <h3 className="font-bold mb-6 text-xl tracking-tight border-b border-border pb-4">Stack & Tools</h3>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1.5 rounded-lg bg-primary/5 text-primary text-xs font-bold border border-primary/10 uppercase tracking-widest">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <h3 className="font-bold mb-6 text-xl tracking-tight border-b border-border pb-4">Availability</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <motion.a 
                      href={project.links.demo} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      animate={{ 
                        boxShadow: ["0 0 0px rgba(59,130,246,0)", "0 0 20px rgba(59,130,246,0.5)", "0 0 0px rgba(59,130,246,0)"],
                        scale: [1, 1.02, 1]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity, 
                        ease: "easeInOut" 
                      }}
                      className="flex items-center justify-between p-4 rounded-xl bg-primary text-primary-foreground hover:opacity-90 transition-all font-bold group shadow-lg"
                    >
                      <span>Launch Project</span>
                      <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </motion.a>
                    {project.links.github && project.links.github !== "#" && (
                      <motion.a 
                        href={project.links.github} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center justify-between p-4 rounded-xl bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-all font-bold group shadow-lg border border-border"
                      >
                        <span>View Source</span>
                        <Github className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Project Selection Banner */}
            <div className="mt-32 pt-16 border-t border-border/50">
              <h3 className="text-2xl font-bold mb-8 tracking-tight px-4 uppercase italic tracking-tighter">View other projects</h3>
              <div className="overflow-hidden relative group">
                <div className="flex animate-marquee hover:[animation-play-state:paused] whitespace-nowrap gap-6 py-4">
                  {Object.entries(projectsData).map(([id, p]) => (
                    <Link key={id} href={`/project/${id}`}>
                      <a 
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className={`shrink-0 block w-80 rounded-2xl overflow-hidden border-2 transition-all hover:scale-105 ${projectId === id ? 'border-primary shadow-lg shadow-primary/20' : 'border-border/50 opacity-60 hover:opacity-100'}`}
                      >
                        <div className="aspect-video relative">
                          <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                            <div>
                              <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">{p.company}</p>
                              <h4 className="text-white font-bold truncate w-full">{p.title}</h4>
                            </div>
                          </div>
                        </div>
                      </a>
                    </Link>
                  ))}
                  {/* Duplicate for seamless marquee */}
                  {Object.entries(projectsData).map(([id, p]) => (
                    <Link key={id + '-copy'} href={`/project/${id}`}>
                      <a 
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className={`shrink-0 block w-80 rounded-2xl overflow-hidden border-2 transition-all hover:scale-105 ${projectId === id ? 'border-primary shadow-lg shadow-primary/20' : 'border-border/50 opacity-60 hover:opacity-100'}`}
                      >
                        <div className="aspect-video relative">
                          <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                            <div>
                              <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">{p.company}</p>
                              <h4 className="text-white font-bold truncate w-full">{p.title}</h4>
                            </div>
                          </div>
                        </div>
                      </a>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
