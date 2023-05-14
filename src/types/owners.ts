export interface Owner {
  id: number;
  name: string;
  lastName: string;
  dni: string;
  email: string;
  phone: string;
  createdAt: string;
}

export interface EditOwnerFormValues {
  name: string;
  lastName: string;
  dni: string;
  email: string;
  phone: string;
}
