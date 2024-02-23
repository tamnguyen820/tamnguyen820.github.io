import SectionHeader from "./common/SectionHeader";
import ToolList from "./common/ToolList";
import ArrowUpLeft from "assets/icons/arrow-up-left.svg";
import { ProjectItem } from "data/models";
import { projectsData } from "data/projects";

const Project = (item: ProjectItem) => (
  <li className="mb-10 justify-between gap-3 sm:flex">
    <div>
      <h4 className="text-base font-medium">
        <a
          href={item.site}
          className="underline-offset-2 hover:underline"
          target="_blank"
        >
          <span>
            {item.name}
            <img
              src={ArrowUpLeft}
              alt="ArrowUpLedt"
              className="inline-block h-5 w-5 translate-y-[-1px]"
            />
          </span>
        </a>
      </h4>
      <p className="text-sm">{item.description}</p>
      <ToolList tools={item.tools} />
    </div>
    <img
      src={item.imageUrl}
      alt={`${item.name}-project-image`}
      draggable="false"
      className="mt-2 h-32 cursor-auto rounded-lg border-4 border-[#1d4a2f] sm:mt-0"
    />
  </li>
);

const Projects = () => (
  <section id="projects" className="mt-20">
    <div>
      <SectionHeader name="Projects" href="#projects" />
      <ul>
        {projectsData.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </ul>
    </div>
  </section>
);

export default Projects;
