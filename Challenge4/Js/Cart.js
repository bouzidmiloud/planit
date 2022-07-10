class Cart {

    ListItems = [];
    AddItem(recipe_id, company_id, onSucess = undefined, onFailure = undefined) {

        // we check if recipe id exist in the db
        let recipeid = RecipeDB.find(x => x.id === recipe_id);
        if (recipeid === undefined) {
            if (onFailure != undefined)
                onFailure("recipe id is wrong");
            return this;
        }
        //we check if company exist in the db
        let companyid = RestaurantDB.find(x => x.id === company_id);
        if (companyid === undefined) {
            if (onFailure != undefined)
                onFailure("company id is wrong");
            return this;
        }
        // we check if a company has the recipe one the menu ;
        var query = MenusDB.find(x => x.restaurant_ID === company_id);
        if (query === undefined) {
            if (onFailure != undefined)
                onFailure("company hasn't listed this recipe on any menu");
            return this;
        }

        var isfound = false;
        query.recipe_ID.forEach(id => {

            if (id == recipe_id) {
                isfound = true;
            }
        });

        // if yes we add
        // if no we skip and show message
        if (isfound == false) {
            if (onFailure != undefined)
                onFailure("this recipe is not provided by the company");
            return this;
        }

        var obj = {};
        for (let i = 0; i < query.recipe_ID.length; i++) {

            if (recipe_id == query.recipe_ID[i]) {
                obj.price = query.price[i];
                obj.currency = query.currency[i]
                obj.recipeid = recipe_id;
                obj.restaurantid = company_id;
            }
        }

        this.ListItems.push(obj);
        if (onSucess != undefined)
            onSucess("item added");

        return this;
    }
    showBill() {
        let sumprice = new Map();
        console.log(`cart contains : `);
        this.ListItems.forEach(element => {
            console.log(`recipe  : ${RecipeDB.find(x => x.id === element.recipeid).name} for : ${element.price} ${element.currency} `)

            if (sumprice.has(element.currency) == false)
                sumprice.set(element.currency, element.price);
            else
                sumprice.set(element.currency, sumprice.get(element.currency) + element.price);

        });

        // we iterate ListItems and sum the ammount to spend
        sumprice.forEach(function(key, total) {
            console.log(`total cart  is  ${total} ${key}`);
        });
    }
}