import { createFileRoute, Link } from "@tanstack/react-router";
import { HandHeart, Recycle, Sprout } from "lucide-react";
import banner from "@/assets/banner.jpg";

export const Route = createFileRoute("/meista")({
  head: () => ({
    meta: [
      { title: "Meidän tarinamme – Virkkuviher" },
      { name: "description", content: "Virkkuviher syntyi rakkaudesta kasveihin ja käsitöihin. Lue, miten tuotteemme syntyvät." },
      { property: "og:title", content: "Meidän tarinamme – Virkkuviher" },
      { property: "og:description", content: "Rakkaudesta kasveihin ja käsitöihin." },
    ],
  }),
  component: Page,
});

const values = [
  { icon: HandHeart, title: "Käsityö", text: "Jokainen silmukka tehdään käsin – yksikään tuote ei ole täysin samanlainen." },
  { icon: Recycle, title: "Vastuullisuus", text: "Suosimme puuvillaa ja kierrätyslankoja sekä muovitonta pakkausta." },
  { icon: Sprout, title: "Kasvien ehdoilla", text: "Tuotteet suunnitellaan oikeille ruukuille, jotta kasvi voi hyvin." },
];

function Page() {
  return (
    <>
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:grid-cols-2">
        <div>
          <h1 className="text-4xl md:text-5xl">Meidän tarinamme</h1>
          <p className="mt-6 text-lg">Virkkuviher sai alkunsa, kun ikkunalaudan ruukut kaipasivat jotain pehmeämpää ja persoonallisempaa. Ensimmäinen ruukunsuoja virkattiin lahjaksi ystävälle – ja pian tilauksia tuli lisää.</p>
          <p className="mt-4 text-lg">Nykyään suunnittelemme ja virkkaamme ruukunsuojia, kasvikoristeita ja lahjapaketteja pienissä erissä. Haluamme tuoda kotiin lämpöä, joka kestää vuodesta toiseen.</p>
          <Link to="/kauppa" className="mt-8 inline-block rounded-full bg-primary px-7 py-3.5 font-semibold text-primary-foreground hover:opacity-90">Tutustu tuotteisiin</Link>
        </div>
        <img src={banner} alt="Aurinkoinen olohuone täynnä huonekasveja virkatuissa ruukunsuojissa" width={1600} height={704} className="aspect-[4/3] w-full rounded-3xl object-cover" />
      </section>
      <section className="bg-accent py-20">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="text-center text-4xl">Arvomme</h2>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-background text-primary"><v.icon className="h-7 w-7" aria-hidden="true" /></div>
                <h3 className="mt-5 text-xl">{v.title}</h3>
                <p className="mt-2">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}