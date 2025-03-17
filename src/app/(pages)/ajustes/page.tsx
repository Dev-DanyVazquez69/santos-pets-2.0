"use client";

import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { LogOut, Bell, User, Moon, Settings, Pencil } from "lucide-react";
import { ModeToggle } from "@/components/ui/mode-toggle";
import ModalDialog from "@/components/modal-dialog";

const Ajustes = () => {

    const [notifications, setNotifications] = useState(true);

    const handleLogout = () => {
        
    };

    return (
        <div className="p-4 max-w-md mx-auto flex flex-col gap-6">
            <div className="flex flex-col gap-4 items-center justify-center">
                <h1 className="text-2xl font-bold">Ajustes</h1>
                <Settings />
            </div>

            <Card>
                <CardContent className="p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Moon className="text-indigo-500" />
                        <span>Tema</span>
                    </div>
                    <ModeToggle />
                </CardContent>
            </Card>

            <Card>
                <CardContent className="p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Bell className="text-yellow-500" />
                        <span>Notificações</span>
                    </div>
                    <Switch checked={notifications} onCheckedChange={setNotifications} />
                </CardContent>
            </Card>

            <Card>
                <CardContent className="p-4 flex items-center justify-between gap-2">
                    <div className="flex items-center gap-3">
                        <User className="text-green-500" />
                        <span>Editar Perfil</span>
                    </div>
                    <ModalDialog
                        title="Usuário"
                        description="Editar usuário"
                        textButtomConfirm="Salvar"
                        inputs={
                            [
                                {
                                    name: "name",
                                    label: "Nome",
                                    placeholder: "Insira seu nome",
                                },
                                {
                                    name: "email",
                                    label: "Email",
                                    placeholder: "Insira seu email",
                                    type: "email"
                                }
                            ]
                        }>
                        <Pencil />
                    </ModalDialog>
                </CardContent>
            </Card>

            <Button onClick={handleLogout} className="bg-foreground">
                <LogOut className="mr-2" /> Sair da Conta
            </Button>
        </div>
    );
}

export default Ajustes;