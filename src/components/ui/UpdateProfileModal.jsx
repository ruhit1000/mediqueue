"use client";

import { authClient } from "@/lib/auth-client";
import { Pencil } from "@gravity-ui/icons";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";

export function UpdateProfileModal({ name, image }) {
  const router = useRouter();
  const handleProfileUpdate = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const userData = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.updateUser(userData);

    if (data) {
      toast.success("User updated successfully!");
      router.refresh();
    }
    if (error) {
      toast.error("Error updating user.");
    }
  };

  return (
    <Modal>
      <Button className="bg-teal-600 text-white font-medium px-8 py-2 rounded-xl hover:bg-teal-700 transition-colors shadow-sm">
        Update Profile
      </Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md bg-white rounded-2xl shadow-xl border border-slate-100">
            <Modal.CloseTrigger className="text-slate-400 hover:text-slate-600 transition-colors" />

            <Modal.Header>
              <Modal.Icon className="bg-teal-100 text-teal-600 rounded-full p-2 flex items-center justify-center mb-3">
                <Pencil className="size-5" />
              </Modal.Icon>
              <Modal.Heading className="text-xl font-bold text-slate-900">
                Edit Profile
              </Modal.Heading>
              <p className="mt-1.5 text-sm leading-5 text-slate-500">
                Update your personal information below.
              </p>
            </Modal.Header>

            <Modal.Body className="p-6 pt-2">
              <Surface variant="default" className="bg-transparent">
                <form
                  id="edit-profile-form"
                  className="flex flex-col gap-5"
                  onSubmit={handleProfileUpdate}
                >
                  <TextField
                    className="w-full"
                    name="name"
                    defaultValue={name || ""}
                  >
                    <Label className="text-sm font-medium text-slate-700">
                      Name
                    </Label>
                    <Input className="mt-1 bg-slate-50 border-slate-200 focus:border-teal-500 transition-colors rounded-lg" />
                  </TextField>

                  <TextField
                    className="w-full"
                    name="image"
                    defaultValue={image || ""}
                  >
                    <Label className="text-sm font-medium text-slate-700">
                      Profile Image URL
                    </Label>
                    <Input
                      type="url"
                      className="mt-1 bg-slate-50 border-slate-200 focus:border-teal-500 transition-colors rounded-lg"
                    />
                  </TextField>
                </form>
              </Surface>
            </Modal.Body>

            <Modal.Footer className="px-6 py-4 border-t border-slate-100 gap-3">
              <Button
                slot="close"
                variant="outline"
                className="text-slate-600 border-slate-200 hover:bg-slate-50 font-medium rounded-xl transition-colors"
              >
                Cancel
              </Button>
              <Button
                slot="close"
                type="submit"
                form="edit-profile-form"
                className="bg-teal-600 text-white hover:bg-teal-700 font-medium rounded-xl transition-colors shadow-sm"
              >
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>

      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={true}
      />
    </Modal>
  );
}
