// client.js
function jsonp ({url, params, callback}) {
  return new Promise((resolve) => {
    // 在window上创建回调函数
    window[callback] = function (data) {
      resolve(data);
      document.body.removeChild(script);
    };
    // 构建url上的参数
    const reqParams = {
      ...params,
      callback,
    };
    const reqParamStrs = [];
    for (let key in reqParams) {
      reqParamStrs.push(`${key}=${reqParams[key]}`);
    }

    // 创建一个script标签
    const script = document.createElement('script');
    script.src = `${url}?${reqParamStrs.join('&')}`;
    document.body.appendChild(script);
  });
}

// http://localhost:3000/jsonp?a=1&callback=foo
jsonp({
  url: 'http://localhost:3000/jsonp',
  params: {
    a: 1
  },
  callback: 'foo'
}).then(data => {
  console.log('This is data got with jsonp ', data);
});

// server.js 返回数据
// `${callback}('Hello World')`
// This is data got with jsonp Hello World