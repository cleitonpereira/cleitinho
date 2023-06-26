//
import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
function Header() {
  return (
    <aside className="grid grid-cols-1 bg-red-500 md:w-[32rem] lg:w-[32rem] sm:w-screen h-screen text-white overflow-auto">
      <div className="flex flex-col mt-14 -pb-8 items-center mb-10">
        <Link to="/">
          <div className="bg-img-profile w-48 h-48 mb-6 bg-cover border-[6px] rounded-full"></div>
        </Link>
        <span className="text-2xl font-semibold">Cleiton Pereira</span>
        <span className="text-lg">Web Developer</span>
        <a href="mailto:cleiton_pda@hotmail.com">
          <span className="text-lg hover:underline">📨 cleiton_pda@hotmail.com</span>
        </a>
      </div>

      <div className="grid grid-cols-1 justify-items-center gap-3 mb-14">
        <ul className="box-border w-2/3 m-[0px] text-2xl">
          <Link to="https://github.com/cleitonpereira" target="_blank" rel="noreferrer">
            <li className="bg-white rounded-xl w-full text-red-500 mb-2 hover:bg-red-500 hover:text-white ease-in-out duration-200">
              {/* hover-border - hover:border-2 hover:border-white hover:-pb-[0.1rem] */}
              <span className="flex flex-row justify-center items-center gap-0">
                <SocialIcon
                  network="github"
                  style={{ height: 38, width: 38 }}
                  bgColor="#fff"
                  fgColor="#f00"
                />
                Github
              </span>
            </li>
          </Link>
          <Link to="https://instagram.com/pereracleitin" target="_blank" rel="noreferrer">
            <li className="bg-white rounded-xl w-full text-red-500 mb-2 hover:bg-red-500 hover:text-white ease-in-out duration-200">
              <span className="flex flex-row justify-center items-center gap-0">
                <SocialIcon
                  network="instagram"
                  style={{ height: 38, width: 38 }}
                  bgColor="#fff"
                  fgColor="#f00"
                />
                Instagram
              </span>
            </li>
          </Link>
          <Link to="https://facebook.com/cleiton.pereira" target="_blank" rel="noreferrer">
            <li className="bg-white rounded-xl w-full text-red-500 mb-2 hover:bg-red-500 hover:text-white ease-in-out duration-200">
              <span className="flex flex-row justify-center items-center gap-0">
                <SocialIcon
                  network="facebook"
                  style={{ height: 38, width: 38 }}
                  bgColor="#fff"
                  fgColor="#f00"
                />
                Facebook
              </span>
            </li>
          </Link>
          <Link to="https://www.linkedin.com/in/cleiton-pereira-5b76273b/" target="_blank" rel="noreferrer">
            <li className="bg-white rounded-xl w-full text-red-500 mb-2 hover:bg-red-500 hover:text-white ease-in-out duration-200">
              <span className="flex flex-row justify-center items-center gap-0">
                <SocialIcon
                  network="linkedin"
                  style={{ height: 38, width: 38 }}
                  bgColor="#fff"
                  fgColor="#f00"
                />
                LinkedIn
              </span>
            </li>
          </Link>
        </ul>
      </div>

      <footer className="flex flex-col items-center mb-8 -pt-8">
        <span>Made with 🤍</span>
        <span>
          Thanks{" "}
          <a className="underline" href="https://www.freecodecamp.org/news/portfolio-app-using-react-618814e35843/">
            Dhruv
          </a>{" "}
          for inspiration.
        </span>
      </footer>
    </aside>
  );
}

export default Header;
