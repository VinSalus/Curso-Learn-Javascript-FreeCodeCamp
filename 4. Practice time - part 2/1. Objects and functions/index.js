// Create a person object that contains three keys: name, age, and country.
// Use yourself as an example to set the values for name, age, and country

// Create a function, logData(), that uses the person object to create a
// string in the following format: 
// "Per is 35 years old and lives in Norway"

// Call the logData() function to verify that it works

let person = {
    name: "Vinicius",
    age: 20,
    country: "Brazil"
}

function logData(){
    let personInfo = person.name + " is " + person.age + " and lives in " + person.country;
    console.log(personInfo);
}


logData();