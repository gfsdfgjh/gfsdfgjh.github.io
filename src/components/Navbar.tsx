import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { navItems, profile } from "@/lib/content";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("about");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      let current = navItems[0].id;
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el && el.getBoundingClientRect().top <= 120) current = item.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5 sm:px-8">
        <button
          onClick={() => go("about")}
          className="font-display text-lg tracking-wide text-ink"
        >
          {profile.name}
          <span className="ml-2 hidden text-sm text-muted-foreground sm:inline">
            {profile.nameEn}
          </span>
        </button>

        {/* 桌面导航 */}
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => go(item.id)}
              className={cn(
                "rounded px-3 py-1.5 text-sm transition-colors",
                active === item.id
                  ? "bg-accent text-accent-foreground"
                  : "text-ink-soft hover:text-ink"
              )}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* 移动端汉堡 */}
        <button
          className="md:hidden p-2 text-ink"
          aria-label={open ? "关闭菜单" : "打开菜单"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <nav className="expand-panel border-t border-border bg-background px-5 pb-4 pt-2 md:hidden">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => go(item.id)}
              className={cn(
                "block w-full rounded px-3 py-2.5 text-left text-sm",
                active === item.id ? "bg-accent text-accent-foreground" : "text-ink"
              )}
            >
              {item.label}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
}
