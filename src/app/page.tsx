import CarouselPets from "@/components/carousel-pets";
import Header from "@/components/header";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <section className="flex flex-col flex-grow justify-around items-center p-5">
        <div className="flex flex-1">
        <CarouselPets />
        </div>
        <div className="flex flex-col flex-1 gap-5 p-5 w-full max-w-lg bg-foreground rounded-xl">
          <Link href={"/Exames"} className="bg-background flex flex-grow rounded-xl items-center justify-center">
            <p className="text-foreground text-lg hover:text-2xl">Exames</p>
          </Link>
          <Link href={"/Consultas"} className="bg-background flex flex-grow rounded-xl items-center justify-center">
            <p className="text-foreground text-lg hover:text-2xl">Consultas</p>
          </Link>
          <Link href={"/vacinas"} className="bg-background flex flex-grow rounded-xl items-center justify-center">
            <p className="text-foreground text-lg hover:text-2xl">Vacinas</p>
          </Link>
          <Link href={"/Meus Pets"} className="bg-background flex flex-grow rounded-xl items-center justify-center">
            <p className="text-foreground text-lg hover:text-2xl">Meus Pets</p>
          </Link>
        </div>
      </section>
    </>
  );
}
