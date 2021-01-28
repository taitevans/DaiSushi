import Link from "next/link";

const NavigationLinks = () => (
  <>
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
  </>
);

export default NavigationLinks;
