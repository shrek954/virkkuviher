import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type CartItem = { id: string; qty: number; size?: string | undefined; color?: string | undefined };

type CartCtx = {
  items: CartItem[];
  count: number;
  add: (item: Omit<CartItem, "qty">, qty?: number) => void;
};

const Ctx = createContext<CartCtx | null>(null);
const KEY = "virkkuviher-cart";

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setItems(JSON.parse(raw));
    } catch {}
  }, []);

  const save = (next: CartItem[]) => {
    setItems(next);
    localStorage.setItem(KEY, JSON.stringify(next));
  };

  const add: CartCtx["add"] = (item, qty = 1) => {
    const i = items.findIndex(
      (x) => x.id === item.id && x.size === item.size && x.color === item.color,
    );
    if (i >= 0) {
      const next = [...items];
      const cur = next[i]!; next[i] = { ...cur, qty: cur.qty + qty };
      save(next);
    } else save([...items, { ...item, qty }]);
  };

  const count = items.reduce((s, x) => s + x.qty, 0);
  return <Ctx.Provider value={{ items, count, add }}>{children}</Ctx.Provider>;
}

export function useCart() {
  const c = useContext(Ctx);
  if (!c) throw new Error("useCart outside CartProvider");
  return c;
}