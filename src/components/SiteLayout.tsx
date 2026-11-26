import { Link } from "@tanstack/react-router";
import { Leaf, Search, ShoppingBag, Instagram, Facebook } from "lucide-react";
import type { ReactNode } from "react";
import { useCart } from "@/lib/cart";

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2 font-display text-2xl text-primary">
      <Leaf className="h-6 w-6" aria-hidden="true" />
      Virkkuviher
    </Link>
  );
}

const nav = [
  { to: "/kauppa", label: "Kauppa" },
  { to: "/meista", label: "Meistä" },
  { to: "/yhteystiedot", label: "Yhteystiedot" },
] as const;

export function SiteLayout({ children }: { children: ReactNode }) {
  const { count } = useCart();
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
          <Logo />
          <nav aria-label="Päävalikko" className="hidden gap-8 md:flex">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} className="font-medium hover:text-primary" activeProps={{ className: "text-primary underline underline-offset-8" }}>
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Link to="/kauppa" aria-label="Hae tuotteita" className="rounded-full p-3 hover:bg-accent">
              <Search className="h-5 w-5" />
            </Link>
            <Link to="/ostoskori" aria-label={`Ostoskori, ${count} tuotetta`} className="relative rounded-full p-3 hover:bg-accent">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute right-0.5 top-0.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1 text-xs font-semibold text-primary-foreground">
                {count}
              </span>
            </Link>
          </div>
        </div>
        <nav aria-label="Mobiilivalikko" className="flex justify-center gap-6 pb-3 md:hidden">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} className="font-medium">{n.label}</Link>
          ))}
        </nav>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="mt-24 bg-accent">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 py-10 md:flex-row">
          <Logo />
          <div className="flex gap-6">
            <Link to="/toimitustiedot" className="hover:underline">Toimitustiedot</Link>
            <Link to="/tietosuoja" className="hover:underline">Tietosuojaseloste</Link>
          </div>
          <div className="flex gap-3">
            <a href="#" aria-label="Instagram" className="rounded-full p-2 hover:bg-background"><Instagram className="h-5 w-5" /></a>
            <a href="#" aria-label="Facebook" className="rounded-full p-2 hover:bg-background"><Facebook className="h-5 w-5" /></a>
            <a href="#" aria-label="Pinterest" className="rounded-full p-2 hover:bg-background">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-3.6 19.3c-.1-.8-.2-2 0-2.9l1.2-5s-.3-.6-.3-1.5c0-1.4.8-2.4 1.8-2.4.9 0 1.3.6 1.3 1.4 0 .9-.5 2.1-.8 3.3-.2 1 .5 1.8 1.5 1.8 1.8 0 3.1-1.9 3.1-4.6 0-2.4-1.7-4.1-4.2-4.1-2.9 0-4.5 2.1-4.5 4.4 0 .9.3 1.8.8 2.3.1.1.1.2.1.3l-.3 1.2c0 .2-.2.3-.4.2-1.3-.6-2.1-2.5-2.1-4 0-3.3 2.4-6.3 6.9-6.3 3.6 0 6.4 2.6 6.4 6 0 3.6-2.3 6.5-5.4 6.5-1.1 0-2.1-.6-2.4-1.2l-.7 2.5c-.2.9-.9 2.1-1.3 2.8A10 10 0 1 0 12 2z"/></svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}