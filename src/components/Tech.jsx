import { BallCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { technologies } from "../constants"

const Tech = () => {
  return (
    <div className="tech-wrapper inverse-hue-shift-animation flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((tech) => (
        <div className="tech-item" key={tech.name}>
          <div className="w-28 h-28">
            <BallCanvas icon={tech.icon} />
          </div>
          <div className="text-center mt-2">{tech.name}</div>
        </div>
      ))}
    </div>
  );
}

export default SectionWrapper(Tech, "");
