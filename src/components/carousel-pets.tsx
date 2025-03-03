import * as React from "react"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

const CarouselPets: React.FC = () => {

    const listPets = [
        { id: 2, name: "Omalley", image: "/omalley.jpeg" },
        { id: 1, name: "Hades", image: "/hades.jpeg" },
    ]

    return (
        <div className="flex flex-col justify-center w-full items-center gap-5">
            <Carousel className="w-2/3 max-w-xs">
                <CarouselContent>
                    {listPets.map((cat, index) => (
                        <CarouselItem key={index}>
                            <div className="p-1 flex flex-col justify-center items-center gap-5">
                                <Avatar className="w-20 h-20">
                                    <AvatarImage src={cat.image} alt="icon" />
                                    <AvatarFallback>{cat.name}</AvatarFallback>
                                </Avatar>
                                <p className="font-bold text-2xl text-foreground">{cat.name}</p>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    )
}

export default CarouselPets;