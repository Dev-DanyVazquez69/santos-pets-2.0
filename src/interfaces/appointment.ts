export interface Appointment {
    id: number;
    petName: string;
    professional: string;
    date: string;
    status: "realizada" | "pendente";
    location: string;
    notes?: string;
  }
  