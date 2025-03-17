import ListAppointment from "@/components/list-Itens/list-appointment";
import ModalDialog from "@/components/modal-dialog";
import { Appointment } from "@/interfaces/appointment";
import { ClipboardPlus } from "lucide-react";
// import addVacine from "./actions/vacine";

const Consultas = () => {

    const appointments: Appointment[] = [
        {
            id: 1,
            petName: "Luna",
            professional: "Dr. Carlos Silva",
            date: "05/03/2025-14:00",
            status: "realizada",
            location: "Clínica PetVida - Unidade Centro",
            notes: "Consulta de rotina, tudo normal.",
        },
        {
            id: 2,
            petName: "Thor",
            professional: "Dra. Ana Paula",
            date: "12/03/2025-10:30",
            status: "pendente",
            location: "Clínica Bicho Feliz",
            notes: "Alergia na pele a ser avaliada.",
        },
        {
            id: 3,
            petName: "Mia",
            professional: "Dr. Renato Oliveira",
            date: "20/03/2025-16:00",
            status: "pendente",
            location: "Hospital Veterinário São Francisco",
            notes: "Cancelada por indisponibilidade do tutor.",
        },
        {
            id: 4,
            petName: "Simba",
            professional: "Dra. Carla Mendes",
            date: "22/03/2025-11:00",
            status: "pendente",
            location: "Clínica PetCare - Unidade Norte",
        },
    ];
    return (
        <section className="flex flex-col flex-grow items-center p-5 gap-10">
            <div className="flex flex-col justify-center items-center gap-2">
                <h1 className="font-bold">Historico de Exames</h1>
                <ClipboardPlus />
            </div>
            <div className="w-full flex-1 overflow-y-auto max-h-[70vh] p-2 rounded-md">

                <ListAppointment appointment={appointments} />
            </div>
            <form action={async () => {
                "use server"
                console.log("foi")
            }}>
                <ModalDialog
                    description="Adicionar Consulta"
                    title="Consulta"
                    textButtomConfirm="Salvar"
                    inputs={
                        [{
                            name: "Pet",
                            label: "Pet",
                            placeholder: "Selecione o Pet",
                            type: "select",
                            options: ["Hades", "Caju"]
                        },
                        {
                            name: "professional",
                            label: "Profissional",
                            placeholder: "Nome do Profissional",
                        },
                        {
                            name: "date",
                            label: "Data",
                            placeholder: "Data de realização",
                            type: "datetime-local"
                        },
                        {
                            name: "dose",
                            label: "Dose",
                            placeholder: "Dose de aplicação",
                            type: "number"
                        },
                        {
                            name: "location",
                            label: "Local",
                            placeholder: "local de realização",
                        },
                        {
                            name: "status",
                            label: "Aplicada",
                            placeholder: "Status da Vacina",
                            type: "select",
                            options: [
                                "realizada",
                                "pendente"
                            ]
                        },
                        {
                            name: "notes",
                            label: "Observações",
                            placeholder: "observações"
                        }
                        ]}>
                    Adicionar
                </ModalDialog>
            </form>
        </section>
    );
}

export default Consultas;
