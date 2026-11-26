import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/tietosuoja")({
  head: () => ({
    meta: [
      { title: "Tietosuojaseloste – Virkkuviher" },
      { name: "description", content: "Tietosuojaseloste – Virkkuviher, käsintehdyt virkatut kasviasusteet." },
      { property: "og:title", content: "Tietosuojaseloste – Virkkuviher" },
      { property: "og:description", content: "Tietosuojaseloste – Virkkuviher." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20">
      <h1 className="text-4xl text-primary">Tietosuojaseloste</h1>
      <p className="mt-4 text-muted-foreground">Tämä sivu rakennetaan seuraavassa vaiheessa.</p>
    </section>
  );
}