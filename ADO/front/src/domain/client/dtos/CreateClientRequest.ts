export interface CreateClientRequest {
  identification: string;
  documentTypeId: number;
  name: string;
  lastName: string;
  genderId: number;
  active: boolean;
}
