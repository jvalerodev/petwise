export interface Report {
  id: number;
  petName: string;
  ownerName: string;
  ownerLastName: string;
  diagnosis: string;
  treatment: string;
  indications: string;
  date: string;
}

export interface CreateReportFormValues {
  petId: string;
  diagnosis: string;
  treatment: string;
  indications: string;
}
