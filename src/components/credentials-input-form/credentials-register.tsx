"use client"

import { SendHorizonal } from "lucide-react"
import register from "@/app/(auth)/register/action/register"
import { useActionState } from "react"


const CredentialsRegisterForm: React.FC = () => {


    const [state, formAction, isPending] = useActionState(register, null)


    return (
        <>
        <form
            className="flex flex-col gap-5 items-center"
            action={formAction}
        >
            <label
                htmlFor="name"
                className="flex flex-col items-start justify-center">
                Nome
                <input
                    className="text-foreground p-2 bg-transparent focus:outline-none focus:ring-2 focus:ring-green-400 border-b-2 border-white"
                    placeholder="Insira seu nome"
                    name="name"
                    id="name"
                    type="text"
                    required />
            </label>
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
                Senha
                <input
                    className="text-foreground p-2 bg-transparent focus:outline-none focus:ring-2 focus:ring-green-400 border-b-2 border-white"
                    placeholder="Insira sua senha"
                    name="password"
                    id="password"
                    type="password"
                    pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
                    title="A senha deve ter pelo menos 8 caracteres, incluindo letras, números e um caractere especial (@, $, !, %, *, ?, &)"
                    required />
            </label>
            <button
                type="submit"
                disabled={isPending}
                className="p-1 bg-foreground font-extrabold border-2 border-background rounded text-background flex gap-2 items-center justify-center text-sm">
                Cadastrar
                <SendHorizonal />
            </button>
        </form>
        {
                state &&
                <div className='bg-red-600 p-1 rounded-3xl'>
                    <p className="text-xs text-center font-extrabold">{state.message}</p>
                </div>

            }
                    </>
    )
}

export default CredentialsRegisterForm;