export default function () {
  function space () {
    this.a = 1;
    const obj = {
      a: 2,
      fn: () => {
        console.log(this.a);
      }
    };
    obj.fn(); // 1
    obj.fn = obj.fn.bind(obj);
    obj.fn(); // 1
  }
  space();
}