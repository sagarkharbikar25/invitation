import MainFlow from "@/components/MainFlow";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hack With India | Digital Invitation",
  description: "Generate and download your personalized digital invitation for Hack With India.",
};

export default function Home() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      <MainFlow />
    </div>
  );
}
