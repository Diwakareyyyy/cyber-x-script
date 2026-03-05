import { motion } from "framer-motion";
import { ChevronDown, Shield, Code } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center circuit-bg overflow-hidden">
        {/* Overlay */}
        <div className="absolute inset-0 bg-background/70" />

        {/* Animated grid lines */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={`h-${i}`}
              className="absolute h-px w-full"
              style={{
                top: `${20 + i * 15}%`,
                background: `linear-gradient(90deg, transparent, hsl(180 100% 50% / 0.1), transparent)`,
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.5, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: i * 0.5 }}
            />
          ))}
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          {/* College Name */}
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-heading text-xs md:text-sm tracking-[0.4em] text-primary mb-8 uppercase"
          >
            Department of Computer Science & Engineering
          </motion.p>

          {/* Club Names */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black leading-tight mt-2">
              <span className="text-neon-green">Cyber </span>
              <span className="text-foreground">Knights</span>
            </h1>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black leading-tight">
              <span className="text-neon-cyan">Script </span>
              <span className="text-foreground">Soldiers</span>
            </h1> 
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="font-body text-lg md:text-xl text-muted-foreground mt-8 max-w-2xl mx-auto italic"
          >
            Two elite clubs. One mission. Pushing the boundaries of code, security, and innovation.
          </motion.p>

          {/* Club cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col md:flex-row gap-6 justify-center mt-12"
          >
            <Link to="/about" className="glass-card neon-border-green hover-glow rounded-xl p-6 max-w-sm text-left group">
              <div className="flex items-center gap-3 mb-3">
                <Shield className="text-secondary" size={28} />
                <h3 className="font-heading text-lg font-bold text-secondary">Cyber Knights</h3>
              </div>
              <p className="text-muted-foreground text-sm font-body">
                Guardians of the digital realm. Defending systems through security and ethical hacking.
              </p>
            </Link>
            
            <Link to="/about#script-soldiers" className="glass-card neon-border hover-glow rounded-xl p-6 max-w-sm text-left group">
              <div className="flex items-center gap-3 mb-3">
                <Code className="text-primary" size={28} />
                <h3 className="font-heading text-lg font-bold text-primary">Script Soldiers</h3>
              </div>
              <p className="text-muted-foreground text-sm font-body">
                Masters of code. Building the future through algorithms, development, and innovation.
              </p>
            </Link>

            
          </motion.div>

          {/* Explore button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="mt-16"
          >
            <Link
              to="/about"
              className="inline-flex flex-col items-center gap-2 text-primary font-heading text-sm tracking-[0.3em] hover:text-foreground transition-colors"
            >
              EXPLORE
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ChevronDown size={20} />
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
