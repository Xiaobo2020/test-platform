function reactive (obj) {
  return Object.keys(obj).reduce((acc, cur) => {
    return Object.defineProperty(acc, cur, {
      get: function () {
        console.log('[get]', obj[cur]);
        return obj[cur];
      },
      set: function (v) {
        obj[cur] = v;
        console.log('[set]', obj[cur]);
      }
    });
  }, {});
}

export default function runner () {
  const obj = {a: 1, b: 'Hello'};
  const obj2 = reactive(obj);
  console.log(obj2.a);
  obj2.a = 2;
  console.log(obj2.a);

  console.log(obj2.b);
  obj2.b = 'World';
  console.log(obj2.b);
}
