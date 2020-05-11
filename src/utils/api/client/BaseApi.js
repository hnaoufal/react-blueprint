import { apiClient } from './ApiClient';

export default class BaseApi {
  client;

  constructor(client = apiClient) {
    this.client = client;
  }

  get = (...args) =>
    this.client.get(...args)

  post = (...args) =>
    this.client.post(...args)

  put = (...args) =>
    this.client.put(...args);

  delete = (...args) =>
    this.client.delete(...args);

  postFile = (...args) =>
    this.client.postFile(...args)
}
