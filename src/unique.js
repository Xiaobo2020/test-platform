const users = [
  {id: 1, name: 'a'},
  {id: 2, name: 'a'},
  {id: 3, name: 'b'},
  {id: 4, name: 'v'},
];

export default function runner () {
  Array.prototype.unique = function () {
    let ret = new Set(this.map(item => item.name));
    ret = Array.from(ret);
    return ret;
  }
  console.log(users.unique(), users);
}