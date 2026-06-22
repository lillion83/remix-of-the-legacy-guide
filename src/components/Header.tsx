import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useT } from "@/lib/i18n";
import logo from "@/assets/the-inheritance-guide-logo.jpg";

export function navItems(t: ReturnType<typeof useT>) {
  return [
    { label: t.nav.home, to: "/" },
    { label: t.nav.hulpBijErfenis, to: "/hulp-bij-erfenis" },
    { label: t.nav.bijLevenRegelen, to: "/bij-leven-regelen" },
    { label: t.nav.kennisbank, to: "/kennisbank" },
    { label: t.nav.overOns, to: "/over-ons" },
    { label: t.nav.contact, to: "/contact" },
  ] as const;
}

function Brand({ onClick }: { onClick?: () => void }) {
  return (
    <Link
      to="/"
      onClick={onClick}
      className="flex items-center gap-3"
      aria-label="De Erfeniswijzer — home"
    >
      <img
        src={logo}
        alt="De Erfeniswijzer logo"
        className="h-11 w-auto rounded-lg shadow-soft"
      />
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const t = useT();
  const items = navItems(t);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Brand />

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
          {items.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="relative text-[0.95rem] font-medium text-foreground/80 transition-colors hover:text-primary"
              activeProps={{
                className: "text-primary",
                "data-active": "true",
              }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {({ isActive }) => (
                <span className="relative inline-block py-1">
                  {item.label}
                  <span
                    className={`absolute -bottom-0.5 left-0 h-0.5 rounded-full bg-accent transition-all duration-300 ${
                      isActive ? "w-full" : "w-0"
                    }`}
                  />
                </span>
              )}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button asChild className="rounded-full bg-accent px-6 text-accent-foreground hover:bg-accent/90">
            <Link to="/contact">{t.header.cta}</Link>
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label={t.header.openMenu}>
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-background">
              <div className="mt-2 mb-8">
                <Brand onClick={() => setOpen(false)} />
              </div>
              <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
                {items.map((item) => (
                  <SheetClose asChild key={item.to}>
                    <Link
                      to={item.to}
                      className="rounded-lg px-3 py-3 text-lg font-medium text-foreground/85 transition-colors hover:bg-secondary hover:text-primary"
                      activeProps={{ className: "bg-secondary text-primary" }}
                      activeOptions={{ exact: item.to === "/" }}
                    >
                      {item.label}
                    </Link>
                  </SheetClose>
                ))}
              </nav>
              <div className="mt-8">
                <SheetClose asChild>
                  <Button asChild className="w-full rounded-full bg-accent text-accent-foreground hover:bg-accent/90">
                    <Link to="/contact">{t.header.cta}</Link>
                  </Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
