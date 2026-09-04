"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import InvitationCover from "./InvitationCover";
import OfficialInvitation from "./OfficialInvitation";
import { Guest } from "@/data/guests";

interface InviteViewProps {
  guest: Guest;
}

export default function InviteView({ guest }: InviteViewProps) {
  const [opened, setOpened] = useState(false);

  return (
    <main className="w-full h-full bg-[#0a0a0a]">
      <AnimatePresence mode="wait">
        {!opened ? (
          <InvitationCover key="cover" onOpen={() => setOpened(true)} />
        ) : (
          <OfficialInvitation key="invitation" guest={guest} />
        )}
      </AnimatePresence>
    </main>
  );
}
