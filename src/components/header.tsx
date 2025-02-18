import { ModeToggle } from "@/components/ui/mode-toggle";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "./ui/avatar"

const Header: React.FC = () => {
    const links: {
        name: string,
        href: string
    }[] = [
            {
                name: "Inicio",
                href: "/inicial"
            },
            {
                name: "Pets",
                href: "/pets"
            },
            {
                name: "Perfil",
                href: "/profile"
            },
            {
                name: "Ajustes",
                href: "/settings"
            },
        ]

    return (
        <header className="justify-between flex items-center md:w-10/12 p-4 border rounded-lg mx-auto my-5 bg-foreground">
            <div className="hidden lg:flex gap-6">
                {links.map((link, index) => (
                    <Link className="scale-100 text-background hover:scale-110 transform transition duration-300 ease-in-out hover:opacity-75" key={index} href={link.href}>{link.name}</Link>
                ))}
            </div>
            <div className="flex gap-2 items-center justify-center">
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <ModeToggle />
            </div>
            <div className="flex lg:hidden">
                <Sheet>
                    <SheetTrigger>
                        <Menu className="text-background" />
                    </SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            <SheetTitle>Menu</SheetTitle>
                            <SheetDescription>
                                <div className="flex flex-col gap-4 mt-5 text-foreground">
                                    {links.map((link, index) => (
                                        <SheetClose asChild key={index}>
                                            <Link href={link.href}>{link.name}</Link>
                                        </SheetClose>
                                    ))}
                                    <Link
                                        href={"/signout"}
                                        className="size-fit p-2 text-background bg-foreground rounded hover:p-3 animate-bounce">
                                        <p>Logout</p>
                                    </Link>
                                </div>
                            </SheetDescription>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
            </div>
        </header >
    )
}

export default Header;