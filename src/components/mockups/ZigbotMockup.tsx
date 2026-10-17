import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";
import { Hash, Lock, Settings2, Volume2 } from "lucide-react";
import { cn } from "@/lib/utils";

// 0: idle · 1: member asks · 2: ZiGBoT typing · 3: ZiGBoT replies
const PHASE_DURATIONS = [700, 1300, 1800, 4200];

const Avatar = ({ label, className }: { label: string; className: string }) => (
  <span className={cn("flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-semibold", className)}>
    {label}
  </span>
);

const Message = ({
  name,
  avatar,
  bot,
  children,
}: {
  name: string;
  avatar: React.ReactNode;
  bot?: boolean;
  children: React.ReactNode;
}) => (
  <motion.div
    layout
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.35 }}
    className="flex gap-3"
  >
    {avatar}
    <div className="min-w-0">
      <p className="flex items-center gap-1.5 text-[13px] font-semibold text-foreground">
        {name}
        {bot && <span className="rounded bg-zig px-1 py-px text-[9px] font-bold uppercase text-zig-1">Bot</span>}
      </p>
      <div className="mt-0.5 text-[13px] leading-relaxed text-foreground/80">{children}</div>
    </div>
  </motion.div>
);

const channels = [
  { name: "general", icon: Hash },
  { name: "zig-chat", icon: Hash, active: true },
  { name: "mod-log", icon: Hash },
  { name: "music", icon: Volume2 },
];

const settings = [
  { label: "Persona", value: "Savage" },
  { label: "Gentle roles", value: "@mods" },
  { label: "Chat channel", value: "#zig-chat" },
];

const ZigbotMockup = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-80px" });
  const reduced = useReducedMotion();
  const [phase, setPhase] = useState(3);

  useEffect(() => {
    if (reduced || !inView) {
      setPhase(3);
      return;
    }
    setPhase(0);
    let current = 0;
    let timer: ReturnType<typeof setTimeout>;
    const tick = () => {
      timer = setTimeout(() => {
        current = (current + 1) % PHASE_DURATIONS.length;
        setPhase(current);
        tick();
      }, PHASE_DURATIONS[current]);
    };
    tick();
    return () => clearTimeout(timer);
  }, [inView, reduced]);

  return (
    <div
      ref={ref}
      role="img"
      aria-label="Illustrative Discord-style chat: a member asks ZiGBoT for help before an exam, ZiGBoT types and replies, and a server settings panel shows persona, gentle roles and chat channel."
      className="relative"
    >
      <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-zig-1 shadow-2xl shadow-black/40">
        <div className="flex items-center gap-2 border-b border-white/[0.06] px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="ml-2 truncate font-mono text-[11px] text-muted-foreground">ZiG's server</span>
        </div>

        <div className="flex h-[340px] lg:h-[440px]">
          <div className="hidden w-14 shrink-0 flex-col items-center gap-2 border-r border-white/[0.05] bg-black/20 py-3 sm:flex">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-zig font-display text-xs font-bold text-zig-1">Z</span>
            <span className="h-px w-6 bg-white/10" />
            <span className="h-9 w-9 rounded-full bg-zig-3" />
            <span className="h-9 w-9 rounded-full bg-zig-3" />
          </div>

          <div className="hidden w-40 shrink-0 border-r border-white/[0.05] bg-zig-2/60 p-3 md:block">
            <p className="mb-2 px-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Channels</p>
            <ul className="space-y-0.5">
              {channels.map(c => (
                <li
                  key={c.name}
                  className={cn(
                    "flex items-center gap-1.5 rounded-md px-2 py-1.5 text-[13px]",
                    c.active ? "bg-white/[0.07] text-foreground" : "text-muted-foreground",
                  )}
                >
                  <c.icon size={14} className="shrink-0 opacity-70" />
                  <span className="truncate">{c.name}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex min-w-0 flex-1 flex-col">
            <div className="flex items-center gap-1.5 border-b border-white/[0.05] px-4 py-2.5 text-sm font-semibold text-foreground">
              <Hash size={15} className="text-muted-foreground" /> zig-chat
            </div>

            <div className="flex flex-1 flex-col justify-end gap-4 overflow-hidden px-4 py-4">
              <Message name="Aarav" avatar={<Avatar label="A" className="bg-accent/25 text-accent" />}>
                anyone up for ranked tonight?
              </Message>

              <AnimatePresence initial={false}>
                {phase >= 1 && (
                  <Message key="ask" name="Riya" avatar={<Avatar label="R" className="bg-primary/20 text-primary" />}>
                    <span className="text-zig">@ZiGBoT</span> exam tomorrow and I haven't opened the book
                  </Message>
                )}
                {phase === 2 && (
                  <motion.div
                    key="typing"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2 pl-11 text-[12px] text-muted-foreground"
                  >
                    <span className="flex gap-1">
                      {[0, 1, 2].map(i => (
                        <span
                          key={i}
                          className="h-1.5 w-1.5 animate-blink rounded-full bg-zig"
                          style={{ animationDelay: `${i * 0.18}s` }}
                        />
                      ))}
                    </span>
                    ZiGBoT is typing…
                  </motion.div>
                )}
                {phase === 3 && (
                  <Message
                    key="reply"
                    name="ZiGBoT"
                    bot
                    avatar={<Avatar label="Z" className="bg-zig text-zig-1" />}
                  >
                    Bold strategy. 25 minutes on chapter one, then come back and brag. I'll be right here.
                  </Message>
                )}
              </AnimatePresence>
            </div>

            <div className="px-4 pb-4">
              <div className="rounded-lg bg-zig-3/70 px-3 py-2.5 text-[13px] text-muted-foreground">Message #zig-chat</div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 rounded-2xl border border-zig/25 bg-zig-2/95 p-4 shadow-2xl shadow-black/50 backdrop-blur-xl lg:absolute lg:-right-3 lg:-top-8 lg:mt-0 lg:w-64">
        <p className="flex items-center gap-2 text-xs font-semibold text-foreground">
          <Settings2 size={14} className="text-zig" /> Server settings
        </p>
        <dl className="mt-3 space-y-2">
          {settings.map(s => (
            <div key={s.label} className="flex items-center justify-between gap-3 text-[12px]">
              <dt className="text-muted-foreground">{s.label}</dt>
              <dd className="rounded-md border border-white/[0.08] bg-white/[0.04] px-2 py-0.5 font-mono text-foreground">
                {s.value}
              </dd>
            </div>
          ))}
          <div className="flex items-center justify-between gap-3 border-t border-white/[0.06] pt-2 text-[12px]">
            <dt className="text-muted-foreground">Safety rules</dt>
            <dd className="flex items-center gap-1 font-mono text-success">
              <Lock size={11} /> always on
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default ZigbotMockup;
