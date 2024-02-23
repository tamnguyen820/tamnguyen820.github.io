type ToolListProps = {
  tools: string[];
};

const ToolList = ({ tools }: ToolListProps) => (
  <ul className="mt-2 flex flex-wrap">
    {tools.map((tool, index) => (
      <li
        key={index}
        className="mb-2 mr-2 flex items-center rounded-full bg-[#59dc8e] px-3 py-2 text-center text-xs font-medium leading-5 text-[#09160E]"
      >
        {tool}
      </li>
    ))}
  </ul>
);

export default ToolList;
