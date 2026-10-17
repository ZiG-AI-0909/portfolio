import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowUpRight, Download, Github, Linkedin, Mail, Phone } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { contact, external } from "@/lib/site";
import { cn } from "@/lib/utils";
import { buildEmail } from "@/lib/email";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name."),
  email: z.string().trim().email("Please enter a valid email address."),
  message: z.string().trim().min(10, "Please write a few words about your project or role (10+ characters)."),
});

type FormValues = z.infer<typeof schema>;

const details = [
  { icon: Mail, label: contact.email, href: `mailto:${contact.email}` },
  { icon: Phone, label: contact.phone, href: contact.phoneHref },
  { icon: Linkedin, label: contact.linkedinLabel, href: contact.linkedin },
  { icon: Github, label: contact.githubLabel, href: contact.github },
];

const inputClass =
  "w-full rounded-xl border border-input bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 transition-colors focus:border-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-ring/40";

const FieldError = ({ id, message }: { id: string; message?: string }) =>
  message ? (
    <p id={id} className="text-xs text-destructive">
      {message}
    </p>
  ) : null;

const ContactSection = () => {
  const [status, setStatus] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = (values: FormValues) => {
    const { gmail, mailto } = buildEmail(values);
    const win = window.open(gmail, "_blank");
    if (win) {
      win.opener = null;
      setStatus("Opening Gmail in a new tab with your message filled in — review it and press Send there.");
    } else {
      setStatus("The Gmail tab was blocked, so your email app is opening instead — press Send there.");
      window.location.href = mailto;
    }
  };

  const field = (name: keyof FormValues) => ({
    ...register(name),
    id: `contact-${name}`,
    "aria-invalid": !!errors[name],
    "aria-describedby": errors[name] ? `contact-${name}-error` : undefined,
  });

  return (
    <section id="contact" aria-labelledby="contact-title" className="section border-t border-white/[0.05]">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-96 bg-[radial-gradient(ellipse_at_bottom,hsl(var(--primary)/0.1),transparent_65%)]" />
      <div className="container-content relative">
        <SectionHeading
          id="contact-title"
          label="Contact"
          title="Let's build something impactful."
          lead="Ready for AI automation, premium React experiences, or conversion-focused commerce systems? Send a quick note and I'll reply within one business day."
        />

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="surface flex flex-col p-6 sm:p-8">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-success/30 bg-success/[0.08] px-3 py-1.5 text-sm text-foreground">
              <span className="h-2 w-2 rounded-full bg-success" aria-hidden />
              {contact.availability}
            </span>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              Prefer email or LinkedIn? I'm available for freelance, contract, and full-time opportunities.
            </p>
            <ul className="mt-6 space-y-3">
              {details.map(d => (
                <li key={d.label}>
                  <a
                    href={d.href}
                    {...(d.href.startsWith("http") ? external : {})}
                    className="group flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] transition-colors group-hover:border-primary/40 group-hover:text-primary">
                      <d.icon size={16} aria-hidden />
                    </span>
                    <span className="min-w-0 break-all">{d.label}</span>
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-8">
              <a href={contact.resume} download className="btn-outline w-full sm:w-auto">
                <Download size={16} aria-hidden /> Download Resume
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <form noValidate onSubmit={handleSubmit(onSubmit)} className="surface p-6 sm:p-8" aria-describedby="contact-form-note">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="contact-name" className="text-sm font-medium text-foreground">
                    Name
                  </label>
                  <input {...field("name")} autoComplete="name" placeholder="Your name" className={cn(inputClass, errors.name && "border-destructive")} />
                  <FieldError id="contact-name-error" message={errors.name?.message} />
                </div>
                <div className="space-y-2">
                  <label htmlFor="contact-email" className="text-sm font-medium text-foreground">
                    Email
                  </label>
                  <input
                    {...field("email")}
                    type="email"
                    autoComplete="email"
                    placeholder="you@domain.com"
                    className={cn(inputClass, errors.email && "border-destructive")}
                  />
                  <FieldError id="contact-email-error" message={errors.email?.message} />
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <label htmlFor="contact-message" className="text-sm font-medium text-foreground">
                    Message
                  </label>
                  <textarea
                    {...field("message")}
                    rows={5}
                    placeholder="Tell me about your project or role"
                    className={cn(inputClass, "resize-y", errors.message && "border-destructive")}
                  />
                  <FieldError id="contact-message-error" message={errors.message?.message} />
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
                <button type="submit" className="btn-primary w-full shrink-0 whitespace-nowrap sm:w-auto">
                  Compose email in Gmail <ArrowUpRight size={16} aria-hidden />
                </button>
                <p id="contact-form-note" className="text-xs leading-relaxed text-muted-foreground">
                  This doesn't send anything by itself — it opens a pre-filled email for you to send.
                </p>
              </div>
              <p role="status" aria-live="polite" className="mt-4 min-h-[1.25rem] text-sm text-primary">
                {status}
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
