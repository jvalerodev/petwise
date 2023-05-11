import type { User, Pet } from './types';

export interface UserState {
  user: User | null;
}

export interface SelectUser {
  user: UserState;
}

export interface PetsState {
  pets: Pet[];
}

export interface SelectPets {
  pets: PetsState;
}

export interface AddPetAction {
  pet: Pet;
}
