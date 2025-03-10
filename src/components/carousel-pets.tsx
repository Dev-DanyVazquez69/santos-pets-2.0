import * as React from "react"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Pets } from "@/interfaces/pets"
import { Card, CardContent } from "./ui/card"

const CarouselPets: React.FC = () => {

    const pets: Pets[] = [
        { id: 2, name: "Omalley", idade: 5, raca: "SRD", cor: "Branco", sexo: "Macho", apelido: "Magrinho", image: "/omalley.jpeg" },
        { id: 1, name: "Hades", idade: 5, raca: "SRD", cor: "Marrom", sexo: "Macho", apelido: "Gordinho", image: "/hades.jpeg" },
    ]

    const styleLabel = "font-bold text-lg"

    return (
        <div className="flex flex-col justify-center w-full items-center gap-5">
            <Carousel className="w-2/3 max-w-xs">
                <CarouselContent>
                    {pets.map((pet, index) => (
                        <CarouselItem key={index}>
                            <div className="p-1 flex flex-col justify-center items-center gap-5">
                                <Avatar className="w-full h-full border-4 border-foreground">
                                    <AvatarImage src={pet.image} alt="icon" />
                                    <AvatarFallback>{pet.name}</AvatarFallback>
                                </Avatar>
                                <h1>{pet.name}</h1>
                                <Card className="w-full p-4 bg-foreground rounded-lg text-background shadow-md">
                                    <CardContent className="grid grid-cols-2 gap-y-2">
                                        <span className={styleLabel}>Idade:</span> <span>{pet.idade} anos</span>
                                        <span className={styleLabel}>Sexo:</span> <span>{pet.sexo}</span>
                                        <span className={styleLabel}>Raça:</span> <span>{pet.raca}</span>
                                        <span className={styleLabel}>Cor:</span> <span>{pet.cor}</span>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="bg-background text-foreground border-none" />
                <CarouselNext className="bg-background text-foreground border-none" />
            </Carousel>

        </div>
    )
}

export default CarouselPets;