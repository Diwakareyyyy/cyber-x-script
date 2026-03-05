import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";

// These are placeholder paths - replace with actual photos in the /gallery/ folder
const galleryRow1 = Array.from({ length: 10 }, (_, i) => `/gallery/row1/photo${i + 1}.jpg`);
const galleryRow2 = Array.from({ length: 10 }, (_, i) => `/gallery/row2/photo${i + 1}.jpg`);

const PlaceholderImage = ({ index }: { index: number }) => (
  <div className="flex-shrink-0 w-72 h-48 rounded-lg bg-muted flex items-center justify-center neon-border overflow-hidden">
    <div className="text-center">
      <p className="font-heading text-xs text-primary">EVENT PHOTO</p>
      <p className="font-mono text-xs text-muted-foreground mt-1">#{index + 1}</p>
    </div>
  </div>
);

const Gallery = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6">
        <SectionHeading
          title="Gallery"
          subtitle="Moments captured from our events and activities."
        />
      </div>

      {/* Scrolling Row 1 - Left */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="overflow-hidden mb-6"
      >
        <div className="scroll-track">
          {[...galleryRow1, ...galleryRow1].map((photo, i) => (
            <div key={`r1-${i}`} className="flex-shrink-0 w-72 h-48 rounded-lg overflow-hidden neon-border">
              <img
                src={photo}
                alt={`Gallery ${i + 1}`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const parent = (e.target as HTMLElement).parentElement;
                  if (parent) {
                    parent.innerHTML = `<div class="w-full h-full bg-muted flex items-center justify-center"><div class="text-center"><p class="font-heading text-xs text-neon-cyan" style="color:hsl(180,100%,50%)">EVENT PHOTO</p><p class="font-mono text-xs" style="color:hsl(180,20%,60%)">#${(i % galleryRow1.length) + 1}</p></div></div>`;
                  }
                }}
              />
            </div>
          ))}
        </div>
      </motion.div>

      {/* Scrolling Row 2 - Right */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="overflow-hidden"
      >
        <div className="scroll-track-reverse">
          {[...galleryRow2, ...galleryRow2].map((photo, i) => (
            <div key={`r2-${i}`} className="flex-shrink-0 w-72 h-48 rounded-lg overflow-hidden neon-border-green">
              <img
                src={photo}
                alt={`Gallery ${i + 1}`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const parent = (e.target as HTMLElement).parentElement;
                  if (parent) {
                    parent.innerHTML = `<div class="w-full h-full bg-muted flex items-center justify-center"><div class="text-center"><p class="font-heading text-xs" style="color:hsl(135,100%,50%)">EVENT PHOTO</p><p class="font-mono text-xs" style="color:hsl(180,20%,60%)">#${(i % galleryRow2.length) + 1}</p></div></div>`;
                  }
                }}
              />
            </div>
          ))}
        </div>
      </motion.div>

      <div className="container mx-auto px-6 mt-12">
        <div className="glass-card neon-border rounded-lg p-6 text-center">
          <p className="font-mono text-sm text-muted-foreground">
            
            <span className="text-primary">See what's happening</span> and{" "}
            <span className="text-secondary">join us and experience our upcoming events.</span> 
          </p>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
