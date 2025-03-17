import CarouselPets from "@/components/carousel-pets";
import Header from "@/components/header";
import { Cat, ClipboardPlus, CrossIcon, PlusCircle, Settings, Syringe } from "lucide-react";
import Link from "next/link";

export default function Home() {

  const hoverIcon = "transition-transform duration-200 hover:scale-125"

  return (
    <>
      <Header />
      <section className="relative flex flex-col flex-grow items-center p-5 gap-10">
        <CarouselPets />
        <div className="flex justify-center items-center gap-5 fixed left-1/2 bottom-5 transform -translate-x-1/2 lg:left-10 lg:top-1/2 lg:flex-col lg:transform -translate-y-1/2 p-4 rounded-full shadow-lg border">
          <Link href={"/"}>
            <Cat width={30} height={30} className={hoverIcon} />
          </Link>
          <Link href={"/vacinas"}>
            <Syringe width={30} height={30} className={hoverIcon} />
          </Link>
          <Link href={"/consultas"}>
            <ClipboardPlus width={30} height={30} className={hoverIcon} />
          </Link>
          <Link href={"/exames"}>
            <CrossIcon width={30} height={30} className={hoverIcon} />
          </Link>
          <Link href={"/ajustes"}>
            <Settings width={30} height={30} className={hoverIcon} />
          </Link>
        </div>
        <div className="flex gap-3 border p-5 rounded-lg ">
          <p>Adicionar Pet</p>
          <PlusCircle />
        </div>
      </section>
    </>
  );
}
