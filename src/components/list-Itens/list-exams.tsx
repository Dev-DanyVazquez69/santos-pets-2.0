"use client"

import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Download, Trash, XCircle } from "lucide-react";
import React from "react";
import ModalDialog from "../modal-dialog";
import { Exams } from "@/interfaces/exams";


interface PropsListExams {
  exams: Exams[];
}

const ListExams: React.FC<PropsListExams> = (props) => {

  return (
    <>
      {props.exams.map((exams) => (
        <Card key={exams.id} className="mb-4">
          <CardContent className="p-4 flex justify-between items-center">
            <div>
              <p className="text-lg font-semibold">{exams.name}</p>
              <p className="text-sm text-gray-600">Data: {exams.date}</p>
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
              {exams.status === "aplicada" ? (
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


export default ListExams;
