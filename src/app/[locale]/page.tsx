"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";

import { MenuNavigation } from "./data/menu_navigation";
import { MenuById } from "./data";

type MenuNavigationType = {
  id: string;
  children: string[];
};

export default function MenuPage() {
  const t = useTranslations();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const [activeSection, setActiveSection] = useState<string | null>(null);

  const activeSectionData: MenuNavigationType | undefined =
    MenuNavigation.find((s) => s.id === activeSection);

  const switchLocale = (nextLocale: "es" | "en") => {
    const newPath = pathname.replace(`/${locale}`, `/${nextLocale}`);
    router.push(newPath);
  };

  return (
    <main className="min-h-screen bg-neutral-900 text-white">
      {/* HEADER */}
      <header className="sticky top-0 z-30 bg-neutral-900 border-b border-neutral-800">
        <div className="flex justify-between items-center px-4 py-4">
          <h1 className="text-lg font-semibold text-orange-500">
            Hunter Coffee Shop
          </h1>

          <div className="flex gap-2">
            {(["es", "en"] as const).map((l) => (
              <button
                key={l}
                onClick={() => switchLocale(l)}
                className={`px-3 py-1 text-sm rounded transition ${
                  locale === l
                    ? "bg-orange-500 text-black"
                    : "border border-orange-500/40 text-orange-400"
                }`}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* 🟢 ÉCRAN 1 — UNIVERS */}
      {!activeSection && (
        <section className="px-4 py-10 grid gap-4">
          {MenuNavigation.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className="p-6 rounded bg-neutral-800 text-xl font-semibold text-left
                         hover:bg-neutral-700 transition
                         border border-orange-500/20"
            >
              <span className="text-orange-500">● </span>
              {t(section.label)}
            </button>
          ))}
        </section>
      )}

      {/* 🟢 ÉCRAN 2 — PLATS */}
      {activeSection && activeSectionData && (
        <section className="px-4 py-10">
          <button
            onClick={() => setActiveSection(null)}
            className="text-sm text-orange-400 mb-8"
          >
            ← {t("common.back")}
          </button>

          <div className="space-y-16">
            {activeSectionData.children.map((menuId) => {
              const menu = MenuById[menuId];

              return (
                <section key={menu.id}>
                  {/* Titre catégorie */}
                  <h2 className="text-2xl font-semibold mb-8 uppercase text-orange-500">
                    {t(menu.categorie)}
                  </h2>

                  {/* Plats */}
                  <div className="space-y-7">
                    {menu.plats.map((plat) => (
                      <div
                        key={plat.label + plat.price}
                        className="pb-4 border-b border-neutral-800"
                      >
                        <div className="flex justify-between gap-6">
                          <p className="text-lg font-medium">
                            {t(plat.label)}
                          </p>

                          {plat.price > 0 && (
                            <p className="text-lg font-medium text-orange-400">
                              ${plat.price}
                            </p>
                          )}
                        </div>

                        {plat.description && (
                          <p className="text-sm text-neutral-400 mt-1">
                            {t(plat.description)}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Commentaire */}
                  {menu.comment && (
                    <p className="text-sm text-neutral-400 mt-6">
                      {t(menu.comment)}
                    </p>
                  )}

                  {/* Extras */}
                  {menu.extra && (
                    <div className="mt-6">
                      <p className="text-sm font-medium mb-3 text-orange-400">
                        {t("menu.extras")}
                      </p>
                      <div className="flex flex-wrap gap-3 text-sm text-neutral-400">
                        {menu.extra.map((extra) => (
                          <span key={extra.label}>
                            {t(extra.label)} +${extra.price}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </section>
              );
            })}
          </div>
        </section>
      )}
    </main>
  );
}
