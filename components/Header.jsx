import { useState, useEffect } from "react";
import Link from "next/link";
import { Router } from "next/router";
import Logo from "./Logo";
import Navigation from "./Navigation";
import MenuIcon from "./MenuIcon";

let colours = ["pink", "green", "orange", "red"];
let i = 0;

export default function Header() {
  const [isToggled, toggle] = useState(false);

  useEffect(() => {
    if (isToggled) {
      document.getElementById("body").className = "no-body-scroll";
    } else {
      document.getElementById("body").className = "";
    }
  }, [isToggled]);

  // Close navigation menu when page changes
  Router.events.on("routeChangeStart", () => {
    if (isToggled) toggle(!isToggled);
  });

  if (isToggled) {
    if (i >= 3) {
      i = 0;
    } else {
      i++;
    }
  }
  let toggleColour = colours[i];

  return (
    <>
      <header>
        <Link href="/">
          <a className="logo">
            <Logo size={2} colour={toggleColour} navToggled={isToggled} />
          </a>
        </Link>
        <button
          className="menu-icon"
          aria-label="navigation"
          onClick={() => toggle(!isToggled)}
        >
          <MenuIcon toggled={isToggled} colour={toggleColour} />
        </button>
        <Navigation />
        <Navigation toggled={isToggled} drawer={true} colour={toggleColour} />
      </header>

      <style global jsx>{`
        .green-drawer {
          background-color: var(--green);
          color: var(--pink);
          fill: var(--pink);
        }

        .orange-drawer {
          background-color: var(--orange);
          color: var(--red);
          fill: var(--red);
        }

        .red-drawer {
          background-color: var(--red);
          color: var(--orange);
          fill: var(--orange);
        }

        .pink-drawer {
          background-color: var(--pink);
          color: var(--green);
          fill: var(--green);
        }
      `}</style>

      <style jsx>{`
        header {
          height: 56px;
          width: 100%;
          display: flex;
          align-items: center;
          background-color: #fff;
          padding: 0 16px;
          position: fixed;
          z-index: 3;
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
