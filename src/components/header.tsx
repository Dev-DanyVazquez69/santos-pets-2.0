import { ModeToggle } from "@/components/ui/mode-toggle";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const Header: React.FC = () => {
    const links: {
        name: string,
        href: string
    }[] = [
            {
                name: "Exames",
                href: "/exames"
            },
            {
                name: "Consultas",
                href: "/consultas"
            },
            {
                name: "Vacinas",
                href: "/vacinas"
            },
            {
                name: "Ajustes",
                href: "/ajustes"
            }
        ]

    return (
        <header className="flex justify-between items-center w-full rounded-lg">
            <div className="hidden lg:flex gap-6 justify-center items-center">
                <Link href={"/"}>
                    <Avatar>
                        <AvatarImage src="/web-app-manifest-192x192.png" alt="icon" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </Link>
                {links.map((link, index) => (
                    <Link className="scale-100 opacity-75 hover:scale-110 transform transition duration-300 ease-in-out hover:opacity-100" key={index} href={link.href}>{link.name}</Link>
                ))}
            </div>
            <div className="flex gap-2">
                <Link href={"/"} className="lg:hidden">
                    <Avatar>
                        <AvatarImage src="/web-app-manifest-192x192.png" alt="icon" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </Link>
                <div className="hidden lg:flex">
                    <ModeToggle />
                </div>
            </div>
            <div className="flex lg:hidden">
                <Sheet>
                    <SheetTrigger>
                        <Menu />
                    </SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            <SheetTitle>Menu</SheetTitle>
                            <SheetDescription>
                                <div className="flex flex-col gap-4 mt-5">
                                    {links.map((link, index) => (
                                        <SheetClose asChild key={index}>
                                            <Link className="text-foreground" href={link.href}>{link.name}</Link>
                                        </SheetClose>
                                    ))}
                                    <ModeToggle />
                                </div>
                            </SheetDescription>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    )
}

export default Header;