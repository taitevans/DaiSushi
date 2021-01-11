const Navigation = () => (
  <>
    <nav>
      <a href="/">Home</a>
      <a href="/page-2/">Page 2</a>
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
