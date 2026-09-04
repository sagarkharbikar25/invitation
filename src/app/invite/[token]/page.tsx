import InviteView from "@/components/InviteView";
import { guests, defaultGuest } from "@/data/guests";
import type { Metadata } from "next";

// Next.js 15 requires params to be a Promise
interface Props {
  params: Promise<{ token: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const guest = guests[resolvedParams.token] ?? defaultGuest;
  
  return {
    title: `Hack With India — Invitation for ${guest.name}`,
    description: `You are cordially invited to Hack With India at JDCOEM on 7 September 2026.`,
    openGraph: {
      title: `Hack With India — Invitation`,
      description: `Join us at JDCOEM for Hack With India on 7 September 2026.`,
      images: ["/og-image.jpg"],
    },
  };
}

export default async function InvitePage({ params }: Props) {
  const resolvedParams = await params;
  const guest = guests[resolvedParams.token] ?? defaultGuest;
  
  return <InviteView guest={guest} />;
}
