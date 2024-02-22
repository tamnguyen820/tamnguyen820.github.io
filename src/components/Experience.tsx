import SectionHeader from "./common/SectionHeader";
import ToolList from "./common/ToolList";
import ArrowUpLeft from "assets/icons/arrow-up-left.svg";
import { JobItem } from "data/models";
import { jobsData } from "data/jobs";
import { formatDate } from "utils/date";

const Job = (item: JobItem) => (
  <li className="mb-8">
    <h4 className="text-base font-medium">
      {item.title} @{" "}
      <a
        href={item.site}
        className="underline-offset-2 hover:underline"
        target="_blank"
      >
        <span>
          {item.company}
          <img
            src={ArrowUpLeft}
            alt="ArrowUpLedt"
            className="inline-block h-5 w-5 translate-y-[-1px]"
          />
        </span>
      </a>
    </h4>
    <p className="text-sm font-semibold">
      {formatDate(item.fromDate, true)} - {formatDate(item.toDate)}
    </p>
    <p
      className="text-sm"
      dangerouslySetInnerHTML={{ __html: item.description }}
    ></p>
    <ToolList tools={item.tools} />
  </li>
);

const Experience = () => (
  <section id="experience" className="mt-20">
    <div>
      <SectionHeader name="Experience" href="#experience" />
      <ul>
        {jobsData.map((job, index) => (
          <Job key={index} {...job} />
        ))}
      </ul>
    </div>
  </section>
);

export default Experience;
