"use client"

import { Card, CardContent } from "@/components/ui/card";
import { Vaccine } from "@/interfaces/vaccines";
import { CheckCircle, Download, XCircle } from "lucide-react";
import React from "react";


interface PropsItemVacinne {
  vaccines: Vaccine[];
}

const ItemVacine: React.FC<PropsItemVacinne> = (props) => {

  return (
    <>
      {props.vaccines.map((vaccine) => (
        <Card key={vaccine.id} className="mb-4">
          <CardContent className="p-4 flex justify-between items-center">
            <div>
              <p className="text-lg font-semibold">{vaccine.name}</p>
              <p className="text-sm text-gray-600">Data: {vaccine.date}</p>
            </div>
            <div className="flex gap-2">
              <button onClick={() => alert(`Download ${vaccine.name} (${vaccine.date})`)}>
              <Download/>
              </button>
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


export default ItemVacine;
