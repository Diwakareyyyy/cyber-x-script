import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Linkedin, User } from "lucide-react";
import { leaders, staffCoordinators, scriptSoldiersMembers, cyberKnightsMembers } from "@/data/members";
import type { Member, Leadership } from "@/data/members";
import SectionHeading from "@/components/SectionHeading";

const MemberCard = ({ member, accentGreen }: { member: Member | Leadership; accentGreen?: boolean }) => (
  <motion.a
    href={member.linkedin}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    whileHover={{ y: -4 }}
    className={`member-card ${accentGreen ? "neon-border-green" : "neon-border"} block`}
  >
    <div className="w-20 h-20 mx-auto mb-3 rounded-full overflow-hidden bg-muted flex items-center justify-center">
      <img
        src={member.photo}
        alt={member.name}
        className="w-full h-full object-cover"
        onError={(e) => {
          (e.target as HTMLImageElement).style.display = "none";
          (e.target as HTMLImageElement).nextElementSibling?.classList.remove("hidden");
        }}
      />
      <User className="hidden text-muted-foreground" size={32} />
    </div>
    <h4 className="font-heading text-sm font-bold text-foreground">{member.name}</h4>
    <p className={`font-mono text-xs ${accentGreen ? "text-secondary" : "text-primary"}`}>{member.designation}</p>
    <p className="text-muted-foreground text-xs font-body">{member.department}</p>
    
  </motion.a>
);

const Members = () => {
  const [activeClub, setActiveClub] = useState<"cyber" | "script">("cyber");

  const members = activeClub === "cyber" ? cyberKnightsMembers : scriptSoldiersMembers;

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6">
        {/* Leadership */}
        <SectionHeading title="Leadership" subtitle="The driving force behind our clubs." />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-16">
          {leaders.map((leader) => (
            <MemberCard key={leader.name} member={leader} />
          ))}
        </div>

        {/* Staff Coordinators */}
        <SectionHeading title="Staff Coordinators" subtitle="Faculty mentors guiding our journey." accent="green" />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-xl mx-auto mb-16">
          {staffCoordinators.map((staff) => (
            <MemberCard key={staff.name} member={staff} accentGreen />
          ))}
        </div>

        {/* Club Members */}
        <SectionHeading title="Club Members" subtitle="The backbone of our community." />

        {/* Club switcher */}
        <div className="flex justify-center gap-4 mb-10">
          <button
            onClick={() => setActiveClub("cyber")}
            className={`px-6 py-3 rounded-lg font-heading text-xs tracking-wider transition-all ${
              activeClub === "cyber"
                ? "bg-secondary text-secondary-foreground"
                : "neon-border-green text-secondary hover:bg-secondary/10"
            }`}
          >
            CYBER KNIGHTS
          </button>
          <button
            onClick={() => setActiveClub("script")}
            className={`px-6 py-3 rounded-lg font-heading text-xs tracking-wider transition-all ${
              activeClub === "script"
                ? "bg-primary text-primary-foreground"
                : "neon-border text-primary hover:bg-primary/10"
            }`}
          >
            SCRIPT SOLDIERS
          </button>
          </div>

        {/* Members grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeClub}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
          >
            {members.map((member) => (
              <MemberCard
                key={member.name}
                member={member}
                accentGreen={activeClub === "cyber"}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Members;
