const express = require('express');
const { faker } = require('@faker-js/faker');
const app = express();
const PORT = 8000;

class User {
    constructor() {
        this._id = faker.datatype.uuid();
        this.firstname = faker.name.firstName();
        this.lastname = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

// console.log(new User());

class Company {
    constructor() {
        this._id = faker.datatype.uuid();
        this.name = faker.company.companyName();
        this.address = {
            street: faker.address.streetName(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country(),
        }
    }
}
// console.log(new Company());

app.get("/api/users/new",(request,response) => {
    response.json(new User);
});

app.get("/api/companies/new", (request, response) => {
    response.json(new Company);
});;

app.get("/api/user/company",(request,response) => {
    response.json({
        user: new User, 
        company: new Company
    });
});


app.listen(PORT,()=> console.log(
console.log(`>> SERVER started on port: ${PORT} and is listening for REQuests to RESpond to`)
))
