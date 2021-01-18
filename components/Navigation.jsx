import Link from "next/link";

const Navigation = (props) => (
  <>
    <nav className={props.toggled ? "toggled" : ""}>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/page-2/">
        <a>Page 2</a>
      </Link>
    </nav>

    <style jsx>{`
      nav {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        height: 100vh;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-color: var(--bg);
        pointer-events: none;
        opacity: 0;
        z-index: -3;
        transition: opacity 0.2s ease-out;
      }

      .toggled {
        opacity: 1;
        pointer-events: auto;
      }

      a {
        padding: 12px;
      }

      @media only screen and (min-width: 840px) {
        nav {
          z-index: 0;
          opacity: 1;
          flex-direction: row;
          height: auto;
          width: auto;
          position: static;
        }
      }
    `}</style>
  </>
);

export default Navigation;
