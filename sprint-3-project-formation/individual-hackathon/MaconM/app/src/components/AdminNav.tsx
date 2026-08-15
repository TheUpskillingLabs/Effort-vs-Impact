"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const TABS = [
  { href: "/admin", label: "Dashboard" },
  { href: "/admin/item", label: "Agenda item" },
  { href: "/admin/submissions", label: "Submissions" },
  { href: "/admin/themes", label: "Themes" },
];

export function AdminNav() {
  const pathname = usePathname();

  return (
    <nav className="mx-auto flex max-w-3xl gap-1 overflow-x-auto px-4 sm:px-6" aria-label="Admin">
      {TABS.map((tab) => {
        const active = tab.href === "/admin" ? pathname === "/admin" : pathname.startsWith(tab.href);
        return (
          <Link
            key={tab.href}
            href={tab.href}
            aria-current={active ? "page" : undefined}
            className={
              "shrink-0 border-b-2 px-3 py-3 text-sm font-medium " +
              (active
                ? "border-primary text-foreground"
                : "border-transparent text-muted hover:border-border hover:text-foreground")
            }
          >
            {tab.label}
          </Link>
        );
      })}
    </nav>
  );
}
