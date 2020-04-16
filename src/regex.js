
// 匹配前面是 -
const regPreIs = /(?<=\-)\w/g;
// 匹配前面不是 -
const regPreIsNot = /(?<!\-)\w/g;
// 匹配后面是 -
const regSufIs = /\w(?=\-)/g;
// 匹配后面不是 -
const regSufIsNot = /\w(?!\-)/g;

const fn = c => c.toUpperCase();

function thousandSeprator () {
  const numStr = '1234567';
  const reg = /(\d)(?=(\d{3})+$)/g;
  console.log(numStr.replace(reg, '$1,'));
}

function toggleChar () {
  const str = 'ab-cd-ef';

  const array = [
    str.replace(regPreIs, fn), // ab-Cd-Ef
    str.replace(regPreIsNot, fn), // AB-cD-eF
    str.replace(regSufIs, fn), // aB-cD-ef
    str.replace(regSufIsNot, fn), // Ab-Cd-EF
  ];

  console.log(array);
}

export default function () {
  // toggleChar();
  thousandSeprator();
}