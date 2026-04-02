import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Phone, ArrowRight } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = encodeURIComponent("New project inquiry");
    const body = encodeURIComponent(
      `Name: ${form.name}
Email: ${form.email}

Message:
${form.message}`
    );
    window.location.href = `mailto:tiwaribhaveshkumar@gmail.com?subject=${subject}&body=${body}`;
    setStatus("Opening your email client...");
  };

  return (
    <section id="contact" className="py-28 px-6 relative" style={{ borderTop: "1px solid hsl(var(--border))" }}>
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[620px] h-[340px] rounded-full opacity-20"
          style={{ background: "radial-gradient(ellipse, rgba(6,182,212,0.14) 0%, transparent 70%)" }} />
      </div>
      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label mb-5 block">Contact</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4 leading-tight">
            Let’s build something impactful.
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-12 max-w-2xl">
            Ready for AI automation, premium React experiences, or conversion-focused commerce systems? Send a quick note and I’ll reply within one business day.
          </p>

          <div className="grid gap-10 lg:grid-cols-[1fr,1.1fr]">
            <div className="space-y-8">
              <div className="glass rounded-3xl p-8">
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">Contact details</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  Prefer email or LinkedIn? I’m available for freelance, contract, and full-time opportunities.
                </p>
                <div className="space-y-4">
                  {[
                    { icon: Mail, label: "tiwaribhaveshkumar@gmail.com", href: "mailto:tiwaribhaveshkumar@gmail.com" },
                    { icon: Phone, label: "+91 8088388193", href: "tel:+918088388193" },
                    { icon: Linkedin, label: "linkedin.com/in/bhavesh-kumar-tiwari", href: "https://www.linkedin.com/in/bhavesh-kumar-tiwari-5043862b4/" },
                    { icon: Github, label: "github.com/ZiG-AI-0909", href: "https://github.com/ZiG-AI-0909" },
                  ].map(item => (
                    <a key={item.label} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="group flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <div className="glass rounded-xl p-3 transition group-hover:border-cyan-400/40">
                        <item.icon size={16} />
                      </div>
                      <span className="break-all">{item.label}</span>
                    </a>
                  ))}
                  <a href="/Resume.pdf" download className="btn-primary inline-flex items-center justify-center rounded-full px-4 py-2 text-sm">
                    Resume
                  </a>
                </div>
              </div>

              <div className="glass rounded-3xl p-8">
                <h3 className="font-display text-lg font-semibold text-foreground mb-3">Socials</h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    { label: "LinkedIn", href: "https://www.linkedin.com/in/bhavesh-kumar-tiwari-5043862b4/" },
                    { label: "GitHub", href: "https://github.com/ZiG-AI-0909" },
                  ].map(link => (
                    <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer"
                      className="btn-outline inline-flex items-center justify-center rounded-full px-4 py-2 text-sm"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <motion.form
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="glass rounded-3xl p-8"
              onSubmit={handleSubmit}
            >
              <div className="grid gap-6">
                <label className="space-y-2 text-sm text-muted-foreground">
                  <span className="text-foreground font-medium">Name</span>
                  <input
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                    className="w-full rounded-2xl border border-white/10 bg-[#07101f] px-4 py-3 text-sm text-foreground focus:border-cyan-400 focus:outline-none"
                  />
                </label>

                <label className="space-y-2 text-sm text-muted-foreground">
                  <span className="text-foreground font-medium">Email</span>
                  <input
                    type="email"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    placeholder="you@domain.com"
                    className="w-full rounded-2xl border border-white/10 bg-[#07101f] px-4 py-3 text-sm text-foreground focus:border-cyan-400 focus:outline-none"
                  />
                </label>

                <label className="space-y-2 text-sm text-muted-foreground">
                  <span className="text-foreground font-medium">Message</span>
                  <textarea
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    rows={5}
                    placeholder="Tell me about your project or role"
                    className="w-full rounded-2xl border border-white/10 bg-[#07101f] px-4 py-3 text-sm text-foreground focus:border-cyan-400 focus:outline-none"
                  />
                </label>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  className="btn-primary inline-flex items-center justify-center gap-2 w-full sm:w-auto"
                >
                  Send Message
                  <ArrowRight size={16} />
                </button>
                {status && <p className="text-xs text-muted-foreground">{status}</p>}
              </div>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
