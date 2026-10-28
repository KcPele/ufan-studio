import Image from "next/image";
import type { TeamMember } from "@/content/studio";
import styles from "./TeamGrid.module.css";

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export function TeamGrid({ members }: { members: TeamMember[] }) {
  return (
    <ul className={styles.grid}>
      {members.map((member, index) => (
        <li key={`${member.name}-${index}`} className={styles.member}>
          <div className={styles.photo}>
            {member.photo ? (
              <Image src={member.photo} alt={`Portrait of ${member.name}`} fill sizes="(min-width: 800px) 25vw, 50vw" className={styles.image} />
            ) : (
              <span className={styles.initials} aria-hidden="true">
                {initials(member.name)}
              </span>
            )}
          </div>
          <h3 className={styles.name}>{member.name}</h3>
          <p className={styles.role}>{member.role}</p>
          <p className={styles.bio}>{member.bio}</p>
        </li>
      ))}
    </ul>
  );
}
