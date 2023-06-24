export interface ICRUDInfrastructure<T>
  extends IGetAllInfrastructure<T>,
    ICreateInfrastructure<T>,
    IUpdateInfrastructure<T>,
    IGetByIdInfrastructure<T>,
    IDeleteInfrastructure {}

export interface IGetAllInfrastructure<T> {
  GetAll: (pageNumber: number, pageSize: number, path: string) => Promise<T[]>;
}

export interface IGetByIdInfrastructure<T> {
  Get: (id: number, path: string) => Promise<T>;
}
export interface IDeleteInfrastructure {
  Delete: (id: number, path: string) => Promise<void>;
}
export interface ICreateInfrastructure<T> {
  Post: (obj: any, path: string) => Promise<T>;
}
export interface IUpdateInfrastructure<T> {
  Update: (obj: T, path: string) => Promise<T>;
}
