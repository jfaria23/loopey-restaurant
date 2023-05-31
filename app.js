const express = require("express");
const hbs = require("hbs");

const app = express();

app.use(express.static("public")); // Make everything inside of public/ available// does not show in URL

app.set("views", __dirname + "/views"); //tells our Express app where to look for our views
app.set("view engine", "hbs"); //sets HBS as the template engine

hbs.registerPartials(__dirname + "/views/partials"); //tell HBS which directory we use for partials

// app.get(path, code);
// app.get(req, res, next) => {}

app.get("/", function (request, response, next) {
  response.render("home-page");
});

app.get("/contact", (req, res, next) => {
  res.render("contact-page");
});

// GET /pizzas/margarita
app.get("/pizzas/margarita", (req, res, send) => {
  // res.send("page for margarita");
  const dataMargarita = {
    title: "Pizza Margarita",
    price: 12,
    recommendedDrink: "beer",
    imageFile: "pizza32.jpeg",
    ingredients: ["mozzarella", "tomato sauce", "basilicum"],
  };
  res.render("product", dataMargarita);
});

// GET /pizzas/veggie
app.get("/pizzas/veggie", (req, res, send) => {
  const dataVeggie = {
    title: "Veggie Pizza",
    price: 15,
    recommendedDrink: "power smoothie",
    imageFile: "pizza35.jpeg",
    ingredients: ["cherry tomatoes", "basilicum", "Olives"],
  };
  // res.send("page for veggie");
  res.render("product", dataVeggie);
});

// GET /pizzas/seafood
app.get("/pizzas/seafood", (req, res, send) => {
  const dataSeafood = {
    title: "Seafood Pizza",
    recommendedDrink: "white wine",
    imageFile: "pizza36.jpeg",
    ingredients: ["tomato sauce", "garlic", "prawn"],
  };
  // res.send("page for seafood");
  res.render("product", dataSeafood);
});

app.listen(3000, (req, res, next) => {
  console.log("server listening on port 3000...");
});
