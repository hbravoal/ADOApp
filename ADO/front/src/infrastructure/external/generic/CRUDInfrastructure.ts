import BaseAPI from '../../BaseAPI';
import {ICRUDInfrastructure} from '../../../domain/interfaces/infrastructure/ICRUDInfrastructure';

export class CRUDInfrastructure<T>
  extends BaseAPI
  implements ICRUDInfrastructure<T>
{
  public async GetAll(
    pageNumber: number,
    pageSize: number,
    path: string,
  ): Promise<T[]> {
    return await this.get<T[]>(
      `${path}`,
      {
        pageNumber: pageNumber,
        pageSize: pageSize,
      },
      undefined,
    );
  }

  public async Update(request: T, path: string): Promise<T> {
    return await this.put<T>(`${path}`, request, undefined, undefined);
  }

  public async Post(request: any, path: string): Promise<T> {
    return await this.post<T>(`${path}`, request, undefined, undefined);
  }
  public async Delete(request: number, path: string): Promise<void> {
    await this.delete(`${path}`, request, undefined, undefined);
  }

  public async Get(id: number, path: string): Promise<T> {
    return await this.get<T>(
      `${path}`,
      {
        id: id,
      },
      undefined,
    );
  }
}
