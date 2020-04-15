function Foo () {
  this.id = 1;
}

function fooRunner () {
  const a = new Foo();
  console.log(a instanceof Foo);
  console.log(a.__proto__ === Foo.prototype);
}

export default function runner () {
  fooRunner();
}