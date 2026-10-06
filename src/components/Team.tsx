import { Github, Linkedin } from "lucide-react";
import { team } from "../data/team";
import type { Member } from "../data/team";
import { Asset, External, Reveal } from "./ui";

function MemberCard({ member, index }: { member: Member; index: number }) {
  return (
    <Reveal delay={index * 0.035} className="member-wrapper">
      <article className={`member-card member-${index % 5}`}>
        <div className="member-portrait">
          <div className="portrait-background" aria-hidden="true" />
          <Asset
            folder="team"
            filename={member.photo}
            alt={`Foto de ${member.name}`}
            className="member-photo"
            fallback={
              <span className="member-initials" aria-hidden="true">
                {member.initials}
              </span>
            }
          />
        </div>
        <div className="member-info">
          <h3>{member.name}</h3>
          {member.specialty && (
            <p className="member-specialty">{member.specialty}</p>
          )}
          <div className="member-social">
            <External
              href={member.linkedin}
              label={`LinkedIn de ${member.name}`}
              className="social-link"
            >
              <Linkedin size={19} />
            </External>
            <External
              href={member.github}
              label={`GitHub de ${member.name}`}
              className="social-link"
            >
              <Github size={19} />
            </External>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export function Team() {
  return (
    <section
      className="team-section container"
      id="equipe"
      aria-labelledby="team-title"
    >
      <Reveal>
        <h2 className="section-title" id="team-title">
          Quem faz a NEXUS<span>.</span>
        </h2>
      </Reveal>
      <div className="team-grid">
        {team.map((member, index) => (
          <MemberCard key={member.id} member={member} index={index} />
        ))}
      </div>
    </section>
  );
}
