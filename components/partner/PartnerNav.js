import Logo from '@/components/Logo';
import Button from '@/components/Button';

export default function PartnerNav() {
  return (
    <header className="sticky top-0 z-[60] bg-cream/90 backdrop-blur border-b border-gold/15">
      <div className="wrap flex items-center justify-between h-[86px]">
        <a href="/" className="shrink-0">
          <Logo />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          <a href="/partner" className="text-[.72rem] tracking-[.15em] uppercase font-medium text-body hover:text-gold transition-colors">
            Partner Program
          </a>
          <a href="/benefits" className="text-[.72rem] tracking-[.15em] uppercase font-medium text-body hover:text-gold transition-colors">
            Benefits
          </a>
        </nav>

        <Button href="/apply" arrow className="!py-[14px] !px-[26px] text-[.7rem]">
          Apply
        </Button>
      </div>
    </header>
  );
}