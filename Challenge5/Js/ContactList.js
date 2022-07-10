class ContactList {

    #originallist = []; // use to store every people

    parse(json_file) {
        this.#originallist = JSON.parse(json_file);
        return this;
    }
    getListOfDuplicatePerson() {
        var listofuniqueperson = this.#generateUniqueListPerson();
        console.log(" ");
        console.log("List of duplicate persons");
        listofuniqueperson.forEach(element => {
            var nameinLowerCase = element.name.toLowerCase();
            if (listofuniqueperson.has(nameinLowerCase) == false)
                listofuniqueperson.set(nameinLowerCase, element);
            else
                console.log(element);
        });
        return this;
    }
    getListOfUniquePerson() {
        console.log(" ");
        console.log("List of unique persons ");
        this.#generateUniqueListPerson().forEach(element => {
            console.log(element);
        });
        return this;
    }
    getAverageAge() {
        // we take all unique person on the list 
        // we sum all age then devide by number list number
        var age = 0.0;
        var currentyear = new Date().getFullYear();
        var uniquePersons =  this.#generateUniqueListPerson();
        uniquePersons.forEach(element => {
            age +=  currentyear -   new Date(element.dob).getFullYear();
        });
        console.log(" ");
        console.log(`Average age if arround ${age / uniquePersons.size }`);

        return this;
    }
    getPersonsbyAgeLessThan(agelimit) {

        if(Number.isInteger(agelimit) == false){
            console.log(" ");
            console.log("wrong age limit passed in parameter of getPersonsbyAgeLessThan()");
            return this;
        }
        if(agelimit < 0){
            console.log(" ");
            console.log("wrong age limit passed in parameter of getPersonsbyAgeLessThan()");
            return this;
        }
        var currentyear = new Date().getFullYear();
        console.log(" ");
        console.log(`List of unique person with age less than ${agelimit}`);
        this.#generateUniqueListPerson().forEach(element => {
            
            var age = currentyear - new Date(element.dob).getFullYear();
            if(age < agelimit){
                console.log(`${element.name} with an age of ${age}  :`);
                console.log(element);

            }
        });

        return this;
    }
    getCountryList() {
        console.log(" ");
        console.log("List of unique country ");
        this.#generateUniqueListPerson().forEach(element => {
            console.log(element.country);
        });

        return this;
    }

    #generateUniqueListPerson() {
        var listOfUniqueElements = new Map();
        this.#originallist.forEach(element => {
            if (listOfUniqueElements.has(element.name.toLowerCase()) == false)
                listOfUniqueElements.set(element.name.toLowerCase(), element);
        });
        return listOfUniqueElements;
    }
}