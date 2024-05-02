import SectionHeader from "./common/SectionHeader";

const About = () => (
  <section id="about">
    <div>
      <SectionHeader name="About" href="#about" />
      <p>
        Hey, you are finally here! My name is Tam and I'm a recent graduate with
        a Bachelor of Computer Science degree from the University of Waterloo.
        During my undergraduate studies, I've had the opportunity to work 5
        internships at:{" "}
      </p>
      <ul className="my-3 list-disc pl-8">
        <li>
          a{" "}
          <a
            className="font-medium underline-offset-2 hover:underline"
            href="https://www.ssctech.com"
            target="_blank"
          >
            big SaaS company
          </a>{" "}
          in financial services
        </li>
        <li>
          an omnichannel{" "}
          <a
            className="font-medium underline-offset-2 hover:underline"
            href="https://www.indexexchange.com"
            target="_blank"
          >
            ad tech company
          </a>
        </li>
        <li>
          a{" "}
          <a
            className="font-medium underline-offset-2 hover:underline"
            href="https://www.milkmoovement.com"
            target="_blank"
          >
            Canadian startup
          </a>{" "}
          in dairy supply chain software
        </li>
      </ul>
      <p className="mb-3">
        I'm currently open to full-time software engineering opportunities after
        my summer graduation. I enjoy programming as it is a creative outlet
        that involves problem solving, continous learning, and a lot of skill
        expression.
      </p>
      <p>
        Some of my hobbies include: gaming 💻, reading 📖, playing music 🎸🎹,
        and badminton 🏸!
      </p>
    </div>
  </section>
);

export default About;
