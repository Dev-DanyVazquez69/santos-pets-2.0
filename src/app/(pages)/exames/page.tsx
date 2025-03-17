import ListExams from "@/components/list-Itens/list-exams";
import ModalDialog from "@/components/modal-dialog";
import { Exams } from "@/interfaces/exams";
import { CrossIcon } from "lucide-react";
// import addVacine from "./actions/vacine";

const Vacina = () => {

    const exams: Exams[] = [
        { id: 1, name: "Hemograma Completo", date: "05/03/2024", status: "Realizado" },
        { id: 2, name: "Ultrassonografia Abdominal", date: "12/04/2024", status: "Pendente" },
    ]

    return (
        <section className="flex flex-col flex-grow items-center p-5 gap-10">
            <div className="flex flex-col justify-center items-center gap-2">
                <h1 className="font-bold">Historico de Exames</h1>
                <CrossIcon />
            </div>
            <div className="w-full flex-1 overflow-y-auto max-h-[70vh] p-2 rounded-md">

                <ListExams exams={exams} />
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
