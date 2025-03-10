import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, PlusCircle, XCircle } from "lucide-react";

const Vacina = () => {

    const vaccines = [
        {
            id: 1,
            nome: 'Hepatite B',
            data: '10/10/2020',
            local: 'UBS',
            profissional: 'Dr. Fulano',
            dose: '1ª',
            validade: '10/10/2021',
            status: "Aplicada",
        },
        {
            id: 2,
            nome: 'Hepatite B',
            data: '10/10/2020',
            local: 'UBS',
            profissional: 'Dr. Fulano',
            dose: '2ª',
            validade: '10/10/2021',
            status: "Aplicada",
        },
        {
            id: 3,
            nome: 'Hepatite B',
            data: '10/10/2020',
            local: 'UBS',
            profissional: 'Dr. Fulano',
            dose: '3ª',
            validade: '10/10/2021',
            status: "Aplicada",
        },
    ]

    return (
        <section className="flex flex-col flex-grow items-center p-5 gap-10">
            <h1 className="font-bold">Carteira de vacinação</h1>
            <div className="w-full flex-1 overflow-y-auto max-h-[70vh] p-2 border border-gray-300 rounded-md">
                {vaccines.map((vaccine) => (
                    <Card key={vaccine.id} className="mb-4">
                        <CardContent className="p-4 flex justify-between items-center">
                            <div>
                                <p className="text-lg font-semibold">{vaccine.nome}</p>
                                <p className="text-sm text-gray-600">Data: {vaccine.data}</p>
                            </div>
                            {vaccine.status === "Aplicada" ? (
                                <CheckCircle className="w-6 h-6 text-green-500" />
                            ) : (
                                <XCircle className="w-6 h-6 text-red-500" />
                            )}
                        </CardContent>
                    </Card>
                ))}
            </div>
            <div className="flex p-5 rounded-lg gap-3 bg-foreground text-background">
                <p>Adicionar Vacina</p>
                <PlusCircle className="" /> 
            </div>
        </section>
    );
}

export default Vacina;
