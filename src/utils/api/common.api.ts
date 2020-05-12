import BaseApi from './client/BaseApi';
import { UserModel } from '../../features/users/usersSlice';
import { TechRadarConfig, Entries } from '../../components/TechRadar/config';

class CommonApi extends BaseApi {
  public loadUsers = () => this.get('https://jsonplaceholder.typicode.com/users') as Promise<UserModel[]>;
  public loadConfig = () => this.get('https://jsonplaceholder.typicode.com/users') as Promise<TechRadarConfig>; // @TODO: relpace with Backend-URI
  public loadEntries = () => this.get('https://jsonplaceholder.typicode.com/users') as Promise<Entries[]>; // @TODO: relpace with Backend-URI
}

export const commonApi = new CommonApi();
