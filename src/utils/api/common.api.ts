import BaseApi from './client/BaseApi';

class CommonApi extends BaseApi {
  public loadUsers = () => this.get('https://www.jsonplaceholder.com/users');
}

export const commonApi = new CommonApi();
