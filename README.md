# 🍳 Recipe Ideas — React + Tailwind CSS App

### 👩‍🍳 Built for Taylor — the Busy Professional

**Recipe Ideas** is a simple and elegant web app that helps users find meal ideas based on the ingredients they already have.  
Taylor, a busy professional, can quickly search for recipes when he gets home — whether based on mood, available time, or ingredients in the kitchen.

---

## 🌟 Features

- 🔍 **Search Recipes by Ingredient**  
  Enter any ingredient (like *chicken*, *tomato*, or *egg*) to find all recipes using that item.

- 🧾 **Instant Meal Cards**  
  Displays meal images and names with a link to view the full recipe.

- ⚡ **Live API Integration**  
  Uses [TheMealDB API](https://www.themealdb.com/) to fetch real recipes dynamically.

- 🎨 **Modern UI with Tailwind CSS**  
  Responsive design, black–orange gradient theme, and smooth hover effects.

---

## 🛠️ Tech Stack

| Tool | Purpose |
|------|----------|
| **React** | Frontend UI library |
| **Tailwind CSS v4** | Styling and layout |
| **TheMealDB API** | Recipe data source |
| **JavaScript (ES6+)** | Logic and hooks |

---

## ⚙️ Getting Started

To run this project locally, follow these steps 👇

```bash
# 1. Clone the repository
git clone https://github.com/your-username/recipe-ideas.git
cd recipe-ideas

# 2. Install dependencies
npm install

# 3. Run the development server
npm run dev



### 🔗 API Reference

Base URL:

https://www.themealdb.com/api/json/v1/1/filter.php?i={ingredient}


Example Request:

https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken


Example Response:

{
  "meals": [
    {
      "strMeal": "Chicken Handi",
      "strMealThumb": "https://www.themealdb.com/images/media/meals/wyxwsp1486979827.jpg",
      "idMeal": "52795"
    },
    {
      "strMeal": "Brown Stew Chicken",
      "strMealThumb": "https://www.themealdb.com/images/media/meals/sypxpx1515365095.jpg",
      "idMeal": "52940"
    }
  ]
}




#🧠 How It Works

1.User enters an ingredient in the Search Bar.

2.The app fetches matching meals from TheMealDB API.

3.Results are displayed as Meal Cards with images and recipe links.

4.If no recipes are found, a message appears — “No recipes found 🍽️”.



## Author

Developed by: Mounika Reddy
Guided by: ChatGPT (OpenAI)
📅 October 2025

## Acknowledgments

Thanks to TheMealDB for providing the free recipe API.
Inspired by the idea of helping busy professionals cook smarter!