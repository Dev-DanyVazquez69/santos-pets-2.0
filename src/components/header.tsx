import { ModeToggle } from "@/components/ui/mode-toggle";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";

const Header: React.FC = () => {
    const links: {
        name: string,
        href: string
    }[] = [
            {
                name: "Inicio",
                href: "#inicial"
            },
            {
                name: "Pets",
                href: "#pets"
            },
            {
                name: "Perfil",
                href: "#profile"
            },
            {
                name: "Ajustes",
                href: "#"
            },
        ]

    return (
        <header className="justify-between flex items-center md:w-10/12 p-4 border rounded-lg mx-auto my-5 bg-foreground">
            <div className="hidden lg:flex gap-6">
                {links.map((link, index) => (
                    <Link className="scale-100 font-semibold text-background hover:scale-110 transform transition duration-300 ease-in-out hover:opacity-75" key={index} href={link.href}>{link.name}</Link>
                ))}
            </div>
            <ModeToggle />
            <div className="flex lg:hidden">
                <Sheet>
                    <SheetTrigger>
                        <Menu className="text-background"/>
                    </SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            <SheetTitle>Menu</SheetTitle>
                            <SheetDescription>
                                <div className="flex flex-col gap-4 mt-5 text-background">
                                    {links.map((link, index) => (
                                        <SheetClose asChild key={index}>
                                            <Link href={link.href}>{link.name}</Link>
                                        </SheetClose>
                                    ))}
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