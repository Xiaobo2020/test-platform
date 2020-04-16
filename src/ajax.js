function ajax ({
  url,
  params,
  method,
  headers = {},
  useCookie = true,
}) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    xhr.withCredentials = useCookie; // 前端设置是否带cookie
    // 设置请求头
    for (let key in headers) {
      xhr.setRequestHeader(key, headers[key]);
    }
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
          resolve(xhr.response);
        } else {
          reject(xhr.response);
        }
      }
    }
  });
}
