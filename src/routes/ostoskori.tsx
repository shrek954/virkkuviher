import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/ostoskori")({
  head: () => ({
    meta: [
      { title: "Ostoskori – Virkkuviher" },
      { name: "description", content: "Ostoskori – Virkkuviher, käsintehdyt virkatut kasviasusteet." },
      { property: "og:title", content: "Ostoskori – Virkkuviher" },
      { property: "og:description", content: "Ostoskori – Virkkuviher." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20">
      <h1 className="text-4xl text-primary">Ostoskori</h1>
      <p className="mt-4 text-muted-foreground">Tämä sivu rakennetaan seuraavassa vaiheessa.</p>
    </section>
  );
}