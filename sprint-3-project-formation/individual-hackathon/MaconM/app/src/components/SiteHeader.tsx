import Link from "next/link";

export function SiteHeader({ variant = "public" }: { variant?: "public" | "admin" }) {
  return (
    <header className="border-b border-border bg-surface">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-lg font-semibold tracking-tight text-foreground">
            HearBack
          </span>
          {variant === "admin" && (
            <span className="rounded-full bg-surface-muted px-2 py-0.5 text-xs font-medium text-muted">
              Board Admin
            </span>
          )}
        </Link>
        {variant === "public" ? (
          <Link href="/admin" className="text-sm text-muted hover:text-foreground">
            Board Admin
          </Link>
        ) : (
          <form action="/api/admin/logout" method="post">
            <button className="text-sm text-muted hover:text-foreground" type="submit">
              Sign out
            </button>
          </form>
        )}
      </div>
    </header>
  );
}
