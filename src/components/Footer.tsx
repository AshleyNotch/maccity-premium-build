import { Wrench } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/40 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <div className="flex items-center gap-2 text-lg font-bold">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <Wrench className="h-4 w-4" />
          </span>
          Mac<span className="text-primary">City</span>
        </div>
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} MacCity Auto. All rights reserved.</p>
      </div>
    </footer>
  );
}
