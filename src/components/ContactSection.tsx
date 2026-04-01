import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Phone, ArrowRight } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-28 px-6 relative" style={{ borderTop: "1px solid hsl(var(--border))" }}>
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px]"
          style={{ background: "radial-gradient(ellipse, rgba(99,102,241,0.12) 0%, transparent 70%)" }} />
      </div>
      <div className="relative max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6 }}>
          <span className="section-label mb-5 block">Contact</span>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4 leading-tight">
                Let's build something{" "}
                <span className="text-gradient">remarkable together</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8 max-w-md">
                Open to freelance projects, APM / TPM roles, and startup collaboration. Based in Bengaluru — available hybrid or remote.
              </p>

              <div className="flex flex-col gap-4">
                {[
                  { icon: Mail, label: "tiwaribhaveshkumar@gmail.com", href: "mailto:tiwaribhaveshkumar@gmail.com" },
                  { icon: Phone, label: "+91 8088388193", href: "tel:+918088388193" },
                  { icon: Linkedin, label: "linkedin.com/in/bhaveshkumar-tiwari", href: "https://www.linkedin.com/in/bhavesh-kumar-tiwari-5043862b4/" },
                  { icon: Github, label: "github.com/ZiG-AI-0909", href: "https://github.com/ZiG-AI-0909" },
                ].map(item => (
                  <a key={item.label} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors group">
                    <div className="w-8 h-8 glass rounded-lg flex items-center justify-center shrink-0 group-hover:border-indigo-500/40 transition-colors">
                      <item.icon size={14} />
                    </div>
                    <span className="group-hover:underline underline-offset-4">{item.label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* CTA card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.15 }}
              className="glass rounded-3xl p-8 glow-blue"
            >
              <h3 className="font-display text-xl font-bold text-foreground mb-3">Ready to work together?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Whether you need AI automation, a Shopify / Ecommerce store, or a lead generation system — I can scope and ship it fast.
              </p>
              <div className="flex flex-col gap-3">
                <a href="https://mail.google.com/mail/?view=cm&to=tiwaribhaveshkumar@gmail.com&su=Hiring%20Inquiry&body=Hi%20Bhavesh%2C%20I%20came%20across%20your%20portfolio%20and%20would%20love%20to%20discuss%20a%20potential%20opportunity." target="_blank" rel="noopener noreferrer" className="btn-primary justify-center">
                  Send Me an Email
                  <ArrowRight size={15} />
                </a>
                <a href="https://www.linkedin.com/in/bhavesh-kumar-tiwari-5043862b4/" target="_blank" rel="noopener noreferrer" className="btn-outline justify-center text-sm">
                  Connect on LinkedIn
                </a>
                <a href="/Bhavesh_Kumar_Tiwari_Resume.pdf" download className="btn-outline justify-center text-sm">
                  Download Resume
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
