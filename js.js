// function createUser(pName, pAge) {
//     return {
//         name: pName,
//         age: pAge,
//         displayInfo: function () {
//             document.write("სახელი" + this.name + "ასაკი" + this.age + "</br>");
//         }

//     };
// }

// var Tom = createUser("Tom", 26);
// Tom.displayInfo();

// var giorgi = createUser("Giorgi", 24);
// giorgi.displayInfo();



// function createUser(pName, pAge) {
//     return {
//         name: pName,
//         age: pAge,
//         displayInfo: function () {
//             document.write("სახელი" + this.name + "ასაკი" + this.age + "</br>");
//         },
//         driveCar: function (car) {
//             document.write(this.name + "მაქნანის მარკა" + car.name + "</br>");
//         }
//     };
// }



// function createCar(mName, mYear) {
//     return {
//         name: mName,
//         year: mYear
//     }
// }

// var Tom = createUser("Tom", 26);
// Tom.displayInfo();

// var tesla = createCar("Tesla ", 2008);

// Tom.driveCar(tesla);



// var tom = new Object();

// function User(pName, pAge) {
//     this.name = pName;
//     this.pAge = pAge;

//     this.displayInfo = function () {
//         document.write("saxeli" + this.name + "asaki" + this.age)
//     }
// }


// var tom = new User("Tom", 26);
// console.log(tom.name)
// tom.displayInfo();


// function Car(mName, mYear) {
//     this.name = mName,
//         this.year = mYear
//     this.getCarInfo = function () {
//         document.write("modeli" + this.name + "weli" + this.year)
//     }
// }


// function User(pName, pAge) {
//     this.name = pName;
//     this.age = pAge;
//     this.driveCar = function (car) {
//         document.write(this.name + "kavs mankana" + car.name)
//     };
//     this.displayInfo = function () {
//         document.write("saxeli" + this.name + "asaki" + this.age)
//     }
// }


// var tom = new User("Tom", 26);
// tom.displayInfo();

// var tesla = new Car("Tesla ", 2008);

// tom.driveCar(tesla);


function User(pName, pAge) {
    this.name = pName;
    this.age = pAge;
    this.displayInfo = function () {
        document.write("saxeli" + this.name + "asaki" + this.age)
    }
}



User.prototype.hello = function () {
    document.write(this.name + "says hello")

}

User.prototype.maxAge = 110;

var tom = new User("tom", 30);
tom.hello();

var john = new User("john", 100);
john.hello(); 