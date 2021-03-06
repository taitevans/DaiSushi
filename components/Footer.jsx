import Link from "next/link";
import Logo from "./Logo";
import NavigationLinks from "./NavigationLinks";

const Footer = () => (
  <>
    <footer>
      <div className="container">
        <div className="footer-content">
          <Logo size={2} theme="dark" />
          <div className="nav-links">
            <NavigationLinks />
          </div>
          <div className="footer-info">
            <Link href="/terms/">
              <a className="p2">Terms</a>
            </Link>
            <Link href="/privacy/">
              <a className="p2">Privacy</a>
            </Link>
            <a className="p2" href="https://taitevans.com">
              taitevans.com
            </a>
            <p className="p2 copyright">{`© ${new Date().getFullYear()} DaiSushi`}</p>
          </div>
        </div>
      </div>
    </footer>

    <style global jsx>{`
      footer a {
        color: var(--text-inv);
        padding: 12px;
      }
    `}</style>

    <style jsx>{`
      footer {
        background-color: var(--bg-2);
        padding: 48px 0 22px 0;
        overflow: hidden;
      }

      .footer-content {
        grid-column: span 4;
        display: flex;
        flex-direction: column;
      }

      .nav-links {
        display: flex;
        flex-direction: column;
        padding: 22px 0 32px 0;
        overflow: hidden;
        text-align: center;
      }

      .nav-links * {
        width: 100%;
      }

      .footer-info {
        display: flex;
        flex-direction: column;
        text-align: center;
      }

      .footer-info * {
        color: var(--text-inv-2);
        width: 100%;
      }

      .copyright {
        padding: 12px;
      }

      @media only screen and (min-width: 840px) {
        .footer-content {
          grid-column: span 12;
        }

        .nav-links {
          flex-direction: row;
          margin: 0 auto;
        }

        .footer-info * {
          width: fit-content;
        }

        .footer-info {
          flex-direction: row;
        }

        .footer-info > a:nth-child(2) {
          margin-right: auto;
        }
      }
    `}</style>
  </>
);

export default Footer;
