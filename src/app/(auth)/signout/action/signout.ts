"use server"

import { signOut } from '@/app/auth'

const signout = async () => {

    try {
        await signOut({ redirectTo: "/signin" })
    } catch (error) {
        if (error instanceof Error) {
            throw error
        }
    }
}

export default signout;