import ListVaccine from "@/components/list-Itens/list-vaccine";
import ModalDialog from "@/components/modal-dialog";
import { Vaccine } from "@/interfaces/vaccines";
import { Syringe } from "lucide-react";
// import addVacine from "./actions/vacine";

const Vacina = () => {

  const vaccines: Vaccine[] = [
    {
      id: 1,
      name: 'Hepatite B',
      date: '10/10/2020',
      location: 'UBS',
      professional: 'Dr. Fulano',
      dose: '1ª',
      validity: '10/10/2021',
      status: "aplicada",
    },
    {
      id: 2,
      name: 'Hepatite B',
      date: '10/10/2020',
      location: 'UBS',
      professional: 'Dr. Fulano',
      dose: '2ª',
      validity: '10/10/2021',
      status: "aplicada",
    },
    {
      id: 3,
      name: 'Hepatite B',
      date: '10/10/2020',
      location: 'UBS',
      professional: 'Dr. Fulano',
      dose: '3ª',
      validity: '10/10/2021',
      status: "pendente",
    },
  ]

  return (
    <section className="flex flex-col flex-grow items-center p-5 gap-10">
      <div className="flex flex-col justify-center items-center gap-2">
        <h1 className="font-bold">Historico de Exames</h1>
        <Syringe />
      </div>
      <div className="w-full flex-1 overflow-y-auto max-h-[70vh] p-2 rounded-md">

        <ListVaccine vaccines={vaccines} />
      </div>
      <form action={async () => {
        "use server"
        console.log("foi")
      }}>
        <ModalDialog
          description="Adicionar vacina"
          title="Vacina"
          textButtomConfirm="Salvar"
          inputs={
            [{
              name: "name",
              label: "Nome",
              placeholder: "Nome da Vacina",
            },
            {
              name: "date",
              label: "Data",
              placeholder: "Data de aplicação",
              type: "datetime-local",
            },
            {
              name: "location",
              label: "Local",
              placeholder: "Local de aplicação",
            },
            {
              name: "professional",
              label: "Profissional",
              placeholder: "Nome do Profissional",
            },
            {
              name: "dose",
              label: "Dose",
              placeholder: "Dose de aplicação",
              type: "number"
            },
            {
              name: "validity",
              label: "Validade",
              placeholder: "Validade da vacina",
              type: "date"
            },
            {
              name: "status",
              label: "Aplicada",
              placeholder: "Status da Vacina",
              type: "select",
              options: [
                "aplicada",
                "pendente"
              ]
            },
            ]}>
          Adicionar
        </ModalDialog>
      </form>
    </section>
  );
}

export default Vacina;
