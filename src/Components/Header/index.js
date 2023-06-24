// import { Link } from "react-router-dom";
//
import { SocialIcon } from "react-social-icons";
function Header() {
  return (
    <aside className="grid grid-cols-1 bg-red-500 w-128 h-screen text-white overflow-auto">
      <div className="flex flex-col mt-8 -pb-8 items-center">
        <div className="bg-img-profile w-48 h-48 mb-6 bg-cover rounded-full"></div>
        <span className="text-2xl font-semibold">Cleiton Pereira</span>
        <span className="text-lg">📨 cleiton_pda@hotmail.com</span>
      </div>

      <div className="grid grid-cols-1 justify-items-center gap-3 my-16">
        <SocialIcon
          network="facebook"
          style={{ height: 35, width: 35 }}
          bgColor="#fff"
          fgColor="#f00"
        />
        <SocialIcon
          network="instagram"
          style={{ height: 35, width: 35 }}
          bgColor="#fff"
          fgColor="#f00"
        />
        <SocialIcon
          network="discord"
          style={{ height: 35, width: 35 }}
          bgColor="#fff"
          fgColor="#f00"
        />
        <SocialIcon
          url="https://www.linkedin.com/in/cleiton-pereira-5b76273b/"
          network="linkedin"
          style={{ height: 35, width: 35 }}
          bgColor="#fff"
          fgColor="#f00"
        />
        <SocialIcon
          network="github"
          style={{ height: 35, width: 35 }}
          bgColor="#fff"
          fgColor="#f00"
        />
      </div>

      <footer className="flex flex-col items-center mb-8 -pt-8">
        <span>Made with 🤍</span>
        <span>
          Thanks{" "}
          <a href="https://www.freecodecamp.org/news/portfolio-app-using-react-618814e35843/">
            Dhruv
          </a>{" "}
          for inspiration.
        </span>
      </footer>
    </aside>
  );
}

export default Header;
