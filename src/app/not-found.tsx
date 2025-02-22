import Link from "next/link";

const NotFound = () => {

    return (
        <div className="h-screen w-screen flex items-center justify-center flex-col gap-5">
            <h1 className="text-4xl font-bold">Erro 404</h1>
            <p>Página Não encontrada</p>
            <Link
                className="bg-foreground p-2 rounded text-background"
                href={'/'}>Retorne ao inicio</Link>
        </div>
    );
};

export default NotFound;