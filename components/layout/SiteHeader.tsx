"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close mobile menu ONLY when the route changes
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setOpen((prev) => (prev ? false : prev));
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative flex h-20 md:h-28 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            {site.assets.logo ? (
              <Image
                src={site.assets.logo}
                alt={site.name}
                width={360}
                height={100}
                priority
                className="h-14 md:h-24 w-auto"
              />
            ) : (
              <div className="text-2xl font-bold tracking-wide">
                {site.name}
              </div>
            )}
          </Link>

          {/* Desktop navigation (unchanged) */}
          <nav className="hidden md:flex items-center gap-10">
            {site.nav.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-base font-semibold tracking-wide transition ${
                    isActive
                      ? "text-blue-700"
                      : "text-slate-700 hover:text-slate-900"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100 transition"
          >
            {open ? (
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M18 6L6 18" />
                <path d="M6 6l12 12" />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M4 6h16" />
                <path d="M4 12h16" />
                <path d="M4 18h16" />
              </svg>
            )}
          </button>

          {/* Mobile dropdown (overlays hero) */}
          {open && (
            <div className="md:hidden absolute left-0 right-0 top-full z-[9999]">
              <div className="mt-2 rounded-lg border border-slate-200 bg-white p-3 shadow-lg">
                <nav className="flex flex-col gap-1">
                  {site.nav.map((item) => {
                    const isActive =
                      pathname === item.href ||
                      (item.href !== "/" && pathname.startsWith(item.href));

                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`rounded-md px-3 py-2 text-base font-semibold tracking-wide transition ${
                          isActive
                            ? "bg-blue-50 text-blue-700"
                            : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                        }`}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
