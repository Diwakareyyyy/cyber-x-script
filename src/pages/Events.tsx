import { motion } from "framer-motion";
import { useState } from "react";
import { Calendar, Clock, MapPin, Download, ExternalLink, X} from "lucide-react";
import { events } from "@/data/events";
import SectionHeading from "@/components/SectionHeading";

const Events = () => {
  const pastEvents = events.filter((e) => e.type === "past");
  const upcomingEvents = events.filter((e) => e.type === "upcoming");
  const [selectedPoster, setSelectedPoster] = useState<string | null>(null);
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6">
        {/* Upcoming Events */}
        {upcomingEvents.length > 0 && (
          <div className="mb-20">
            <SectionHeading title="Upcoming Events" subtitle="Don't miss out — register now!" accent="green" />
            {upcomingEvents.map((event, i) => (
              <motion.div
  key={event.id}
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: i * 0.1 }}
  className="event-card neon-border-green p-8 mb-6 cursor-pointer"
  onClick={() => event.poster && setSelectedPoster(event.poster)}
>
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                  <div className="flex-1">
                    <span className="font-mono text-xs tracking-wider text-secondary mb-2 inline-block">
                      {event.club.toUpperCase()}
                    </span>
                    <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">
                      {event.title}
                    </h3>
                    <p className="text-muted-foreground font-body mb-4">{event.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1"><Calendar size={14} /> {event.date}</span>
                      <span className="flex items-center gap-1"><Clock size={14} /> {event.time}</span>
                      <span className="flex items-center gap-1"><MapPin size={14} /> {event.venue}</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 shrink-0">
                    {event.registrationLink && (
                      <a
                        href={event.registrationLink}
                        onClick={(e) => e.stopPropagation()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-heading text-xs tracking-wider bg-secondary text-secondary-foreground hover:opacity-90 transition-opacity"
                      >
                        REGISTER <ExternalLink size={14} />
                      </a>
                    )}
                    {event.invitationFile && (
                      <a
                        href={event.invitationFile}
                        download
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-heading text-xs tracking-wider neon-border-green text-secondary hover:bg-secondary/10 transition-colors"
                      >
                        INVITATION <Download size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Past Events */}
        <SectionHeading title="Past Events" subtitle="A look back at our incredible journey." />
        <div className="grid md:grid-cols-2 gap-6">
          {pastEvents.map((event, i) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="event-card neon-border p-6 cursor-pointer"
              onClick={() => event.poster && setSelectedPoster(event.poster)}
            >
              <span className="font-mono text-xs tracking-wider text-primary mb-2 inline-block">
                {event.club.toUpperCase()}
              </span>
              <h3 className="font-heading text-xl font-bold text-foreground mb-2">{event.title}</h3>
              <p className="text-muted-foreground font-body text-sm mb-4">{event.description}</p>
              <div className="flex flex-wrap gap-3 text-xs text-muted-foreground mb-4">
                <span className="flex items-center gap-1"><Calendar size={12} /> {event.date}</span>
                <span className="flex items-center gap-1"><Clock size={12} /> {event.time}</span>
                <span className="flex items-center gap-1"><MapPin size={12} /> {event.venue}</span>
              </div>
              
            </motion.div>
          ))}
        </div>
      </div>
      {selectedPoster && (
  <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50">
    
    <div className="relative">
      
      {/* ❌ Close Button */}
      <button
        onClick={() => setSelectedPoster(null)}
        className="absolute -top-4 -right-4 bg-background text-foreground rounded-full p-2 shadow-lg hover:scale-110 transition-transform"
      >
        <X size={18} />
      </button>

      <motion.img
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        src={selectedPoster}
        alt="Event Poster"
        className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-2xl"
      />
      
    </div>
  </div>
)}
    </div>
  );
};

export default Events;
