export interface Vaccine {
  id: number;
  name: string;
  date: string;
  location: string;
  professional: string;
  dose: string;
  validity: string;
  status: "aplicada" | "pendente";
}