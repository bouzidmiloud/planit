MenusDB = JSON.parse(`[
    {
        "id" : "1",
        "restaurant_ID" : "889",
        "recipe_ID" : ["1","2","5"],
        "price" : [10,20,50],
        "currency" : ["$","$","$"]
    },
    {
        "id" : "2",
        "restaurant_ID" : "17136",
        "recipe_ID" : ["1","3","5"],
        "price" : [5,6.75,9.99],
        "currency" : ["$","$","$"]
    },
    {
        "id" : "3",
        "restaurant_ID" : "3",
        "recipe_ID" : ["4"],
        "price" : [9.99],
        "currency" : ["$"]
    }
]`);
RecipeDB = JSON.parse(`[
        {
            "id" : "1",
            "name" : "pizza cheese XL 🍕🍕"
        },
        {
            "id" : "2",
            "name" : "sushi 🍣"
        },
        {
            "id" : "3",
            "name" : "chicken garlic 🍗"
        },
        {
            "id" : "4",
            "name" : "biryani 🍜"
        },
        {
            "id" : "5",
            "name" : "pizza cheese small 🍕"
        }
]`);

RestaurantDB = JSON.parse(`[
    {
        "id" : "1",
        "name" : "la calzone city"
    },
    {
        "id" : "17136",
        "name" : "pizza express"
    },
    {
         "id" : "3",
        "name" : "food corner"
    },
    {
        "id" : "889",
        "name" : "the food place"
    }
]`);