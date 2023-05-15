export interface Report {
  id: string;
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

export interface EditReportFormValues {
  diagnosis: string;
  treatment: string;
  indications: string;
}
