"use client";

import { useEffect, useMemo, useState } from "react";

import { MainMenuES } from "./data/main_menu_es";
import { MainMenuEN } from "./data/main_menu_en";
import { BreakfastMenuES } from "./data/breakfast_menu_es";
import { BreakfastMenuEN } from "./data/breakfast_menu_en";
import { slugify } from "./utils";
import { PRIMARY } from "./constants";

export default function MenuPage() {
  const [lang, setLang] = useState<"es" | "en">("es");
  const [active, setActive] = useState("");

  const menus = useMemo(() => {
    const main = lang === "es" ? MainMenuES : MainMenuEN;
    const breakfast = lang === "es" ? BreakfastMenuES : BreakfastMenuEN;
  
    return [breakfast, ...main];
  }, [lang]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );

    menus.forEach((menu: Menu) => {
      const id = slugify(menu.categorie);
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [menus]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-neutral-900 text-white">
      {/* HEADER */}
      <header className="sticky top-0 z-30 bg-neutral-900 border-b border-neutral-800">
        <div className="flex justify-between items-center px-4 py-4">
          {/* Replace with your restaurant name */}
          <h1 className="text-lg font-semibold">Hunter Coffee Shop</h1>

          <div className="flex gap-2">
            <button
              onClick={() => setLang("es")}
              className={`px-3 py-1 text-sm rounded ${
                lang === "es"
                  ? "bg-white text-black"
                  : "border border-white/40"
              }`}
            >
              ES
            </button>
            <button
              onClick={() => setLang("en")}
              className={`px-3 py-1 text-sm rounded ${
                lang === "en"
                  ? "bg-white text-black"
                  : "border border-white/40"
              }`}
            >
              EN
            </button>
          </div>
        </div>

        {/* CATEGORY NAV */}
        <nav className="flex gap-6 overflow-x-auto px-4 pb-3">
          {menus.map((menu: Menu) => {
            const id = slugify(menu.categorie);

            return (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="pb-1 whitespace-nowrap text-base transition"
                style={{
                  color:
                    active === id
                      ? PRIMARY
                      : "rgba(255,255,255,0.7)",
                  borderBottom:
                    active === id
                      ? `2px solid ${PRIMARY}`
                      : "2px solid transparent",
                }}
              >
                {menu.categorie}
              </button>
            );
          })}
        </nav>
      </header>

      {/* CONTENT */}
      <section className="px-4 py-14 space-y-28">
        {menus.map((menu: Menu) => {
          const id = slugify(menu.categorie);

          return (
            <section key={id} id={id} className="scroll-mt-[160px] md:scroll-mt-[140px]">
              <div className="flex items-center gap-3 mb-6">
                <h2 className="text-3xl font-semibold">
                  {menu.categorie}
                </h2>

                {menu.availableUntil && (
                  <span className="text-xs text-neutral-400">
                    Hasta {menu.availableUntil}:00
                  </span>
                )}

                {menu.availableFrom && (
                  <span className="text-xs bg-[#ff6f00] text-black px-2 rounded">
                    Desde {menu.availableFrom}:00
                  </span>
                )}
              </div>

              <div className="space-y-7">
                {menu.plats.map((plat: Plat) => (
                  <div key={plat.label + plat.price}>
                    <div className="flex justify-between gap-6">
                      <p className="text-lg font-medium">
                        {plat.label}
                      </p>
                      {plat.price > 0 && (
                        <p className="text-lg font-medium">
                          ${plat.price}
                        </p>
                      )}
                    </div>

                    {plat.description && (
                      <p className="text-sm text-neutral-400 mt-1">
                        {plat.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              {menu.comment && (
                <p className="text-sm text-neutral-400 mt-8">
                  {menu.comment}
                </p>
              )}

              {menu.extras && (
                <div className="mt-8">
                  <p className="text-sm font-medium mb-3">
                    Extras
                  </p>
                  <div className="flex flex-wrap gap-3 text-sm text-neutral-400">
                    {menu.extras.map((extra: Extra) => (
                      <span key={extra.label}>
                        {extra.label} +${extra.price}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </section>
          );
        })}
      </section>
    </main>
  );
}
