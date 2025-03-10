import Image from "next/image"
import { signIn } from "@/app/auth"
import Link from "next/link"
import CredentialsRegisterForm from "@/components/credentials-input-form/credentials-register"

export default function Register() {


    return (
        <>
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
                        <CredentialsRegisterForm />
                        <Link
                            className="self-center font-extralight text-xs"
                            href={"/signin"}>
                            Já possui conta?
                        </Link>
                        <form
                            action={async () => {
                                "use server"
                                await signIn("google")
                            }}
                        >
                            <div className="flex gap-2 bg-background p-2 rounded-full justify-center">
                                <Image
                                    src={'/google.png'}
                                    alt="google-icon"
                                    width={20}
                                    height={20}
                                    className="object-cover" />
                                <button
                                    className="text-xs"
                                    type="submit">
                                    Cadastre-se com o Google
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}