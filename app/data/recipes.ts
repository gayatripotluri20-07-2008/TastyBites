// app/data/recipes.ts
export type Recipe = {
  id: string;
  title: string;
  cuisine: string;
  ingredients: string[];
  steps: string[];
};

export const recipes: Recipe[] = [
  {
    id: "margherita-pizza",
    title: "Margherita Pizza",
    cuisine: "Italian",
    ingredients: [
      "1 pizza dough ball",
      "1/2 cup tomato sauce",
      "125g fresh mozzarella",
      "Fresh basil leaves",
      "Olive oil and salt",
    ],
    steps: [
      "Heat the oven as hot as it goes.",
      "Stretch the dough into a round base and spread the sauce.",
      "Tear mozzarella over the top.",
      "Bake 7 to 9 minutes until the crust blisters.",
      "Finish with fresh basil leaves and a pinch of salt.",
    ],
  },
  {
    id: "paneer-tikka",
    title: "Paneer Tikka",
    cuisine: "Indian",
    ingredients: [
      "250g paneer cubes",
      "1/2 cup thick yogurt",
      "1 tbsp tikka masala spices",
      "1 bell pepper and 1 onion, cubed",
      "1 tbsp lemon juice and oil",
    ],
    steps: [
      "Whisk yogurt, spices, lemon juice, and oil into a marinade.",
      "Coat the paneer, bell pepper, and onion cubes and rest for 20 minutes.",
      "Thread onto skewers and grill or roast until charred at the edges.",
      "Serve hot with mint chutney.",
    ],
  },
  {
    id: "cold-brew-coffee",
    title: "Cold Brew Coffee",
    cuisine: "Drinks",
    ingredients: [
      "1 cup coarsely ground coffee beans",
      "4 cups cold filtered water",
      "Ice cubes",
      "Milk or sweetener (optional)",
    ],
    steps: [
      "Combine coarse coffee grounds and cold water in a jar.",
      "Stir gently, cover, and steep in the fridge for 12 to 16 hours.",
      "Strain through a fine mesh sieve or coffee filter.",
      "Serve over ice with water or milk to taste.",
    ],
  },
  {
    id: "veg-burger",
    title: "Veg Burger",
    cuisine: "American",
    ingredients: [
      "2 burger buns",
      "2 crispy veggie patties",
      "2 slices cheddar cheese",
      "Lettuce, tomato slices, and pickles",
      "2 tbsp burger sauce",
    ],
    steps: [
      "Cook the veggie patties until golden and crisp on both sides.",
      "Place a cheese slice on each patty during the last minute to melt.",
      "Toast the burger buns lightly.",
      "Assemble buns with sauce, lettuce, patty, tomato, and pickles.",
    ],
  },
  {
    id: "masala-fries",
    title: "Masala Fries",
    cuisine: "Snacks",
    ingredients: [
      "3 large potatoes, cut into fries",
      "2 tbsp oil",
      "1 tsp chaat masala",
      "1/2 tsp red chili powder",
      "Salt and fresh cilantro",
    ],
    steps: [
      "Soak cut potatoes in cold water for 15 minutes, then pat completely dry.",
      "Toss with oil and bake or air-fry at 200°C until crispy.",
      "Immediately toss hot fries with salt, chaat masala, and chili powder.",
      "Garnish with chopped cilantro and serve.",
    ],
  },
  {
    id: "lemon-iced-tea",
    title: "Lemon Iced Tea",
    cuisine: "Drinks",
    ingredients: [
      "2 black tea bags",
      "2 cups boiling water",
      "2 tbsp honey or sugar",
      "Juice of 1 fresh lemon",
      "Ice cubes and lemon slices",
    ],
    steps: [
      "Steep the tea bags in boiling water for 5 minutes, then remove.",
      "Stir in honey or sugar while warm until dissolved, then let cool.",
      "Add fresh lemon juice and chill in the refrigerator.",
      "Pour over ice and garnish with lemon slices.",
    ],
  },
];

export function getRecipe(id: string): Recipe | undefined {
  return recipes.find((recipe) => recipe.id === id);
}