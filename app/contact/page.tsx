import { redirect } from "next/navigation";

export const metadata = {
  title: "Contact | Maie Salameh"
};

export default function ContactPage() {
  redirect("https://maiecouture.com/contact");
}
