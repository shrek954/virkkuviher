import { createFileRoute, Link } from "@tanstack/react-router";
import { HandHeart, Sprout, Gift } from "lucide-react";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import hero from "@/assets/hero.jpg";
import banner from "@/assets/banner.jpg";
import { products, formatPrice } from "@/lib/products";
import { useCart } from "@/lib/cart";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Virkkuviher – Käsintehtyä lämpöä kasveillesi" },
      { name: "description", content: "Virkatut ruukunsuojat ja kasvikoristeet tuovat persoonallisuutta kotiisi." },
      { property: "og:title", content: "Virkkuviher – Käsintehtyä lämpöä kasveillesi" },
      { property: "og:description", content: "Virkatut ruukunsuojat ja kasvikoristeet tuovat persoonallisuutta kotiisi." },
    ],
  }),
  component: Index,
});

const popular = ["sammal", "aalto", "lehti", "lahja-pieni"].map(
  (id) => products.find((p) => p.id === id)!,
);

const reasons = [
  { icon: HandHeart, title: "Käsintehty Suomessa", text: "Jokainen tuote virkataan käsin pienissä erissä." },
  { icon: Sprout, title: "Kestävät materiaalit", text: "Pehmeää puuvillalankaa, joka kestää käsinpesun 30 °C." },
  { icon: Gift, title: "Täydellinen lahjaksi", text: "Valmiit lahjapaketit kasvi-ihmiselle." },
];

function Index() {
  const { add } = useCart();
  return (
    <>
      <Toaster />
      <section className="relative overflow-hidden">
        <img src={hero} alt="Virkattuja ruukunsuojia vihreinä, beigeinä ja valkoisina huonekasvien kanssa puuhyllyllä" width={1600} height={912} className="absolute inset-0 h-full w-full object-cover object-right" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-transparent" />
        <div className="relative mx-auto max-w-6xl px-5 py-28 md:py-40">
          <div className="max-w-xl">
            <h1 className="text-5xl leading-tight md:text-6xl">Käsintehtyä lämpöä kasveillesi</h1>
            <p className="mt-6 text-lg">Virkatut ruukunsuojat ja kasvikoristeet tuovat persoonallisuutta kotiisi.</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/kauppa" className="rounded-full bg-primary px-7 py-3.5 font-semibold text-primary-foreground hover:opacity-90">Tutustu tuotteisiin</Link>
              <Link to="/meista" className="rounded-full border-2 border-primary px-7 py-3 font-semibold text-primary hover:bg-primary hover:text-primary-foreground">Meidän tarinamme</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-24">
        <h2 className="text-center text-4xl">Suosituimmat tuotteet</h2>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {popular.map((p) => (
            <article key={p.id} className="flex flex-col overflow-hidden rounded-2xl bg-card shadow-sm">
              <img src={p.image} alt={p.alt} loading="lazy" width={816} height={816} className="aspect-square w-full object-cover" />
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-xl">{p.name}</h3>
                <p className="mt-1 text-lg font-semibold text-primary">{formatPrice(p.price)}</p>
                <button
                  onClick={() => {
                    add({ id: p.id, size: p.sizes?.[0], color: p.colors?.[0] });
                    toast.success(`${p.name} lisätty ostoskoriin`);
                  }}
                  className="mt-auto pt-0 rounded-full bg-primary px-5 py-3 font-semibold text-primary-foreground hover:opacity-90 [margin-top:1.25rem]"
                >
                  Lisää ostoskoriin
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-accent py-24">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="text-center text-4xl">Miksi Virkkuviher?</h2>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {reasons.map((r) => (
              <div key={r.title} className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-background text-primary">
                  <r.icon className="h-7 w-7" aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-xl">{r.title}</h3>
                <p className="mt-2">{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pt-24">
        <div className="relative overflow-hidden rounded-3xl">
          <img src={banner} alt="Aurinkoinen olohuone täynnä huonekasveja virkatuissa ruukunsuojissa" loading="lazy" width={1600} height={704} className="h-80 w-full object-cover md:h-96" />
          <div className="absolute inset-0 flex items-center justify-center bg-foreground/45">
            <p className="font-display text-4xl text-primary-foreground md:text-6xl">Kasvit tekevät kodin</p>
          </div>
        </div>
      </section>
    </>
  );
}