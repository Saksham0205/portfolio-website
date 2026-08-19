export function Footer() {
  return (
    <footer className="border-t border-border/60 px-6 py-10 md:px-12">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
        <span>© {new Date().getFullYear()} Saksham Chauhan</span>
        <span>Lat 28.5450° N · Long 77.2732° E</span>
        <a href="mailto:saksham252003@gmail.com" className="hover:text-primary transition-colors">
          saksham252003@gmail.com
        </a>
      </div>
    </footer>
  );
}
