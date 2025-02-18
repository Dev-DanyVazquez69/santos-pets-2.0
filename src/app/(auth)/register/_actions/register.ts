/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";
import { prisma } from '@/lib/db';
import { hashSync } from 'bcrypt-ts';
import { redirect } from 'next/navigation';

const register = async (_prevState: any, formData: FormData) => {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    let message = "";

    try {
        if (!name || !email || !password) {
            message = 'Todos os campos devem estar preenchidos';
        }
        // Verificar se o usuário já existe
        const emailExists = await prisma.user.findFirst({
            where: {
                email
            }
        });

        if (emailExists) {
            message = 'Email já cadastrado';
        }

        // Criar o usuário
        await prisma.user.create({
            data: {
                name,
                email,
                password: hashSync(password)
            }
        })

    } catch {
        message = 'Erro ao registrar'
        return ({
            message,
            status: false
        })
    }
    redirect("/")

};

export default register;
