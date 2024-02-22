import SectionHeader from "./common/SectionHeader";
import ArrowUpLeft from "assets/icons/arrow-up-left.svg";
import { SchoolItem } from "data/models";
import { educationData } from "data/education";
import { formatDate } from "utils/date";

const School = (item: SchoolItem) => (
  <li className="mb-6">
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
    <p className="text-sm">
      {formatDate(item.fromDate)} - {formatDate(item.toDate)}
    </p>
    <p className="text-sm font-semibold">{item.degree}</p>
    <ul className="mt-1 border-t-2 border-[#09160e]">
      {item.description.map((desc, index) => (
        <li key={index} className="text-sm first:mt-1">
          {desc}
        </li>
      ))}
    </ul>
  </li>
);

const Education = () => (
  <section id="education" className="mt-20">
    <div>
      <SectionHeader name="Education" href="#education" />
      <ul>
        {educationData.map((school, index) => (
          <School key={index} {...school} />
        ))}
      </ul>
    </div>
  </section>
);

export default Education;
