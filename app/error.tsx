"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h2>Something went wrong</h2>
      <p>An unexpected error happened while loading this page.</p>
      <button onClick={() => reset()} style={{ marginTop: "1rem", padding: "0.5rem 1rem" }}>
        Try again
      </button>
    </div>
  );
}