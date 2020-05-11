import 'whatwg-fetch';
import encodeUrlParams from './encodeUrlParams';

export default class ApiRequest {
  get = (url, query) => {
    const ulrParams = encodeUrlParams(query);
    const requestUrl = !ulrParams ? url : `${url}?${ulrParams}`;
    const params = {
      method: 'GET',
    };
    return fetch(requestUrl, params);
  }

  post = (url, payload) => {
    const params = {
      method: 'POST',
      cache: 'no-cache',
      headers: this.getRequestHeaders(),
      body: JSON.stringify(payload),
    };
    return fetch(url, params);
  }

  postFile = (url, file, payload) => {
    const data = new FormData();
    if (file) {
      data.append('file', file);
    }
    if (payload) {
      Object.keys(payload).forEach((name) => {
        data.append(name, payload[name]);
      });
    }
    const params = {
      method: 'POST',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: this.getRequestHeaders(null), // 'multipart/form-data'
      body: data
    };
    return fetch(url, params);
  }

  getRequestHeaders(contentType = 'application/json') {
    const headers = {
      'Content-Type': contentType
    };

    return headers;
  }
}
