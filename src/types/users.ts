export interface User {
  id: string;
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
