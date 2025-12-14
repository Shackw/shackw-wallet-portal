import { Link, Outlet, useLocation } from "react-router-dom";

import { Button } from "@/components/ui/button";

const AppLayout = () => {
  const loc = useLocation();

  return (
    <div className="min-h-dvh bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
          <Link to="/" className="font-semibold tracking-tight">
            Shackw Wallet
          </Link>

          <nav className="flex items-center gap-2">
            <Button asChild variant={loc.pathname.startsWith("/tester") ? "default" : "ghost"} size="sm">
              <Link to="/tester">Tester</Link>
            </Button>
            <Button asChild variant={loc.pathname.startsWith("/developers") ? "default" : "ghost"} size="sm">
              <Link to="/developers">Developers</Link>
            </Button>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-10">
        <Outlet />
      </main>

      <footer className="border-t py-8">
        <div className="mx-auto max-w-5xl px-4 text-sm text-muted-foreground">© {new Date().getFullYear()} Shackw</div>
      </footer>
    </div>
  );
};

export default AppLayout;
