import ApiRequest from './ApiRequest';

export class ApiClient {
  constructor(apiUrl) {
    this.apiUrl = apiUrl;
    this.request = new ApiRequest();
  }

  /**
   * Perform get requst
   * @param  {String} url
   * @param  {Object} query params
   * @return {Promise}
   */
  get = (url, query) =>
    this.request.get(`${this.apiUrl}${url}`, query)
      .then(ApiClient.processResponse)


  /**
   * Perform post requst
   * @param  {String} url
   * @param  {Object} payload  data
   * @return {Promise}
   */
  post = (url, payload) =>
    this.request.post(`${this.apiUrl}${url}`, payload)
      .then(ApiClient.processResponse)

  /**
  * Perform post file requst
  * @param  {String} url
  * @param  {File} file  data
  * @return {Promise}
  */
  postFile = (url, file, payload) =>
    this.request.postFile(`${this.apiUrl}${url}`, file, payload)
      .then(ApiClient.processResponse);

  /**
   * Check request complete successfully
   * @param  {Response} response
   * @return {Object}
   */
  static processResponse(response) {
    return response.json().then((json) => {
      if (response.status < 200 || response.status >= 400) {
        throw new Error(json);
      }
      return json;
    });
  }
}

export const apiClient = new ApiClient('');
