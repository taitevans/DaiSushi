import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import Navigation from "./Navigation";
import MenuIcon from "./MenuIcon";

const Header = () => {
  const [isToggled, toggle] = useState(false);
  return (
    <>
      <header>
        <Link href="/">
          <a className="logo">
            <Logo size="2" />
          </a>
        </Link>
        <button aria-label="navigation" onClick={() => toggle(!isToggled)}>
          <MenuIcon toggled={isToggled} />
        </button>
        <Navigation />
      </header>

      <style jsx>{`
        header {
          height: 56px;
          width: 100%;
          display: flex;
          align-items: center;
          background-color: #fff;
          padding: 0 16px;
          position: fixed;
        }

        .logo {
          margin-right: auto;
          display: flex;
        }
      `}</style>
    </>
  );
};

export default Header;
