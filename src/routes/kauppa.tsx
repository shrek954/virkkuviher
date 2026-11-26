import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Leaf } from "lucide-react";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { products, formatPrice, type Product } from "@/lib/products";
import { useCart } from "@/lib/cart";

export const Route = createFileRoute("/kauppa")({
  head: () => ({
    meta: [
      { title: "Kauppa – Virkkuviher" },
      { name: "description", content: "Selaa virkattuja ruukunsuojia, kasvikoristeita, kasvialustoja ja lahjapaketteja." },
      { property: "og:title", content: "Kauppa – Virkkuviher" },
      { property: "og:description", content: "Käsintehdyt virkatut kasviasusteet yhdessä paikassa." },
    ],
  }),
  component: Page,
});

const categories = ["Kaikki", "Ruukunsuojat", "Kasvikoristeet", "Kasvialustat", "Lahjapaketit"] as const;

function Card({ p }: { p: Product }) {
  const { add } = useCart();
  const [size, setSize] = useState(p.sizes?.[0]);
  const [color, setColor] = useState(p.colors?.[0]);
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl bg-card shadow-sm">
      {p.image ? (
        <img src={p.image} alt={p.alt} loading="lazy" width={816} height={816} className="aspect-square w-full object-cover" />
      ) : (
        <div role="img" aria-label={p.alt} className="flex aspect-square w-full items-center justify-center bg-accent text-primary">
          <Leaf className="h-12 w-12" aria-hidden="true" />
        </div>
      )}
      <div className="flex flex-1 flex-col gap-3 p-5">
        <p className="text-sm text-muted-foreground">{p.category}</p>
        <h2 className="text-xl">{p.name}</h2>
        <p className="text-lg font-semibold text-primary">{formatPrice(p.price)}</p>
        {p.sizes && (
          <label className="text-sm">Koko
            <select value={size} onChange={(e) => setSize(e.target.value)} className="mt-1 w-full rounded-lg border border-input bg-background p-2">
              {p.sizes.map((s) => <option key={s}>{s}</option>)}
            </select>
          </label>
        )}
        {p.colors && (
          <label className="text-sm">Väri
            <select value={color} onChange={(e) => setColor(e.target.value)} className="mt-1 w-full rounded-lg border border-input bg-background p-2">
              {p.colors.map((c) => <option key={c}>{c}</option>)}
            </select>
          </label>
        )}
        <button
          onClick={() => { add({ id: p.id, size, color }); toast.success(`${p.name} lisätty ostoskoriin`); }}
          className="mt-auto rounded-full bg-primary px-5 py-3 font-semibold text-primary-foreground hover:opacity-90"
        >Lisää ostoskoriin</button>
      </div>
    </article>
  );
}

function Page() {
  const [cat, setCat] = useState<(typeof categories)[number]>("Kaikki");
  const list = cat === "Kaikki" ? products : products.filter((p) => p.category === cat);
  return (
    <section className="mx-auto max-w-6xl px-5 py-20">
      <Toaster />
      <h1 className="text-4xl md:text-5xl">Kaikki tuotteet</h1>
      <p className="mt-4 max-w-2xl text-lg">Jokainen tuote on virkattu käsin pehmeästä puuvillalangasta. Valitse koko ja väri kasvisi mukaan.</p>
      <div className="mt-10 flex flex-wrap gap-3" role="group" aria-label="Tuoteryhmät">
        {categories.map((c) => (
          <button key={c} onClick={() => setCat(c)} aria-pressed={cat === c}
            className={`rounded-full border-2 border-primary px-5 py-2 font-medium ${cat === c ? "bg-primary text-primary-foreground" : "text-primary hover:bg-accent"}`}>
            {c}
          </button>
        ))}
      </div>
      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {list.map((p) => <Card key={p.id} p={p} />)}
      </div>
    </section>
  );
}