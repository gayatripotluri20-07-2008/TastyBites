import Link from "next/link";
import { notFound } from "next/navigation";
import { recipes, getRecipe } from "../../data/recipes";

export function generateStaticParams() {
  return recipes.map((recipe) => ({
    id: recipe.id,
  }));
}

export default async function RecipePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const recipe = getRecipe(id);

  if (!recipe) {
    notFound();
  }

  // Safely read optional/differently-named fields from Part 1/2
  const details = recipe as Record<string, any>;

  return (
    <main style={{ maxWidth: "700px", margin: "0 auto", padding: "2rem 1rem" }}>
      <Link
        href="/"
        style={{
          display: "inline-block",
          marginBottom: "1.5rem",
          textDecoration: "none",
          color: "inherit",
          fontWeight: 500,
        }}
      >
        ← Back to all recipes
      </Link>

      <header style={{ marginBottom: "1.5rem" }}>
        {details.emoji && (
          <div style={{ fontSize: "3rem", marginBottom: "0.5rem" }}>
            {details.emoji}
          </div>
        )}
        <h1 style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>
          {recipe.title}
        </h1>
        <p style={{ color: "#666", marginBottom: "0.75rem" }}>
          {[
            details.cuisine,
            details.minutes ? `${details.minutes} mins` : details.time || details.prepTime,
            details.difficulty,
          ]
            .filter(Boolean)
            .join(" · ")}
        </p>
        {(details.blurb || details.description) && (
          <p style={{ fontSize: "1.1rem", lineHeight: 1.6 }}>
            {details.blurb || details.description}
          </p>
        )}
      </header>

      {Array.isArray(details.ingredients) && (
        <section style={{ marginBottom: "2rem" }}>
          <h2 style={{ fontSize: "1.35rem", marginBottom: "0.75rem" }}>
            Ingredients
          </h2>
          <ul style={{ paddingLeft: "1.25rem", lineHeight: 1.8 }}>
            {details.ingredients.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>
      )}

      {Array.isArray(details.steps || details.instructions) && (
        <section>
          <h2 style={{ fontSize: "1.35rem", marginBottom: "0.75rem" }}>
            Instructions
          </h2>
          <ol style={{ paddingLeft: "1.25rem", lineHeight: 1.8 }}>
            {(details.steps || details.instructions).map(
              (step: string, index: number) => (
                <li key={index} style={{ marginBottom: "0.5rem" }}>
                  {step}
                </li>
              )
            )}
          </ol>
        </section>
      )}
    </main>
  );
}