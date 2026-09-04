import { redirect } from "next/navigation";

export default function Home() {
  // Redirect to the default guest view
  redirect("/invite/guest");
}
