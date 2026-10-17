import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { ArrowRight, CalendarClock, CheckCheck, FileSpreadsheet, FileText, ShieldCheck, Sparkles } from "lucide-react";

const TOTAL = 350;
const STATIC_SENT = 214;

const rfqRows = [
  { item: "PVC pipe 110 mm", qty: "40 nos" },
  { item: "HDPE pipe 90 mm", qty: "120 m" },
  { item: "Bend 90° 110 mm", qty: "12 nos" },
];

const Card = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`rounded-xl border border-white/[0.07] bg-graphite-2/90 p-4 ${className}`}>{children}</div>
);

const CardLabel = ({ children }: { children: React.ReactNode }) => (
  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{children}</p>
);

const useCampaignProgress = (active: boolean) => {
  const [sent, setSent] = useState(STATIC_SENT);

  useEffect(() => {
    if (!active) {
      setSent(STATIC_SENT);
      return;
    }
    let value = 0;
    setSent(0);
    const id = setInterval(() => {
      value = value >= TOTAL ? 0 : Math.min(TOTAL, value + 3 + Math.floor(Math.random() * 5));
      setSent(value);
    }, 110);
    return () => clearInterval(id);
  }, [active]);

  return sent;
};

const SudarshanMockup = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-80px" });
  const reduced = useReducedMotion();
  const sent = useCampaignProgress(inView && !reduced);

  return (
    <div
      ref={ref}
      role="img"
      aria-label="Illustrative dashboard: a WhatsApp campaign sending from an Excel contact list, an AI reply to a customer drawn from the knowledge base, and a BOQ document converted into an RFQ list."
      className="overflow-hidden rounded-2xl border border-white/[0.08] bg-graphite-1 shadow-2xl shadow-black/40"
    >
      <div className="flex items-center justify-between gap-3 border-b border-white/[0.06] px-4 py-2.5">
        <div className="flex min-w-0 items-center gap-2">
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-sud font-display text-[11px] font-bold text-graphite-1">
            S
          </span>
          <span className="truncate text-[13px] font-semibold text-foreground">Sudarshan AI</span>
        </div>
        <span className="flex shrink-0 items-center gap-1 rounded-full border border-white/[0.08] px-2 py-0.5 font-mono text-[10px] text-muted-foreground">
          <ShieldCheck size={11} className="text-sud" /> your workspace
        </span>
      </div>

      <div className="bg-grid grid gap-3 p-3 sm:grid-cols-2 sm:p-4">
        <div className="flex flex-col gap-3">
          <Card>
            <div className="flex items-center justify-between">
              <CardLabel>Campaign</CardLabel>
              <span className="flex items-center gap-1.5 text-[11px] text-sud">
                <span className="h-1.5 w-1.5 animate-blink rounded-full bg-sud" /> Sending
              </span>
            </div>
            <p className="mt-2 text-sm font-semibold text-foreground">Dealer update</p>
            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
              <motion.div
                className="h-full origin-left rounded-full bg-sud"
                animate={{ scaleX: sent / TOTAL }}
                transition={{ duration: 0.12, ease: "linear" }}
              />
            </div>
            <p className="mt-2 font-mono text-[11px] tabular-nums text-muted-foreground">
              <span className="text-foreground">{sent}</span> / {TOTAL} sent
            </p>
            <div className="mt-3 space-y-1.5 border-t border-white/[0.06] pt-3 text-[11px] text-muted-foreground">
              <p className="flex items-center gap-1.5">
                <FileSpreadsheet size={12} className="text-sud" /> contacts.xlsx
              </p>
              <p className="flex items-center gap-1.5">
                <CalendarClock size={12} className="text-sud" /> Repeats weekly
              </p>
            </div>
          </Card>

          <Card>
            <CardLabel>Document intelligence</CardLabel>
            <div className="mt-2 flex items-center gap-2 text-[12px]">
              <span className="flex min-w-0 items-center gap-1 rounded-md border border-white/[0.08] bg-white/[0.03] px-2 py-1 text-foreground">
                <FileText size={12} className="shrink-0 text-sud" />
                <span className="truncate">BOQ.pdf</span>
              </span>
              <ArrowRight size={13} className="shrink-0 text-muted-foreground" />
              <span className="rounded-md bg-sud/15 px-2 py-1 font-medium text-sud">RFQ list</span>
            </div>
            <ul className="mt-3 divide-y divide-white/[0.05] text-[12px]">
              {rfqRows.map((r, i) => (
                <motion.li
                  key={r.item}
                  initial={{ opacity: 0, x: -6 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.15 }}
                  className="flex justify-between gap-3 py-1.5"
                >
                  <span className="truncate text-foreground/85">{r.item}</span>
                  <span className="shrink-0 font-mono text-muted-foreground">{r.qty}</span>
                </motion.li>
              ))}
            </ul>
          </Card>
        </div>

        <Card className="flex flex-col">
          <CardLabel>WhatsApp · customer</CardLabel>
          <div className="mt-3 flex flex-1 flex-col justify-end gap-2.5">
            <div className="max-w-[88%] self-start rounded-xl rounded-tl-sm bg-graphite-3 px-3 py-2 text-[12.5px] leading-relaxed text-foreground/90">
              Hi, can you share the UGD pipe catalogue?
            </div>
            <div className="max-w-[92%] self-end rounded-xl rounded-tr-sm border border-success/20 bg-success/[0.12] px-3 py-2 text-[12.5px] leading-relaxed text-foreground">
              Sure — here's our UGD pipe catalogue. Which diameters do you need? I'll pass the details to our sales team.
              <span className="mt-2 flex items-center gap-1.5 rounded-md bg-black/25 px-2 py-1 text-[11px] text-foreground/80">
                <FileText size={12} /> UGD_catalogue.pdf
              </span>
              <span className="mt-1.5 flex items-center justify-end gap-1 text-[10px] text-muted-foreground">
                <Sparkles size={10} className="text-sud" /> AI reply · Knowledge Base
                <CheckCheck size={12} className="text-primary" />
              </span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SudarshanMockup;
