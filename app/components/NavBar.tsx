import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="navbar">
      <Link href="/" className="nav-brand">
        🍽️ NextBites
      </Link>
      <div className="nav-links">
        <Link href="/">Home</Link>
      </div>
    </nav>
  );
}