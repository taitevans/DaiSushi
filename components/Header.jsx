import { useState } from "react";
import Link from "next/link";
import useRouter, { Router } from "next/router";
import Logo from "./Logo";
import Navigation from "./Navigation";
import MenuIcon from "./MenuIcon";

export default function Header() {
  const [isToggled, toggle] = useState(false);

  // Close navigation menu when page changes
  Router.events.on("routeChangeStart", () => {
    if (isToggled) toggle(!isToggled);
  });

  return (
    <>
      <header>
        <Link href="/">
          <a className="logo">
            <Logo size="2" />
          </a>
        </Link>
        <button
          className="menu-icon"
          aria-label="navigation"
          onClick={() => toggle(!isToggled)}
        >
          <MenuIcon toggled={isToggled} />
        </button>
        <Navigation />
        <Navigation toggled={isToggled} drawer={true} />
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

        @media only screen and (min-width: 840px) {
          .menu-icon {
            display: none;
          }
        }
      `}</style>
    </>
  );
}
