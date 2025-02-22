"use client"

import { SendHorizonal } from "lucide-react";
import signin from "@/app/(auth)/signin/action/signin";
import { useActionState } from "react";


const CredentialsLoginForm: React.FC = () => {


    const [state, formAction, isPending] = useActionState(signin, null)

    return (
        <>
            <form
                className="flex flex-col gap-5 items-center"
                action={formAction}
            >
                <label
                    htmlFor="email"
                    className="flex flex-col items-start justify-center">
                    Email
                    <input
                        className="text-foreground p-2 bg-transparent focus:outline-none focus:ring-2 focus:ring-green-400 border-b-2 border-white"
                        placeholder="Insira seu email"
                        name="email"
                        id="email"
                        type="email"
                        required />
                </label>
                <label
                    htmlFor="password"
                    className="flex flex-col items-start justify-center">
                    Password
                    <input
                        className="text-foreground p-2 bg-transparent focus:outline-none focus:ring-2 focus:ring-green-400 border-b-2 border-white"
                        placeholder="Insira sua senha"
                        name="password"
                        id="password"
                        type="password"
                        title="A senha deve ter pelo menos 8 caracteres, incluindo letras, números e um caractere especial (@, $, !, %, *, ?, &)"
                        pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
                        required />
                </label>
                <button
                    disabled={isPending}
                    type="submit"
                    className="p-1 bg-foreground font-extrabold border-2 border-background rounded text-background flex gap-2 items-center justify-center text-sm">
                    Entrar
                    <SendHorizonal />
                </button>
            </form >
            {
                state &&
                <div className='bg-red-600 p-1 rounded-3xl'>
                    <p className="text-xs text-center font-extrabold">{state.message}</p>
                </div>

            }
        </>
    )
}


export default CredentialsLoginForm;