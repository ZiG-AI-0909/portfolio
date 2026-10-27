import { describe, it, expect, vi, afterEach } from "vitest";
import { render, screen, within, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Index from "@/pages/Index";
import ContactSection from "@/components/ContactSection";
import Navbar from "@/components/Navbar";
import { buildEmail } from "@/lib/email";

const renderPage = () =>
  render(
    <MemoryRouter>
      <Index />
    </MemoryRouter>,
  );

afterEach(() => vi.restoreAllMocks());

describe("portfolio page", () => {
  it("has exactly one h1 with my name", () => {
    renderPage();
    const h1s = screen.getAllByRole("heading", { level: 1 });
    expect(h1s).toHaveLength(1);
    expect(h1s[0]).toHaveTextContent("Bhavesh Kumar Tiwari");
  });

  it("renders sections in the agreed order", () => {
    const { container } = renderPage();
    const ids = Array.from(container.querySelectorAll("main > section[id]")).map(s => s.id);
    expect(ids).toEqual([
      "home",
      "about",
      "projects",
      "solutions",
      "process",
      "more-work",
      "experience",
      "skills",
      "results",
      "contact",
    ]);
  });

  it("links the featured products to their live sites in a new tab", () => {
    renderPage();
    const zig = screen.getByRole("link", { name: /visit zigbot ai/i });
    const sud = screen.getByRole("link", { name: /explore sudarshan ai/i });
    expect(zig).toHaveAttribute("href", "https://zigbotai.vercel.app");
    expect(sud).toHaveAttribute("href", "https://aisudarshanpipes.vercel.app/");
    for (const link of [zig, sud, screen.getByRole("link", { name: /add to discord/i })]) {
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
    }
  });

  it("opens every external link safely and never references the old Sudarshan URL", () => {
    const { container } = renderPage();
    const external = Array.from(container.querySelectorAll<HTMLAnchorElement>('a[href^="http"]'));
    expect(external.length).toBeGreaterThan(5);
    external.forEach(a => {
      expect(a.target).toBe("_blank");
      expect(a.rel).toBe("noopener noreferrer");
    });
    expect(container.innerHTML).not.toContain("ai-whats-app-business-automation-su-theta");
  });

  it("keeps every existing project in More work", () => {
    renderPage();
    const moreWork = document.getElementById("more-work")!;
    for (const company of ["AI Agent Store", "JustHR", "Karnataka Bangle Store", "EdiGlobe", "Sudarshan Pipes"]) {
      expect(within(moreWork).getAllByText(company).length).toBeGreaterThan(0);
    }
  });
});

describe("contact form", () => {
  it("shows validation errors and does not open a window for invalid input", async () => {
    const open = vi.spyOn(window, "open").mockReturnValue(null);
    render(<ContactSection />);
    fireEvent.click(screen.getByRole("button", { name: /compose email/i }));
    expect(await screen.findByText(/please enter your name/i)).toBeInTheDocument();
    expect(screen.getByText(/valid email address/i)).toBeInTheDocument();
    expect(open).not.toHaveBeenCalled();
  });

  it("opens Gmail compose and says so, without claiming the message was sent", async () => {
    const open = vi.spyOn(window, "open").mockReturnValue({ opener: {} } as Window);
    render(<ContactSection />);
    fireEvent.input(screen.getByLabelText("Name"), { target: { value: "Asha" } });
    fireEvent.input(screen.getByLabelText("Email"), { target: { value: "asha@example.com" } });
    fireEvent.input(screen.getByLabelText("Message"), { target: { value: "Need a WhatsApp assistant." } });
    fireEvent.click(screen.getByRole("button", { name: /compose email/i }));

    await waitFor(() => expect(open).toHaveBeenCalled());
    expect(open.mock.calls[0][0]).toContain("https://mail.google.com/mail/?view=cm&to=tiwaribhaveshkumar@gmail.com");
    const status = screen.getByRole("status");
    expect(status).toHaveTextContent(/opening gmail/i);
    expect(status).not.toHaveTextContent(/sent!|message sent/i);
  });

  it("builds an encoded mailto fallback", () => {
    const { mailto } = buildEmail({ name: "A & B", email: "a@b.co", message: "Hi?" });
    expect(mailto.startsWith("mailto:tiwaribhaveshkumar@gmail.com?subject=")).toBe(true);
    expect(mailto).toContain("A%20%26%20B");
  });
});

describe("navbar mobile menu", () => {
  it("toggles aria-expanded and closes on Escape, returning focus", async () => {
    render(<Navbar />);
    const toggle = screen.getByRole("button", { name: /open menu/i });
    expect(toggle).toHaveAttribute("aria-expanded", "false");
    fireEvent.click(toggle);
    expect(toggle).toHaveAttribute("aria-expanded", "true");
    expect(document.getElementById("mobile-menu")).toBeInTheDocument();
    fireEvent.keyDown(document, { key: "Escape" });
    await waitFor(() => expect(toggle).toHaveAttribute("aria-expanded", "false"));
    expect(document.activeElement).toBe(toggle);
  });
});
