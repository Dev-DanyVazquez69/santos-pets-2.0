import Image from "next/image"
import { SendHorizonal } from "lucide-react";
import logout from "./action/signout";

export default function Login() {

    return (
        <div className="flex gap-10 flex-col items-center justify-center bg-blue">
            <h1 className="text-4xl font-extrabold">Santos Petz</h1>
            <div className="flex flex-col gap-2 md:flex-row md:gap-5  items-center justify-center">
                <div className="relative w-40 h-40 rounded-full overflow-hidden flex gap-7 items-center justify-center">
                    <Image
                        src={'/web-app-manifest-512x512.png'}
                        alt="logo"
                        fill
                        className="object-cover" />
                </div>
                <div className="flex flex-col gap-5">
                    <form
                        className="flex flex-col gap-5 items-center"
                        action={logout}
                    >
                        <p>Tem certeza que deseja sair da sua conta?</p>
                        <button
                            type="submit"
                            className="p-1 bg-foreground font-extrabold border-2 border-background rounded text-background flex gap-2 items-center justify-center text-sm">
                            Sair
                            <SendHorizonal />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}