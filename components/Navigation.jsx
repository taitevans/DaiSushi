import Link from "next/link";

const Navigation = () => (
  <>
    <nav>
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
        display: none;
      }

      a {
        padding: 12px;
      }
    `}</style>
  </>
);

export default Navigation;
