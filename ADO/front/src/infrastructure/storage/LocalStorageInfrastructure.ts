import {IStorageInfrastructure} from '../../domain/interfaces/infrastructure/storage';

export class LocalStorageInfrastructure implements IStorageInfrastructure {
  public async setGlobal(key: string, value: string): Promise<void> {
    localStorage.setItem(key, value);
    //
  }
  public async removeValue(key: string): Promise<void> {
    localStorage.removeItem(key);
  }
  public async getGlobal(key: string): Promise<string | undefined> {
    //
    const saved = localStorage.getItem(key);
    return saved || undefined;
  }
}
