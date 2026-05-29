import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import React from "react";
import { Button, Avatar } from "@heroui/react";
import { User, Mail } from "lucide-react";
import Image from "next/image";
import { UpdateProfileModal } from "@/components/ui/UpdateProfileModal";

const MyProfilePage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user;
  const { name, email, image } = user || {};

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-slate-900 mb-8">My Profile</h1>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8">
            <div className="shrink-0">
              <Image
                src={image}
                alt={name || "User"}
                width={160}
                height={160}
                className="w-40 h-40 rounded-full object-cover border-4 border-slate-200 shadow-sm"
              />
            </div>

            <div className="grow flex flex-col items-center sm:items-start text-center sm:text-left w-full">
              <div className="space-y-4 w-full">
                <div>
                  <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    Full Name
                  </label>
                  <div className="flex items-center justify-center sm:justify-start gap-2 text-xl font-bold text-slate-900 mt-1">
                    <User className="w-5 h-5 text-teal-600" />
                    {name}
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    Email Address
                  </label>
                  <div className="flex items-center justify-center sm:justify-start gap-2 text-slate-600 mt-1">
                    <Mail className="w-5 h-5 text-teal-600" />
                    {email}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 w-full flex justify-center sm:justify-start">
                <UpdateProfileModal name={name} image={image} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfilePage;
