export interface Owner {
  id: string;
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
