import { type User } from './types';

export interface UserState {
  user: User | null;
}

export interface SelectUser {
  user: UserState;
}
