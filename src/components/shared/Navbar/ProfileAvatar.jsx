"use client"; // Required for interactivity (onClick, useState, useRouter)

import { authClient } from "@/lib/auth-client";
import {
  ArrowRightFromSquare,
  File,
  Gear,
  PersonPlus,
  PersonsLock,
} from "@gravity-ui/icons";
import { Avatar, Dropdown, Label } from "@heroui/react";
import { useRouter } from "next/navigation"; // Changed from redirect
import React, { useState } from "react";

const ProfileAvatar = ({ user }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const handleNavigation = (path) => {
    setIsOpen(false);
    router.push(path);
  };

  const handleLogout = async () => {
    setIsOpen(false);
    await authClient.signOut();
    router.push("/");
  };

  return (
    <Dropdown open={isOpen} onOpenChange={setIsOpen}>
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
            onClick={() => handleNavigation("/add-tutor")}
          >
            <div className="flex w-full items-center justify-between gap-2">
              <Label>Add Tutor</Label>
              <PersonPlus className="size-3.5 text-muted" />
            </div>
          </Dropdown.Item>
          
          <Dropdown.Item
            id="profile"
            textValue="My Tutors"
            onClick={() => handleNavigation("/my-tutors")}
          >
            <div className="flex w-full items-center justify-between gap-2">
              <Label>My Tutors</Label>
              <PersonsLock className="size-3.5 text-muted" />
            </div>
          </Dropdown.Item>
          
          <Dropdown.Item
            id="sessions"
            textValue="My Sessions"
            onClick={() => handleNavigation("/my-booked-sessions")}
          >
            <div className="flex w-full items-center justify-between gap-2">
              <Label>My Sessions</Label>
              <File className="size-3.5 text-muted" />
            </div>
          </Dropdown.Item>
          
          <Dropdown.Item 
            id="settings" 
            textValue="Settings" 
            onClick={() => handleNavigation("/my-profile")}
          >
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