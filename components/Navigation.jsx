import Link from "next/link";
import InstagramIcon from "./InstagramIcon";
import FacebookIcon from "./FacebookIcon";

const Navigation = (props) => (
  <>
    <nav
      className={`${props.toggled ? "toggled" : ""} ${
        props.drawer ? "drawer" : ""
      } ${props.colour}-drawer`}
    >
      <Link href="/order/">
        <a style={{ "--delay": 0 }}>Order</a>
      </Link>
      <Link href="/menu/">
        <a style={{ "--delay": 1 }}>Menu</a>
      </Link>
      <Link href="/stores/">
        <a style={{ "--delay": 2 }}>Stores</a>
      </Link>
      <Link href="/about/">
        <a style={{ "--delay": 3 }}>About us</a>
      </Link>
      <Link href="/careers/">
        <a style={{ "--delay": 4 }}>Careers</a>
      </Link>
      <Link href="/contact/">
        <a style={{ "--delay": 5 }}>Contact</a>
      </Link>

      <div className="social-divider"></div>
      <div className="social-links">
        <a href="https://instagram.com/">
          <InstagramIcon />
        </a>
        <a href="https://facebook.com/">
          <FacebookIcon />
        </a>
      </div>
    </nav>

    <style jsx>{`
      nav {
        display: none;
      }

      .drawer {
        display: flex;
        align-items: flex-end;
        justify-content: center;
        flex-direction: column;
        height: 100vh;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        pointer-events: none;
        opacity: 0;
        z-index: -3;
        transition: opacity 0.2s ease-out;
        padding: 0 16px;
      }

      .drawer > a {
        font-family: "M PLUS Rounded 1c", sans-serif;
        font-style: normal;
        font-weight: 900;
        font-size: 3em;
        line-height: 84%;
        letter-spacing: -0.5px;
        margin-bottom: 0.1em;
        text-transform: uppercase;
        transform: translateX(90px);
        opacity: 0;
      }

      .toggled {
        opacity: 1;
        pointer-events: auto;
      }

      .toggled > a {
        transform: translateX(0);
        transition: all cubic-bezier(0.01, 0.31, 0.11, 0.93) 0.6s;
        transition-delay: calc(0.07s * var(--delay));
        opacity: 1;
      }

      .social-divider {
        display: none;
      }

      .social-links {
        display: flex;
        margin-right: 0;
      }

      a {
        padding: 12px;
        color: inherit;
        display: flex;
      }

      @media only screen and (min-width: 840px) {
        nav {
          display: flex;
          z-index: 0;
          opacity: 1;
          flex-direction: row;
          align-items: center;
          height: auto;
          width: auto;
          position: static;
          pointer-events: auto;
          transition: none;
        }

        .drawer {
          display: none;
        }

        .social-divider {
          display: block;
          width: 1px;
          height: 18px;
          background-color: rgba(0, 0, 0, 0.2);
          margin: 0 12px;
        }

        .social-links {
          margin-right: -12px;
        }
      }
    `}</style>
  </>
);

export default Navigation;
