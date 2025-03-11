import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

interface ModalDialog {
    buttomText: string,
    title: string,
    description: string,
    inputs: {
        name: string,
        label: string,
        type?: React.HTMLInputTypeAttribute | undefined,
        value?: string,
        placeholder: string
    }[]
}

const ModalDialog: React.FC<ModalDialog> = ({ buttomText, title, description, inputs }) => {
    return (
        <Dialog>
            <DialogTrigger asChild className="bg-foreground text-background">
                <Button variant="outline">{buttomText}</Button>
            </DialogTrigger>
            <DialogContent className="overflow-y-auto max-h-[85vh]">
                <DialogHeader>
                    <DialogTitle className="uppercase">{title}</DialogTitle>
                    <DialogDescription>
                        {description}
                    </DialogDescription>
                </DialogHeader>
                <div className="flex flex-col gap-4">
                    {
                        inputs.map((item, index) => (
                            <div key={index} className="flex flex-col gap-3">
                                <Label
                                    htmlFor={item.name}
                                    className="text-left font-semibold">
                                    {item.label}
                                </Label>
                                <Input
                                    type={item.type ?? "text"}
                                    id={item.name}
                                    name={item.name}
                                    placeholder={item.placeholder}
                                    value={item.value ?? ""} />
                            </div>
                        ))
                    }
                </div>
                <DialogFooter>
                    <Button className="bg-foreground text-background" type="submit">Salvar</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
};

export default ModalDialog;