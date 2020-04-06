class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayHi () {
    console.log(`Hi, i am ${this.name} and i am ${this.age} years old.`);
  }
}

const runner = () => {
  const instance = new Person('Xiaobo2020', 26);
  instance.sayHi();
};

export default runner;
