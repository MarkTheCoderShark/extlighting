import { Users } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { teamMembers, type TeamMember } from "@/lib/data/team";
import { cn } from "@/lib/utils";

interface TeamSectionProps {
  className?: string;
  maxMembers?: number;
  title?: string;
  subtitle?: string;
}

function TeamMemberCard({ member }: { member: TeamMember }) {
  const initials = member.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <div className="group relative rounded-2xl bg-white p-6 shadow-sm border border-charcoal-100 hover:shadow-lg hover:border-gold-200 transition-all">
      <div className="flex items-start gap-4">
        <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-gold-600 to-gold-700 text-white text-xl font-bold">
          {initials}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-charcoal-900 group-hover:text-gold-700 transition-colors">
            {member.name}
          </h3>
          <p className="text-sm text-gold-700 font-medium">{member.role}</p>
          <p className="text-sm text-charcoal-500 mt-1">
            {member.yearsExperience}+ years experience
          </p>
        </div>
      </div>
      <p className="mt-4 text-sm text-charcoal-600 leading-relaxed">
        {member.bio}
      </p>
      {member.certifications && member.certifications.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {member.certifications.map((cert) => (
            <span
              key={cert}
              className="inline-flex items-center rounded-full bg-gold-50 px-2.5 py-0.5 text-xs font-medium text-gold-800"
            >
              {cert}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export function TeamSection({
  className,
  maxMembers = 3,
  title = "Meet Our Expert Team",
  subtitle = "Factory-trained professionals dedicated to excellence in every installation.",
}: TeamSectionProps) {
  const displayMembers = teamMembers.slice(0, maxMembers);

  return (
    <section className={cn("section bg-background-alt", className)}>
      <div className="container">
        <SectionHeading
          title={title}
          subtitle={subtitle}
          align="center"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {displayMembers.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
        <div className="mt-10 flex items-center justify-center gap-8 text-center">
          <div className="flex items-center gap-2 text-charcoal-600">
            <Users className="h-5 w-5 text-gold-700" />
            <span className="text-sm font-medium">
              Licensed &amp; Insured Team
            </span>
          </div>
          <div className="flex items-center gap-2 text-charcoal-600">
            <span className="text-sm font-medium">
              Background Checked &amp; Drug Tested
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
