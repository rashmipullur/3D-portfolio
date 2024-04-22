import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

// const Tech = () => {
//   return (
//     <div className="flex flex-row flex-wrap justify-center gap-10">
//       {technologies.map((technology) => (
//         <div className="w-28 h-28" key={technology.name}>
//           <BallCanvas icon={technology.icon} />
//         </div>
//       ))}
//     </div>
//   );
// };

const Tech = () => {
  const isMobile = window.matchMedia("(max-width: 500px)").matches;
  const Map = (isMobile, technologies) => {
    if (isMobile) {
      return technologies.slice(0, 4).map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ));
    } else {
      return technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ));
    }
  };
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {Map(isMobile, technologies)}
    </div>
  );
};

export default SectionWrapper(Tech, "");
