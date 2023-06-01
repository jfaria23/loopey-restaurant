const mongoose = require("mongoose");

const Pizza = require("./models/Pizza.model");
mongoose
  .connect("mongodb://127.0.0.1:27017/loopeyRestaurant")
  .then((response) => {
    console.log(
      `Connected to Mongo! Database Name: "${response.connections[0].name}"`
    );

    Pizza.create({ title: "margarita", price: 8, dough: "classic" });
    Pizza.create({ title: "veggie", price: 10, isVeggie: true });

    const pizzaOne = {
      title: "hawai",
      price: 13,
    };

    //create a new document (a new pizza)
    return Pizza.create(pizzaOne);
  })
  .then((pizzaFromDB) => {
    console.log("a new pizza was created with id...", pizzaFromDB._id);
    return Pizza.find({ title: "veggie" });
  })
  .then((pizzasArr) => {
    console.log("I currently have this amount of pizzas", pizzasArr.length);
    return Pizza.findByIdAndUpdate(
      "idInDatabase",
      { price: 20 },
      { returnDocument: "after" }
    );
  })
  .then((updatedPizzaFromDB) => {
    console.log("luis, your pizza was updated....");
    console.log(updatedPizzaFromDB);
  })
  .catch((err) => console.error("Error connecting to Mongo", err));
