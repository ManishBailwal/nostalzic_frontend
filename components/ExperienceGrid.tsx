import ExperienceCard from "./ExperienceCard";
import { experiences } from "./data";

export default function ExperienceGrid() {
  return (
    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
      {experiences.map((experience) => (
        <ExperienceCard
          key={experience.id}
          experience={experience}
        />
      ))}
    </div>
  );
}