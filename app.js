let user= [];

Users = () => {
    class User {
    constructor(firstname, lastname, age, city){
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
        this.city = city;
    }
}

for (var i = 0; i < 4; i++ ){
    let userhbf = prompt('Type your first name');
    console.log(userhbf)
    let userhbf = prompt('Type your last name');
    console.log(userhbf)
    let userhbf = prompt('Type your age');
    console.log(userhbf)
    let userhbf = prompt('Type your city');
    console.log(userhbf)

    
    user[i] = new User(`${userhbf[0]} ,${userhbf[1]}, ${userhbf[2]}, ${userhbf[3]}, ${userhbf[4]} `)
    console.log(user[i]);
}

}

console.log(user)

Users();


