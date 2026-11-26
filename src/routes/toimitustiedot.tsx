import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/toimitustiedot")({
  head: () => ({
    meta: [
      { title: "Toimitustiedot – Virkkuviher" },
      { name: "description", content: "Toimitustiedot – Virkkuviher, käsintehdyt virkatut kasviasusteet." },
      { property: "og:title", content: "Toimitustiedot – Virkkuviher" },
      { property: "og:description", content: "Toimitustiedot – Virkkuviher." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20">
      <h1 className="text-4xl text-primary">Toimitustiedot</h1>
      <p className="mt-4 text-muted-foreground">Tämä sivu rakennetaan seuraavassa vaiheessa.</p>
    </section>
  );
}