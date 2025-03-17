"use client"

import { Card, CardContent } from "@/components/ui/card";
import { Vaccine } from "@/interfaces/vaccines";
import { CheckCircle, Download, Trash, XCircle } from "lucide-react";
import React from "react";
import ModalDialog from "../modal-dialog";


interface PropsListVaccine {
  vaccines: Vaccine[];
}

const ListVaccine: React.FC<PropsListVaccine> = (props) => {

  return (
    <>
      {props.vaccines.map((vaccine) => (
        <Card key={vaccine.id} className="mb-4">
          <CardContent className="p-4 flex justify-between items-center">
            <div>
              <p className="text-lg font-semibold">{vaccine.name}</p>
              <p className="text-sm text-gray-600">Data: {vaccine.date}</p>
            </div>
            <div className="flex gap-2 items-center justify-center">
              <ModalDialog
                title="Download de Vacina"
                description="Download de registro de Vacina"
              >
                <Download />
              </ModalDialog>
              <ModalDialog
                title="Excluir de Vacina"
                description="Excluir de registro de Vacina"
              >
                <Trash />
              </ModalDialog>
              {vaccine.status === "aplicada" ? (
                <CheckCircle className="w-6 h-6 text-green-500" />
              ) : (
                <XCircle className="w-6 h-6 text-red-500" />
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </>
  )
};


export default ListVaccine;
