"use client";

import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { getGuestByToken, Guest } from "@/data/guests";
import InvitationCover from "./InvitationCover";
import OfficialInvitation from "./OfficialInvitation";
import GuestSelection from "./GuestSelection";
import EphemeralMessage from "./EphemeralMessage";

type FlowState = "splash" | "message" | "selection" | "invitation";

export default function MainFlow() {
  const [flowState, setFlowState] = useState<FlowState>("splash");
  const [selectedGuest, setSelectedGuest] = useState<Guest | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const savedToken = Cookies.get("guest_token");
    if (savedToken) {
      const guest = getGuestByToken(savedToken);
      if (guest) {
        setSelectedGuest(guest);
        setFlowState("invitation");
      }
    }
  }, []);

  if (!isMounted) return null;

  const handleOpenDoor = () => {
    setFlowState("message");
  };

  const handleMessageDone = () => {
    setFlowState("selection");
  };

  const handleGuestSelect = (token: string) => {
    Cookies.set("guest_token", token, { expires: 365 }); // Save for a year
    const guest = getGuestByToken(token);
    setSelectedGuest(guest);
    setFlowState("invitation");
  };

  return (
    <main className="w-full h-full bg-[#0a0a0a] min-h-screen">
      {flowState === "splash" && <InvitationCover onOpen={handleOpenDoor} />}
      {flowState === "message" && <EphemeralMessage onComplete={handleMessageDone} />}
      {flowState === "selection" && <GuestSelection onSelect={handleGuestSelect} />}
      {flowState === "invitation" && selectedGuest && <OfficialInvitation guest={selectedGuest} />}
    </main>
  );
}
