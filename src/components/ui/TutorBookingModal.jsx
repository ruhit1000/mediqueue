"use client";

import React, { useState } from "react";
import { Calendar } from "@gravity-ui/icons";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { Clock } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { toast, ToastContainer } from "react-toastify";
import { useRouter } from "next/navigation";

export function TutorBookingModal({
  tutorId,
  tutorName,
  tutorImage,
  studentEmail,
  userId,
  sessionDate,
}) {
  const router = useRouter();
  const handleConfirmBooking = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const bookingData = {
      studentName: formData.get("studentName"),
      phone: formData.get("phone"),
      tutorId: tutorId,
      tutorName: tutorName,
      tutorImage: tutorImage,
      studentEmail: studentEmail,
      status: "Booked",
      bookingDate: new Date().toISOString(),
      userId: userId,
      sessionDate: sessionDate,
    };

    const { data, error } = await authClient.token();
    const token = data?.token;
    if (error) {
      toast.error("Failed to retrieve auth token. Please try again.");
      return;
    }

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/bookings/${tutorId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(bookingData),
      },
    );
    const dataRes = await res.json();
    if (dataRes?.acknowledged) {
      toast.success("Booking submitted successfully!");
      e.target.reset();
    } else {
      toast.error("Failed to submit booking. Please try again.");
      return;
    }
    setTimeout(() => {
      router.push("/my-booked-sessions");
    }, 2000);
  };

  return (
    <Modal>
      <Button className="w-full bg-teal-600 text-white font-semibold py-7 rounded-xl hover:bg-teal-700 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 text-lg">
        <Clock className="w-5 h-5" />
        Book Now
      </Button>

      <Modal.Backdrop>
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={true}
        />
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />

            <Modal.Header>
              <Modal.Icon className="bg-teal-100 text-teal-600">
                <Calendar className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Confirm Your Booking</Modal.Heading>
              <p className="mt-1.5 text-sm leading-5 text-muted">
                Review your session details and provide your contact information
                to secure your slot.
              </p>
            </Modal.Header>

            <form onSubmit={handleConfirmBooking}>
              <Modal.Body className="p-6">
                <Surface variant="default">
                  <div className="flex flex-col gap-4">
                    <div className="grid grid-cols-2 gap-4">
                      <TextField
                        className="w-full"
                        variant="secondary"
                        isDisabled
                      >
                        <Label>Tutor ID</Label>
                        <Input value={tutorId} />
                      </TextField>
                      <TextField
                        className="w-full"
                        variant="secondary"
                        isDisabled
                      >
                        <Label>Tutor Name</Label>
                        <Input value={tutorName} />
                      </TextField>
                    </div>

                    <TextField
                      className="w-full"
                      variant="secondary"
                      isDisabled
                    >
                      <Label>Student Email</Label>
                      <Input value={studentEmail} />
                    </TextField>

                    <TextField
                      className="w-full"
                      name="studentName"
                      type="text"
                      variant="secondary"
                    >
                      <Label>Student Name *</Label>
                      <Input
                        required
                        name="studentName"
                        placeholder="Enter your full name"
                      />
                    </TextField>

                    <TextField
                      className="w-full"
                      name="phone"
                      type="tel"
                      variant="secondary"
                    >
                      <Label>Phone Number *</Label>
                      <Input required placeholder="Enter your phone number" />
                    </TextField>
                  </div>
                </Surface>
              </Modal.Body>

              <Modal.Footer>
                <Button type="button" slot="close" variant="secondary">
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="bg-teal-600 text-white hover:bg-teal-700"
                >
                  Confirm Booking
                </Button>
              </Modal.Footer>
            </form>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
