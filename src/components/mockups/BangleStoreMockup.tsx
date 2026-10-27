import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { BadgeCheck, FileSpreadsheet, Flame, Languages, Lock, QrCode, Upload } from "lucide-react";

const languages = ["English", "ಕನ್ನಡ", "हिन्दी", "தமிழ்", "తెలుగు", "മലയാളം", "मराठी", "ગુજરાતી", "বাংলা", "ਪੰਜਾਬੀ"];
const STATIC_LANGUAGE = 1;

const sizes = ["2.4", "2.6", "2.8"];
const colours = [
  { name: "Maroon", swatch: "#8b1e3f" },
  { name: "Gold", swatch: "#d4a537" },
  { name: "Emerald", swatch: "#1f8a5b" },
];
// Quantity in each size × colour cell, filled in one at a time; null cells stay empty
const quantities = [
  [2, null, 1],
  [null, 3, 2],
  [1, 2, null],
];
const filledCells = quantities.flat().filter(q => q !== null).length;
const PRICE = 120;

// Monthly orders for the admin chart: [B2C, B2B] as a share of the tallest bar
const months = [
  ["Jan", 0.35, 0.2],
  ["Feb", 0.45, 0.3],
  ["Mar", 0.4, 0.45],
  ["Apr", 0.6, 0.5],
  ["May", 0.7, 0.65],
  ["Jun", 0.85, 1],
] as const;

const Card = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`rounded-xl border border-white/[0.07] bg-graphite-2/90 p-4 ${className}`}>{children}</div>
);

const CardLabel = ({ children }: { children: React.ReactNode }) => (
  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{children}</p>
);

/** Counts 0..length-1 on a loop while active; rests on `resting` otherwise. */
const useTicker = (active: boolean, length: number, ms: number, resting: number) => {
  const [tick, setTick] = useState(resting);

  useEffect(() => {
    if (!active) {
      setTick(resting);
      return;
    }
    setTick(0);
    const id = setInterval(() => setTick(t => (t + 1) % length), ms);
    return () => clearInterval(id);
  }, [active, length, ms, resting]);

  return tick;
};

// Fades items in one after another the first time the mockup scrolls into view
const appear = (delay: number) => ({
  initial: { opacity: 0, y: 6 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { delay },
});

const BangleStoreMockup = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-80px" });
  const reduced = useReducedMotion();
  const animate = inView && !reduced;

  const language = useTicker(animate, languages.length, 1400, STATIC_LANGUAGE);
  // One extra step holds the full board for a beat before it clears and refills
  const filled = useTicker(animate, filledCells + 3, 550, filledCells);

  let order = 0;
  let pieces = 0;
  const board = quantities.map(row =>
    row.map(q => {
      if (q === null) return null;
      const shown = order++ < filled;
      if (shown) pieces += q;
      return shown ? q : 0;
    }),
  );

  return (
    <div
      ref={ref}
      role="img"
      aria-label="Illustrative storefront and admin view: a bangle product with a size by colour quantity board and live total, a last-few-left stock badge, a language switcher cycling through 10 Indian languages, a UPI QR payment with transaction ID and uploaded proof, and an admin sales chart comparing B2B and B2C orders with Excel export."
      className="overflow-hidden rounded-2xl border border-white/[0.08] bg-graphite-1 shadow-2xl shadow-black/40"
    >
      <div className="flex items-center justify-between gap-3 border-b border-white/[0.06] px-4 py-2.5">
        <div className="flex min-w-0 items-center gap-2">
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-kbs font-display text-[11px] font-bold text-graphite-1">
            K
          </span>
          <span className="truncate text-[13px] font-semibold text-foreground">Karnataka Bangle Store</span>
        </div>
        <span className="flex shrink-0 items-center gap-1 rounded-full border border-white/[0.08] px-2 py-0.5 text-[10px] text-muted-foreground">
          <Languages size={11} className="text-kbs" />
          <motion.span key={language} initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} className="min-w-[3.5rem] text-center text-foreground">
            {languages[language]}
          </motion.span>
        </span>
      </div>

      <div className="bg-grid grid gap-3 p-3 sm:grid-cols-2 sm:p-4">
        <div className="flex flex-col gap-3">
          <Card>
            <div className="flex items-center justify-between gap-2">
              <CardLabel>Size × colour</CardLabel>
              <span className="flex shrink-0 items-center gap-1 whitespace-nowrap rounded-full border border-kbs/30 bg-kbs/10 px-2 py-0.5 text-[10px] text-kbs">
                <Flame size={10} className="animate-blink" /> Last few left
              </span>
            </div>
            <p className="mt-2 truncate text-sm font-semibold text-foreground">Glass bangles · festive</p>
            <p className="font-mono text-[11px] text-muted-foreground">₹{PRICE} / piece</p>

            <table className="mt-3 w-full table-fixed border-separate border-spacing-1 text-center font-mono text-[11px]">
              <thead>
                <tr>
                  <th className="w-10 text-left text-[9px] font-normal uppercase tracking-wider text-muted-foreground">Size</th>
                  {colours.map(c => (
                    <th key={c.name} className="font-normal">
                      <span className="mx-auto block h-3 w-3 rounded-full ring-1 ring-white/20" style={{ background: c.swatch }} />
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {board.map((row, r) => (
                  <tr key={sizes[r]}>
                    <td className="text-left text-muted-foreground">{sizes[r]}</td>
                    {row.map((q, c) => (
                      <td
                        key={colours[c].name}
                        className={
                          q === null
                            ? "rounded-md bg-white/[0.02] py-1 text-muted-foreground/40"
                            : q > 0
                              ? "rounded-md bg-kbs/15 py-1 text-kbs transition-colors"
                              : "rounded-md bg-white/[0.05] py-1 text-muted-foreground transition-colors"
                        }
                      >
                        {q === null ? "–" : q}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="mt-2 flex items-center justify-between border-t border-white/[0.06] pt-3 text-[12px]">
              <span className="text-muted-foreground">
                <span className="font-mono tabular-nums text-foreground">{pieces}</span> pieces
              </span>
              <span className="font-mono font-semibold tabular-nums text-foreground">₹{(pieces * PRICE).toLocaleString("en-IN")}</span>
            </div>
          </Card>

          <Card>
            <CardLabel>UPI payment · #KBS-1042</CardLabel>
            <div className="mt-3 flex items-center gap-3">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-white text-graphite-1">
                <QrCode size={40} strokeWidth={1.5} />
              </span>
              <div className="min-w-0 space-y-1.5 text-[11px]">
                <p className="font-mono text-foreground">₹1,080</p>
                <p className="text-muted-foreground">Scan with any UPI app</p>
                <motion.p {...appear(0.4)} className="truncate rounded-md bg-white/[0.04] px-2 py-1 font-mono text-muted-foreground">
                  UTR 4127 •••• 8890
                </motion.p>
              </div>
            </div>
            <motion.p {...appear(0.8)} className="mt-3 flex items-center gap-1.5 text-[11px] text-muted-foreground">
              <Upload size={12} className="shrink-0 text-kbs" /> proof.jpg
              <span className="ml-auto flex items-center gap-1 whitespace-nowrap">
                <Lock size={10} /> signed URL
              </span>
            </motion.p>
            <motion.p
              {...appear(1.1)}
              className="mt-2 flex items-center gap-1.5 rounded-md border border-kbs/25 bg-kbs/10 px-2 py-1 text-[10.5px] text-kbs"
            >
              <BadgeCheck size={12} /> Submitted · awaiting admin verification
            </motion.p>
          </Card>
        </div>

        <Card className="flex flex-col">
          <div className="flex items-center justify-between">
            <CardLabel>Admin · Orders</CardLabel>
            <span className="flex shrink-0 items-center gap-1 whitespace-nowrap rounded-md border border-white/[0.08] px-1.5 py-0.5 text-[10px] text-muted-foreground">
              <FileSpreadsheet size={11} className="text-kbs" /> .xlsx
            </span>
          </div>
          <div className="mt-3 flex items-center gap-3 text-[10px] text-muted-foreground">
            <span className="flex items-center gap-1">
              <span className="h-2 w-2 rounded-sm bg-kbs" /> B2C
            </span>
            <span className="flex items-center gap-1">
              <span className="h-2 w-2 rounded-sm bg-kbs/40" /> B2B
            </span>
          </div>
          <div className="mt-3 flex h-28 items-end gap-2" aria-hidden>
            {months.map(([month, b2c, b2b], i) => (
              <div key={month} className="flex h-full flex-1 flex-col items-center justify-end gap-1">
                <div className="flex h-full w-full items-end justify-center gap-0.5">
                  {[b2c, b2b].map((share, j) => (
                    <motion.span
                      key={j}
                      className={`w-1/2 origin-bottom rounded-t-sm ${j === 0 ? "bg-kbs" : "bg-kbs/40"}`}
                      style={{ height: `${share * 100}%` }}
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    />
                  ))}
                </div>
                <span className="font-mono text-[9px] text-muted-foreground">{month}</span>
              </div>
            ))}
          </div>

          <ul className="mt-4 flex-1 divide-y divide-white/[0.05] border-t border-white/[0.06] text-[11.5px]">
            {[
              { id: "#KBS-1042", type: "B2C", status: "Verify proof", done: false },
              { id: "#KBS-1041", type: "B2B", status: "Paid", done: true },
              { id: "#KBS-1040", type: "B2B", status: "Shipped", done: true },
            ].map((o, i) => (
              <motion.li key={o.id} {...appear(0.5 + i * 0.15)} className="flex items-center justify-between gap-2 py-2">
                <span className="font-mono text-foreground/85">{o.id}</span>
                <span className="rounded bg-white/[0.06] px-1.5 py-px text-[10px] text-muted-foreground">{o.type}</span>
                <span className={`ml-auto text-[10.5px] ${o.done ? "text-success" : "text-kbs"}`}>{o.status}</span>
              </motion.li>
            ))}
          </ul>
          <motion.p {...appear(1)} className="mt-2 text-center font-mono text-[10px] text-muted-foreground">
            RLS on every table · admin checked with has_role()
          </motion.p>
        </Card>
      </div>
    </div>
  );
};

export default BangleStoreMockup;
