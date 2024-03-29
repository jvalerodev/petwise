export interface Pet {
  id: string;
  name: string;
  species: string;
  gender: string;
  age: number;
  weight: number;
  ownerName: string;
  ownerLastName: string;
  createdAt: string;
}
export interface CreatePetFormValues {
  name: string;
  species: string;
  gender: string;
  age: number;
  weight: number;
  ownerName: string;
  ownerLastName: string;
  ownerDni: string;
  ownerEmail: string;
}

export interface EditPetFormValues {
  name: string;
  species: string;
  gender: string;
  age: number;
  weight: number;
}
