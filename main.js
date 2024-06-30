// Create genaral Employee class that have name and age props,
// then make 3 subClass of this class, like developer, marketer,
// acoutant, each subclass should have own methods.
//  like getProgrammignLanguages, getMarketerTools and etc.

class Emplyee {
  constructor(name, age) {
    this.age = age;
    this.name = name;
  }

  getInfo() {
    return `my name is ${this.name} and I'm ${this.age} years old`;
  }
}

class Developer extends Emplyee {
  constructor(name, age, programingLanguage, work) {
    super(name, age);
    this.work = work;
    this.programingLanguage = programingLanguage;
  }

  getDeveloper() {
    return `hello my name is ${this.name} I'm ${this.age} years old I am developer I know and write on ${this.programingLanguage} and I work at ${this.work}`;
  }
}

class Marketer extends Emplyee {
  constructor(name, age, marketerTools, work) {
    super(name, age);
    this.work = work;
    this.marketerTools = marketerTools;
  }

  getMarketer() {
    return `hello my name is ${this.name} I'm ${this.age} years old I am marketer I know ${this.marketerTools} and I work at ${this.work}`;
  }
}

class Acountant extends Emplyee {
  constructor(name, age, Qr, work) {
    super(name, age);
    this.work = work;
    this.Qr = Qr;
  }

  getAcountant() {
    return `hello my name is ${this.name} I'm ${this.age} years old I am acountant I know working with ${this.Qr} and I work at ${this.work}`;
  }
}

const dev = new Developer("saba", 21, "python", "apple");
const mark = new Marketer("lika", 30, "marketingTool", "amazon");
const ac = new Acountant("girogi", 25, "qrExample", "spar");
console.log(dev.getDeveloper());
console.log(mark.getMarketer());
console.log(ac.getAcountant());



// Create a CarFactory class that have following methods, addCar, deleteCar, updateCar, getAllCars

class CarFactory {
  constructor(carArr = []) {
    this.carArr = carArr;
  }

  addCar(carName) {
    this.carArr.push(carName);
    return this.carArr;
  }
  deleteCar(carName) {
    let index = this.carArr.indexOf(carName);
    index > -1 ? this.carArr.splice(index, 1) : "car not found";
    return this.carArr;
  }
  updateCar(carName, newName) {
    let index = this.carArr.indexOf(carName);
    index > -1 ? (this.carArr[index] = newName) : "car not found";
    return this.carArr;
  }

  getAllCars() {
    this.carArr.map((item) => {
      console.log(item);
    });
  }
}

const cars = new CarFactory(["x7"]);
console.log(cars.addCar("civic"));
console.log(cars.deleteCar("x7"));
console.log(cars.updateCar("civic", "honda"));
cars.getAllCars()
