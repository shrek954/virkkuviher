import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Clock } from "lucide-react";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/yhteystiedot")({
  head: () => ({
    meta: [
      { title: "Yhteystiedot – Virkkuviher" },
      { name: "description", content: "Ota yhteyttä Virkkuviheriin – kysy tuotteista, tilauksista tai yksilöllisistä toiveista." },
      { property: "og:title", content: "Yhteystiedot – Virkkuviher" },
      { property: "og:description", content: "Kysy tuotteista, tilauksista tai yksilöllisistä toiveista." },
    ],
  }),
  component: Page,
});

const field = "mt-1 w-full rounded-lg border border-input bg-background p-3";

function Page() {
  return (
    <section className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-2">
      <Toaster />
      <div>
        <h1 className="text-4xl md:text-5xl">Yhteystiedot</h1>
        <p className="mt-6 text-lg">Kysyttävää tuotteista tai haaveena oman värinen ruukunsuoja? Lähetä viesti, vastaamme kahden arkipäivän sisällä.</p>
        <ul className="mt-8 space-y-4">
          <li className="flex gap-3"><Mail className="h-5 w-5 text-primary" aria-hidden="true" /> info@virkkuviher.fi</li>
          <li className="flex gap-3"><MapPin className="h-5 w-5 text-primary" aria-hidden="true" /> Helsinki, Suomi</li>
          <li className="flex gap-3"><Clock className="h-5 w-5 text-primary" aria-hidden="true" /> Ma–pe 9–17</li>
        </ul>
      </div>
      <form
        className="space-y-5 rounded-2xl bg-card p-8 shadow-sm"
        onSubmit={(e) => { e.preventDefault(); toast.success("Kiitos viestistä! Palaamme pian."); e.currentTarget.reset(); }}
      >
        <label className="block font-medium">Nimi<input required name="nimi" className={field} /></label>
        <label className="block font-medium">Sähköposti<input required type="email" name="email" className={field} /></label>
        <label className="block font-medium">Viesti<textarea required name="viesti" rows={5} className={field} /></label>
        <button className="w-full rounded-full bg-primary px-7 py-3.5 font-semibold text-primary-foreground hover:opacity-90">Lähetä viesti</button>
      </form>
    </section>
  );
}