import { contact } from "@/lib/site";

export interface EmailDraft {
  name: string;
  email: string;
  message: string;
}

/** Builds a Gmail compose URL and a mailto: fallback with the form contents pre-filled. */
export const buildEmail = ({ name, email, message }: EmailDraft) => {
  const subject = `New project inquiry from ${name}`;
  const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
  const q = (v: string) => encodeURIComponent(v);
  return {
    gmail: `https://mail.google.com/mail/?view=cm&to=${contact.email}&su=${q(subject)}&body=${q(body)}`,
    mailto: `mailto:${contact.email}?subject=${q(subject)}&body=${q(body)}`,
  };
};
