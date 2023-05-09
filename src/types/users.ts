export interface User {
  id: number;
  name: string;
  lastName: string;
  email: string;
}

export interface RegisterFormValues {
  name: string;
  lastName: string;
  email: string;
  password: string;
  role: string;
}
