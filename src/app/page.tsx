import CarouselPets from "@/components/carousel-pets";
import Header from "@/components/header";
import { Cat, ClipboardPlus, CrossIcon, Settings, Syringe } from "lucide-react";
import Link from "next/link";

export default function Home() {

  const styleLink = "border border-foreground bg-foreground flex flex-grow rounded-xl items-center justify-center gap-2";

  return (
    <>
      <Header />
      <section className="flex flex-col flex-grow justify-around items-center p-5">
        <div className="flex flex-1">
          <CarouselPets />
        </div>
        <div className="flex flex-col flex-1 gap-5 p-5 w-full max-w-lg text-black">
          <Link href={"/Exames"} className={styleLink}>
            <CrossIcon />
            <p className="text-lg hover:text-2xl">Exames</p>
          </Link>
          <Link href={"/Consultas"} className={styleLink}>
            <ClipboardPlus />
            <p className="text-lg hover:text-2xl">Consultas</p>
          </Link>
          <Link href={"/vacinas"} className={styleLink}>
            <Syringe />
            <p className="text-lg hover:text-2xl">Vacinas</p>
          </Link>
          <Link href={"/Meus Pets"} className={styleLink}>
            <Cat />
            <p className="text-lg hover:text-2xl">Meus Pets</p>
          </Link>
          <Link href={"/Meus Pets"} className={styleLink}>
            <Settings />
            <p className="text-lg hover:text-2xl">Configurações</p>
          </Link>
        </div>
      </section>
    </>
  );
}
