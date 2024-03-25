import GitHub from "assets/icons/github.svg";
import LinkedIn from "assets/icons/linkedin.svg";
import Email from "assets/icons/email.svg";
import ArrowUpLeft from "assets/icons/arrow-up-left.svg";
import Profile from "assets/images/profileEyesClosed.jpg";

import { navData } from "data/nav";

const Header = () => (
  <header
    id="header"
    className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-2/5 lg:flex-col lg:justify-between lg:py-20"
  >
    <div>
      <h1 className="text-5xl font-bold">Tam Nguyen</h1>
      <h2 className="mt-3 text-2xl font-medium">Software Engineer</h2>
      <p className="mt-3 pb-2">
        Excited to build software with new cool
        <span className="italic"> blazingly fast</span> technologies. And to
        play more badminton.
      </p>
      <img
        src={Profile}
        alt="Profile picture"
        draggable="false"
        className="my-[-20px] w-44 [clip-path:circle(40%)]"
      />
      <nav className="hidden text-right lg:flex lg:flex-row-reverse">
        <ul>
          {navData.map((item, index) => (
            <li key={index} className="py-2 font-bold uppercase tracking-wider">
              <a href={item.href}>{item.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>

    <div className="mt-3">
      <a href="/Tam_Nguyen_Resume.pdf" target="_blank">
        <span className="inline-block font-semibold underline underline-offset-2">
          View my resume
          <img
            src={ArrowUpLeft}
            alt="ArrowUpLedt"
            className="inline-block h-4 w-4"
          />
        </span>
      </a>
      <ul className="mt-1 flex items-center">
        <li className="mr-5 shrink-0">
          <a href="https://github.com/tamnguyen820" target="_blank">
            <img src={GitHub} alt="GitHub" className="h-7 w-7" />
          </a>
        </li>
        <li className="mr-5 shrink-0">
          <a href="https://www.linkedin.com/in/nguyenmtam" target="_blank">
            <img src={LinkedIn} alt="LinkedIn" className="h-7 w-7" />
          </a>
        </li>
        <li className="mr-5 shrink-0">
          <a href="mailto:tam.nguyen1@uwaterloo.ca" target="_blank">
            <img src={Email} alt="Email" className="h-8 w-8" />
          </a>
        </li>
      </ul>
    </div>
  </header>
);

export default Header;
