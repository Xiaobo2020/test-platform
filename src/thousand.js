function thousandWithRegx (num) {
  const numStr = String(num);
  const regx = /(\d)(?=(\d{3})+$)/g;
  return numStr.replace(regx, '$1,');
}

function thousandWithoutRegx (num) {
  let n = Number(num);
  let ret = '';
  while (n !== 0) {
    ret = (',' + n % 1000) + ret ;
    n = Math.floor(n / 1000);
  }
  return ret.indexOf(',') === 0 ? ret.slice(1) : ret;
}

export default function () {
  const num = 123456;
  console.log(thousandWithRegx(num));
  console.log(thousandWithoutRegx(num));
}