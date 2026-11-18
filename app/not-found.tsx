import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h2>Recipe Not Found</h2>
      <p>Sorry, we could not find the page or recipe you were looking for.</p>
      <Link href="/" style={{ textDecoration: "underline" }}>
        ← Back to all recipes
      </Link>
    </div>
  );
}