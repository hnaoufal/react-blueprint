import BaseApi from './client/BaseApi';

class CommonApi extends BaseApi {
  public loadConfig1 = () => this.get('https://jsonplaceholder.typicode.com/users') as Promise<any>; // @TODO: relpace with Backend-URI
  public loadConfig2 = () => this.get('https://jsonplaceholder.typicode.com/users') as Promise<any>; // @TODO: relpace with Backend-URI
  public loadConfig3 = () => this.get('https://jsonplaceholder.typicode.com/users') as Promise<any>; // @TODO: relpace with Backend-URI
  public loadConfig4 = () => this.get('https://jsonplaceholder.typicode.com/users') as Promise<any>; // @TODO: relpace with Backend-URI
}

export const commonApi = new CommonApi();
