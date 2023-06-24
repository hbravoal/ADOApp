export interface ClientResponse {
  identification: string;
  documentTypeId: number;
  documentType: DocumentTypeResponse;
  name: string;
  lastName: string;
  genderId: number;
  gender: GenderResponse;
  id: number;
  created: string;
  lastModified: any;
  active: boolean;
}

export interface GenderResponse {
  description: string;
  id: number;
  created: string;
  lastModified: any;
  active: boolean;
}

export interface DocumentTypeResponse {
  description: string;
  id: number;
  created: string;
  lastModified: string;
  active: boolean;
}
