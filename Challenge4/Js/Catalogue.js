class Catalogue {
    GetAll() {
        // we query every menu available in the db

        // we browse every menu proposed by each restaurant in db
        // then we build a layout by parsing value
        var map = new Map();
        this._initDictionary(map);

        for (let i = 0; i < MenusDB.length; i++) {
            for (let j = 0; j < MenusDB[i].recipe_ID.length; j++) {
                let key = MenusDB[i].recipe_ID[j];
                let price = MenusDB[i].price[j];
                let currency = MenusDB[i].currency[j];
                let name = RecipeDB.find(x => x.id === key).name;

                map.get(key).name = name;
                map.get(key).prices.push(price);
                map.get(key).currencys.push(currency);
                map.get(key).restaurants.push(MenusDB[i].restaurant_ID);
            }
        }
        return map;
    }
    _initDictionary(map) {
        for (let i = 0; i < MenusDB.length; i++) {
            for (let j = 0; j < MenusDB[i].recipe_ID.length; j++) {
                let key = MenusDB[i].recipe_ID[j];
                map.set(key.toString(), {
                    name: "",
                    prices: [],
                    currencys: [],
                    restaurants: []
                });
            }
        }
    }
}