"use client";

import { AlertDialog, Button } from "@heroui/react";
import { Trash2 } from "lucide-react";

export function CancelSessionAlert({ tutorName, onConfirm }) {
  return (
    <AlertDialog>
      <Button
        variant="flat"
        color="danger"
        className="w-full bg-red-50 text-red-600 hover:bg-red-100 font-semibold flex items-center justify-center gap-2"
      >
        <Trash2 className="w-4 h-4" />
        Cancel Session
      </Button>

      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-100">
            <AlertDialog.CloseTrigger />

            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Cancel Session?</AlertDialog.Heading>
            </AlertDialog.Header>

            <AlertDialog.Body>
              <p className="text-slate-600">
                Are you sure you want to cancel your booked session with{" "}
                <strong>{tutorName}</strong>? This action cannot be undone, and
                the slot will be opened up for other students.
              </p>
            </AlertDialog.Body>

            <AlertDialog.Footer>
              <Button slot="close" variant="secondary" className="font-medium">
                Keep Session
              </Button>
              <Button
                slot="close"
                variant="danger"
                onClick={onConfirm}
                className="bg-red-600 text-white hover:bg-red-700 font-semibold"
              >
                Yes, Cancel
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}
