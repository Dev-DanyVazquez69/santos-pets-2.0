"use client"

import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Download, Trash, XCircle } from "lucide-react";
import React from "react";
// import ModalDialog from "../modal-dialog";
import { Appointment } from "@/interfaces/appointment";


interface PropsListAppointment {
  appointment: Appointment[];
}

const ListAppointment: React.FC<PropsListAppointment> = ({ appointment }) => {

  return (
    <>
      {appointment.map((appt) => (
        <Card key={appt.id} className="mb-4">
          <CardContent className="p-4 flex flex-col gap-2">
            <div className="flex justify-between">
              <p className="font-semibold">{appt.petName}</p>
              <p className="text-sm text-gray-600">{appt.date}</p>
            </div>
            <p>Veterinário: {appt.professional}</p>
            <p>Local: {appt.location}</p>
            {appt.notes && <p className="text-sm italic">Obs: {appt.notes}</p>}

            <div className="flex justify-between items-center mt-2">
              <div className="flex gap-2">
                <button onClick={() => console.log("")}>
                  <Download className="text-blue-500" />
                </button>
                <button onClick={() => console.log("")}>
                  <Trash className="text-red-500" />
                </button>
              </div>
              {appt.status === "realizada" ? (
                <CheckCircle className="text-green-500" />
              ) : (
                <XCircle className="text-red-500" />
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </>
  )
};


export default ListAppointment;
