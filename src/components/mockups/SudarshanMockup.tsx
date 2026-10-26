import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  CheckCheck,
  Clock,
  FileSpreadsheet,
  FileText,
  ShieldCheck,
  Sparkles,
  UserRound,
  Wrench,
} from "lucide-react";

const TOTAL = 350;
const STATIC_SENT = 214;

const boqRows = [
  { item: "HDPE pipe 90 mm PE100", qty: "120 m", tag: "Pipe" },
  { item: "PVC pipe 110 mm IS 4985", qty: "40 nos", tag: "Pipe" },
  { item: "Trench excavation", qty: "85 m³", tag: "Not pipe" },
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

// Fades items in one after another the first time the mockup scrolls into view
const appear = (delay: number) => ({
  initial: { opacity: 0, y: 6 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { delay },
});

const SudarshanMockup = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-80px" });
  const reduced = useReducedMotion();
  const sent = useCampaignProgress(inView && !reduced);
  const delivered = Math.floor(sent * 0.94);
  const read = Math.floor(sent * 0.71);

  return (
    <div
      ref={ref}
      role="img"
      aria-label="Illustrative dashboard: a WhatsApp campaign sending from an Excel contact list with delivered and read counts and business-hours safety limits, a BOQ document turned into a GST quotation with an OCR fix and pipe detection, and a WhatsApp inbox where the AI answers from the knowledge base and hands a customer to a human."
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
            <p className="mt-2 text-sm font-semibold text-foreground">Dealer update · {"{{name}}"}</p>
            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
              <motion.div
                className="h-full origin-left rounded-full bg-sud"
                animate={{ scaleX: sent / TOTAL }}
                transition={{ duration: 0.12, ease: "linear" }}
              />
            </div>
            <dl className="mt-2 grid grid-cols-3 gap-2 font-mono text-[11px] tabular-nums text-muted-foreground">
              {[
                ["Sent", sent],
                ["Delivered", delivered],
                ["Read", read],
              ].map(([label, value]) => (
                <div key={label}>
                  <dt className="text-[9px] uppercase tracking-wider">{label}</dt>
                  <dd className="text-foreground">{value}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-3 space-y-1.5 border-t border-white/[0.06] pt-3 text-[11px] text-muted-foreground">
              <p className="flex items-center gap-1.5">
                <FileSpreadsheet size={12} className="text-sud" /> contacts.xlsx · {TOTAL} recipients
              </p>
              <p className="flex items-center gap-1.5">
                <Clock size={12} className="text-sud" /> Business hours in recipient's time zone
              </p>
              <p className="flex items-center gap-1.5">
                <ShieldCheck size={12} className="text-sud" /> Random pacing · daily cap · auto-pause
              </p>
            </div>
          </Card>

          <Card>
            <CardLabel>BOQ → Quotation</CardLabel>
            <div className="mt-2 flex items-center gap-2 text-[12px]">
              <span className="flex min-w-0 items-center gap-1 rounded-md border border-white/[0.08] bg-white/[0.03] px-2 py-1 text-foreground">
                <FileText size={12} className="shrink-0 text-sud" />
                <span className="truncate">tender_BOQ.pdf</span>
              </span>
              <ArrowRight size={13} className="shrink-0 text-muted-foreground" />
              <span className="rounded-md bg-sud/15 px-2 py-1 font-medium text-sud">OCR + AI</span>
            </div>
            <ul className="mt-3 divide-y divide-white/[0.05] text-[12px]">
              {boqRows.map((r, i) => (
                <motion.li key={r.item} {...appear(0.3 + i * 0.15)} className="flex items-center justify-between gap-3 py-1.5">
                  <span className="truncate text-foreground/85">{r.item}</span>
                  <span className="flex shrink-0 items-center gap-2">
                    <span className="font-mono text-muted-foreground">{r.qty}</span>
                    <span
                      className={
                        r.tag === "Pipe"
                          ? "rounded bg-sud/15 px-1.5 py-px text-[10px] text-sud"
                          : "rounded bg-white/[0.06] px-1.5 py-px text-[10px] text-muted-foreground"
                      }
                    >
                      {r.tag}
                    </span>
                  </span>
                </motion.li>
              ))}
            </ul>
            <motion.p
              {...appear(0.85)}
              className="mt-2 flex items-center gap-1.5 rounded-md bg-white/[0.03] px-2 py-1 font-mono text-[10.5px] text-muted-foreground"
            >
              <Wrench size={11} className="shrink-0 text-sud" />
              <span className="line-through">45398 80</span> → <span className="text-foreground">45,398.80</span>
              <span className="ml-auto">OCR fix logged</span>
            </motion.p>
            <motion.div
              {...appear(1.05)}
              className="mt-3 flex items-center justify-between gap-2 border-t border-white/[0.06] pt-3 text-[11px]"
            >
              <span className="font-mono text-foreground">SP/2026-27/0001</span>
              <span className="text-muted-foreground">CGST + SGST · Excel · PDF</span>
            </motion.div>
          </Card>
        </div>

        <Card className="flex flex-col">
          <CardLabel>WhatsApp · AI inbox</CardLabel>
          <div className="mt-3 flex flex-1 flex-col justify-end gap-2.5">
            <div className="max-w-[88%] self-start rounded-xl rounded-tl-sm bg-graphite-3 px-3 py-2 text-[12.5px] leading-relaxed text-foreground/90">
              Hi, can you share the UGD pipe catalogue?
            </div>
            <div className="max-w-[92%] self-end rounded-xl rounded-tr-sm border border-success/20 bg-success/[0.12] px-3 py-2 text-[12.5px] leading-relaxed text-foreground">
              Sure! Here's our UGD pipe catalogue. Which diameters do you need?
              <span className="mt-2 flex items-center gap-1.5 rounded-md bg-black/25 px-2 py-1 text-[11px] text-foreground/80">
                <FileText size={12} /> UGD_catalogue.pdf
              </span>
              <span className="mt-1.5 flex items-center justify-end gap-1 text-[10px] text-muted-foreground">
                <Sparkles size={10} className="text-sud" /> AI reply · Knowledge Base
                <CheckCheck size={12} className="text-primary" />
              </span>
            </div>
            <motion.div
              {...appear(0.6)}
              className="max-w-[88%] self-start rounded-xl rounded-tl-sm bg-graphite-3 px-3 py-2 text-[12.5px] leading-relaxed text-foreground/90"
            >
              110 mm, 600 m. Can a manager call me?
            </motion.div>
            <motion.div
              {...appear(1)}
              className="flex items-center gap-1.5 self-center rounded-full border border-sud/25 bg-sud/10 px-2.5 py-1 text-[10.5px] text-sud"
            >
              <UserRound size={11} /> Handed to sales team · AI paused
            </motion.div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SudarshanMockup;
