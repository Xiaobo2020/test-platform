const template = 'Hello {{a + b + 1}} World {{c}}';
const data = {a: 3, b: 2, c: 1};

function parseText (text) {
  const regText = /\{\{(.+?)\}\}/g;
  const spices = text.split(regText); // ['Hello ', 'a + b', ' World ', 'c']
  const matches = text.match(regText); // ['{{a + b}}', '{{c}}']
  const tokens = spices.map(item => {
    if (matches && matches.indexOf('{{' + item + '}}') > -1) {
      return '(' + item + ')';
    } else {
      return '`' + item + '`';
    }
  });
  return tokens.join('+');
}

function computeExpression (expr, scope) {
  const fn = new Function('scope', 'with(scope){return ' + expr + '}');
  return fn(scope);
}
function compiler () {
  const expr = parseText(template);
  const ret = computeExpression(expr, data);
  console.log(ret);
}

export default function () {
  compiler();
}