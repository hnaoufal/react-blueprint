import axios from 'axios';
import encodeUrlParams from './encodeUrlParams';

export default class ApiRequest {
  get = (url, query) => {
    const urlParams = encodeUrlParams(query);
    const requestUrl = !urlParams ? url : `${url}?${urlParams}`;
    return axios.get(requestUrl);
  }

  post = (url, payload) => {
    return axios.post(url, payload);
  }

  patch = (url, payload) => {
    return axios.patch(url, payload);
  }

  delete = (url) => {
    return axios.delete(url);
  }

  delete = (url) => {
    return axios.delete(url);
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
