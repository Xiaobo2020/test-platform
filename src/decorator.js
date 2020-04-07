function logger (target, name, descriptor) {
  console.log(target);
  console.log(name);
  console.log(descriptor);
}
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  @logger
  sayHi () {
    console.log(`Hi, i am ${this.name} and i am ${this.age} years old.`);
  }
}

const runner = () => {
  const instance = new Person('Xiaobo2020', 26);
  instance.sayHi();
};

export default runner;
