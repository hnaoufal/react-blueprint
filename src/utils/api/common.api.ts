import BaseApi from './client/BaseApi';
import { UserModel } from '../../features/users/usersSlice';

class CommonApi extends BaseApi {
  public loadUsers = () => this.get('https://jsonplaceholder.typicode.com/users') as Promise<UserModel[]>;
  // public loadConfig = () => this.get('https://jsonplaceholder.typicode.com/users') as Promise<UserModel[]>;
  // public loadEntries = () => this.get('https://jsonplaceholder.typicode.com/users') as Promise<UserModel[]>;
}

export const commonApi = new CommonApi();
