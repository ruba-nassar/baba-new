"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { site } from "@/lib/site";

export default function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-28 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            {site.assets.logo ? (
              <Image
                src={site.assets.logo}
                alt={site.name}
                width={360}
                height={100}
                priority
                className="h-24 w-auto"
              />
            ) : (
              <div className="text-2xl font-bold tracking-wide">
                {site.name}
              </div>
            )}
          </Link>

          {/* Navigation */}
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
        </div>
      </div>
    </header>
  );
}
