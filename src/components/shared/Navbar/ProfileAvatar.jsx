import { authClient } from "@/lib/auth-client";
import {
  ArrowRightFromSquare,
  File,
  Gear,
  Person,
  PersonPlus,
  Persons,
  PersonsLock,
} from "@gravity-ui/icons";
import { Avatar, Dropdown, Label } from "@heroui/react";
import { redirect } from "next/navigation";
import React from "react";

const ProfileAvatar = ({ user }) => {
  const handleLogout = async () => {
    await authClient.signOut();
    redirect("/");
  };

  return (
    <Dropdown>
      <Dropdown.Trigger className="rounded-full">
        <Avatar>
          <Avatar.Image
            alt={user?.name}
            src={user?.image}
            className="object-cover w-full h-full rounded-full"
          />
          <Avatar.Fallback delayMs={600}>
            {user?.name?.charAt(0)}
          </Avatar.Fallback>
        </Avatar>
      </Dropdown.Trigger>
      <Dropdown.Popover>
        <div className="px-3 pt-3 pb-1">
          <div className="flex items-center gap-2">
            <Avatar size="sm">
              <Avatar.Image
                alt={user?.name}
                src={user?.image}
                className="object-cover w-full h-full rounded-full"
              />
              <Avatar.Fallback delayMs={600}>
                {user?.name?.charAt(0)}
              </Avatar.Fallback>
            </Avatar>
            <div className="flex flex-col gap-0">
              <p className="text-sm leading-5 font-medium">{user?.name}</p>
              <p className="text-xs leading-none text-muted">{user?.email}</p>
            </div>
          </div>
        </div>
        <Dropdown.Menu>
          <Dropdown.Item
            id="add-tutor"
            textValue="Add Tutor"
            onClick={() => redirect("/add-tutor")}
          >
            <div className="flex w-full items-center justify-between gap-2">
              <Label>Add Tutor</Label>
              <PersonPlus className="size-3.5 text-muted" />
            </div>
          </Dropdown.Item>
          <Dropdown.Item
            id="profile"
            textValue="My Tutors"
            onClick={() => redirect("/my-tutors")}
          >
            <div className="flex w-full items-center justify-between gap-2">
              <Label>My Tutors</Label>
              <PersonsLock className="size-3.5 text-muted" />
            </div>
          </Dropdown.Item>
          <Dropdown.Item
            id="sessions"
            textValue="My Sessions"
            onClick={() => redirect("/my-booked-sessions")}
          >
            <div className="flex w-full items-center justify-between gap-2">
              <Label>My Sessions</Label>
              <File className="size-3.5 text-muted" />
            </div>
          </Dropdown.Item>
          <Dropdown.Item id="settings" textValue="Settings" onClick={() => redirect("/my-profile")}>
            <div className="flex w-full items-center justify-between gap-2">
              <Label>Settings</Label>
              <Gear className="size-3.5 text-muted" />
            </div>
          </Dropdown.Item>
          <Dropdown.Item
            id="logout"
            textValue="Logout"
            variant="danger"
            onClick={handleLogout}
          >
            <div className="flex w-full items-center justify-between gap-2">
              <Label>Log Out</Label>
              <ArrowRightFromSquare className="size-3.5 text-danger" />
            </div>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown.Popover>
    </Dropdown>
  );
};

export default ProfileAvatar;
