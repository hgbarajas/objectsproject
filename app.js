Users = () => {
    class User {
    constructor(firstname, lastname, age, city){
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
        this.city = city;
    }
}

for (let i = 0; i < 4; i++ ){
    let user = prompt('Type your first name, last name, age, city');
    console.log(user);
    user[i] = new User(`${user[0]},${user[1]},${user[2]},${user[3]},${user[4]} `)
}


console.log(Users)
