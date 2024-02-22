type SectionHeaderProps = {
  name: string;
  href: string;
};

const SectionHeader = ({ name, href }: SectionHeaderProps) => (
  <h3 className="light-bg sticky top-0 z-10 py-5 font-bold uppercase tracking-wider">
    <a href={href} className="group relative">
      <span className="absolute -ml-4 hidden group-hover:inline-block">#</span>
      {name}
    </a>
  </h3>
);

export default SectionHeader;
