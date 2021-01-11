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
        height: 60px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      a {
        padding: 12px;
      }
    `}</style>
  </>
);

export default Navigation;
