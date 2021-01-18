import Link from "next/link";

let colours = ["pink", "green", "orange", "red"];
let i = 0;

export default function Navigation(props) {
  if (props.toggled) {
    if (i >= 3) {
      i = 0;
    } else {
      i++;
    }
  }

  return (
    <>
      <nav
        className={`${props.toggled ? "toggled" : ""} ${
          props.drawer ? "drawer" : ""
        } ${colours[i]}`}
      >
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/page-2/">
          <a>Page 2</a>
        </Link>
      </nav>

      <style jsx>{`
        nav {
          display: none;
        }

        .drawer {
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

        .green ~ .drawer{
          background-color: var(--green);
          color: var(--pink);
        }

        .orange ~ .drawer{
          background-color: var(--orange);
          color: var(--red);
        }

        .red ~ .drawer {
          background-color: var(--red);
          color: var(--orange);
        }

        .pink ~ .drawer{
          background-color: var(--pink);
          color: var(--green);
        }

        a {
          padding: 12px;
          color: inherit;
        }

        @media only screen and (min-width: 840px) {
          nav {
            display: flex;
            z-index: 0;
            opacity: 1;
            flex-direction: row;
            height: auto;
            width: auto;
            position: static;
            pointer-events: auto;
            transition: none;
          }

          .drawer
            display: none;
          }
        }
      `}</style>
    </>
  );
}
