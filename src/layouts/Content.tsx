import About from "components/About";
import Experience from "components/Experience";
import Projects from "components/Projects";
import Education from "components/Education";

const Content = () => (
  <div id="content" className="pt-20 lg:w-1/2 lg:py-20">
    <About />
    <Experience />
    <Projects />
    <Education />
    <footer className="pt-10 text-sm">
      Built with{" "}
      <a href="https://react.dev" target="_blank" className="external-link">
        React
      </a>{" "}
      and{" "}
      <a
        href="https://tailwindcss.com"
        target="_blank"
        className="external-link"
      >
        Tailwind CSS
      </a>
      .<div>© 2024 Tam Nguyen</div>
    </footer>
  </div>
);

export default Content;
