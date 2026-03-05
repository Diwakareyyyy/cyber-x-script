import { Mail, Instagram } from "lucide-react";
import { motion } from "framer-motion";

const founders = [
  "Diwakar S",
  "Saravanan V",
  "Shanmuga Sundaram S",
  "Vikram A",
];

const Footer = () => {
  return (
    <footer className="relative border-t border-border bg-card">
      <div className="glow-line mb-8" />
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-heading text-xl font-bold mb-3">
              <span className="text-neon-cyan">CSE</span>
              <span className="text-neon-green">CLUBS</span>
            </h3>
            <p className="text-muted-foreground font-body text-sm leading-relaxed">
              Department of Computer Science & Engineering
            </p>
            <p className="text-muted-foreground font-body text-sm">
              Cyber Knights & Script Soldiers
            </p>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-heading text-sm tracking-wider mb-4 text-primary">CONTACT</h4>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:cseclubs@college.edu"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                <Mail size={16} />
                periitcseclub@gmail.com
              </a>
              <a
                href="https://instagram.com/cseclubs"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-secondary transition-colors text-sm"
              >
                <Instagram size={16} />
                @cseclubs
              </a>
            </div>
          </motion.div>

          {/* Established */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-heading text-sm tracking-wider mb-4 text-primary">ESTABLISHED BY</h4>
            <div className="flex flex-col gap-1">
              {founders.map((name) => (
                <p key={name} className="text-sm text-muted-foreground font-body">
                  {name}
                </p>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="glow-line mt-8 mb-4" />
        <p className="text-center text-xs text-muted-foreground font-mono tracking-wider">
          © {new Date().getFullYear()} CSE CLUBS — ALL RIGHTS RESERVED
        </p>
      </div>
    </footer>
  );
};

export default Footer;
