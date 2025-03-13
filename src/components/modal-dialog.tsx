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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface ModalDialog {
    children: React.ReactNode,
    title: string,
    description: string,
    textButtomConfirm?: string,
    inputs?: {
        name: string,
        label: string,
        type?: React.HTMLInputTypeAttribute | "select" | undefined,
        value?: string,
        placeholder: string,
        options?: string[]
    }[]
}

const ModalDialog: React.FC<ModalDialog> = ({ children, title, description, inputs, textButtomConfirm }) => {

    const selectInput = () => {
        return (
            inputs?.map((item, index) => (
                <div key={index} className="flex flex-col gap-3">
                    <Label
                        htmlFor={item.name}
                        className="text-left font-semibold">
                        {item.label}
                    </Label>
                    {item.type === "select" && item.options ? (
                        <Select>
                            <SelectTrigger id={item.name}>
                                <SelectValue placeholder={item.placeholder} />
                            </SelectTrigger>
                            <SelectContent>
                                {item.options.map((option, idx) => (
                                    <SelectItem key={idx} value={option}>{option}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    ) : (
                        <Input
                            type={item.type ?? "text"}
                            id={item.name}
                            name={item.name}
                            placeholder={item.placeholder}
                            value={item.value ?? ""} />
                    )}
                </div>
            ))
        )
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">{children}</Button>
            </DialogTrigger>
            <DialogContent className="overflow-y-auto max-h-[85vh] max-w-[90vw]">
                <DialogHeader>
                    <DialogTitle className="uppercase">{title}</DialogTitle>
                    <DialogDescription>
                        {description}
                    </DialogDescription>
                </DialogHeader>
                <div className="flex flex-col gap-4">
                    {
                        selectInput()
                    }
                </div>
                <DialogFooter>
                    <Button className="bg-foreground text-background" type="submit">{textButtomConfirm ?? "Confirmar"}</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
};

export default ModalDialog;
