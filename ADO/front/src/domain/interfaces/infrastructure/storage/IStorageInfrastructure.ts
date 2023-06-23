export interface IStorageInfrastructure {
  setGlobal: (key: string, value: string) => Promise<void>;
  removeValue: (key: string) => Promise<void>;
  getGlobal: (key: string) => Promise<string | undefined>;
}
