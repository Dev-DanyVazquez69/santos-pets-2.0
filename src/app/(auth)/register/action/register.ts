/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";
import { prisma } from '@/lib/prisma';
import { hashSync } from 'bcryptjs';
import { redirect } from 'next/navigation';

const register = async (_prevState: any, formData: FormData) => {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    try {
        if (!name || !email || !password) {
            return {
                message: 'Todos os campos devem estar preenchidos',
                status: false
            }
        }
        // Verificar se o usuário já existe
        const emailExists = await prisma.user.findFirst({
            where: {
                email
            }
        });

        if (emailExists) {
            return {
                message: 'O e-mail já está em uso',
                status: false
            };
        }

        // Criar o usuário
        await prisma.user.create({
            data: {
                name,
                email,
                password: hashSync(password, 10)
            }
        })

    } catch (error) {
        console.error(error);
        return {
            message: `Ocorreu um erro ao criar o usuário`,
            status: false
        }

    }
    redirect("/")

};

export default register;